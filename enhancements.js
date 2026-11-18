(() => {
  "use strict";
  const checklist = document.querySelector(".visitor-checklist");
  if (checklist) {
    const items = [...checklist.querySelectorAll('input[type="checkbox"]')];
    const button = checklist.querySelector(".checklist-print");
    const update = () => {
      const done = items.filter(item => item.checked).length;
      if (button) button.textContent = done ? `Print checklist · ${done}/${items.length} prepared` : "Print checklist";
    };
    items.forEach(item => item.addEventListener("change", update));
    update();
  }
  const nav = document.querySelector(".site-nav");
  if (nav) {
    nav.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", () => {
        const toggle = document.querySelector(".menu-toggle");
        if (toggle && window.matchMedia("(max-width: 900px)").matches) {
          toggle.setAttribute("aria-expanded", "false");
          nav.classList.remove("is-open");
        }
      });
    });
  }
})();

(() => {
  "use strict";
  const links = [...document.querySelectorAll('.site-nav a[href^="#"]:not(.nav-cta)')];
  if (!links.length || !("IntersectionObserver" in window)) return;
  const byId = new Map(links.map(link => [link.getAttribute("href").slice(1), link]));
  const targets = [...byId.keys()].map(id => document.getElementById(id)).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.remove("is-current"));
      byId.get(entry.target.id)?.classList.add("is-current");
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  targets.forEach(target => observer.observe(target));
})();

/* Hero photo slideshow + header state */
(() => {
  "use strict";
  const hero = document.querySelector(".hero");
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  if (!hero) return;
  const slides = [...hero.querySelectorAll(".hero-slide")];
  const dots = [...hero.querySelectorAll(".hero-dots button")];
  const credit = hero.querySelector(".image-credit a");
  const pauseButton = hero.querySelector(".hero-pause");
  if (slides.length < 2) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let index = 0, timer = null, manuallyPaused = reduce;
  function labelControl() {
    if (!pauseButton) return;
    const language = document.documentElement.lang;
    const labels = {
      en: { pause: "Pause slideshow", play: "Play slideshow" },
      am: { pause: "የፎቶ ማሳያውን አቁም", play: "የፎቶ ማሳያውን አጫውት" },
      om: { pause: "Agarsiisa suuraa dhaabi", play: "Agarsiisa suuraa jalqabi" }
    }[language] || { pause: "Pause slideshow", play: "Play slideshow" };
    const text = manuallyPaused ? labels.play : labels.pause;
    pauseButton.setAttribute("aria-label", text);
    pauseButton.title = text;
    pauseButton.innerHTML = `<span aria-hidden="true">${manuallyPaused ? "▶" : "Ⅱ"}</span>`;
  }
  function loadSlide(slide) {
    if (slide && !slide.getAttribute("src") && slide.dataset.src) slide.src = slide.dataset.src;
  }
  function show(next) {
    index = (next + slides.length) % slides.length;
    loadSlide(slides[index]);
    loadSlide(slides[(index + 1) % slides.length]);
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
    dots.forEach((dot, i) => { dot.classList.toggle("is-active", i === index); dot.setAttribute("aria-current", String(i === index)); });
    if (credit) { credit.textContent = slides[index].dataset.credit; credit.href = slides[index].dataset.source; }
  }
  function stop() { if (timer) window.clearInterval(timer); timer = null; }
  function start() { stop(); if (!reduce && !manuallyPaused && !document.hidden) timer = window.setInterval(() => show(index + 1), 6500); }
  dots.forEach((dot, i) => dot.addEventListener("click", () => { show(i); start(); }));
  if (pauseButton) {
    pauseButton.hidden = reduce;
    pauseButton.addEventListener("click", () => { manuallyPaused = !manuallyPaused; labelControl(); start(); });
  }
  document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
  document.documentElement.addEventListener("langchange", labelControl);
  const languageSelect = document.querySelector("#language-select");
  if (languageSelect) languageSelect.addEventListener("change", () => { labelControl(); show(index); });
  show(0);
  labelControl();
  start();
})();

/* Luxury edition: scroll reveal + graceful handling of any image that fails to load */
(() => {
  "use strict";
  const targets = document.querySelectorAll(".section-heading, .places-heading, .photo-heading, .culture-entry, .knowledge-card, .stay-entry, .getting-grid article, .photo-card, .place-entry, .trip-planner, .map-block, .visitor-layout > *");
  if ("IntersectionObserver" in window && targets.length) {
    document.documentElement.classList.add("js-reveal");
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    targets.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
  }
  const drop = (img) => { const card = img.closest(".photo-card"); if (card) card.remove(); else img.style.visibility = "hidden"; };
  document.querySelectorAll(".photo-card img").forEach((img) => {
    img.addEventListener("error", () => drop(img), { once: true });
    if (img.complete && img.naturalWidth === 0 && img.currentSrc) drop(img);
  });
})();
