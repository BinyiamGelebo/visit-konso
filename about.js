const languageSelect = document.querySelector("#about-language");
const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#about-nav");
const originalTitle = document.title;
const description = document.querySelector('meta[name="description"]');
const originalDescription = description.content;

function readPreference(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch (error) {
    console.warn("Could not read the saved site preference.", error);
    return fallback;
  }
}

function writePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn("Could not save the site preference.", error);
  }
}

function setLanguage(language) {
  if (!["en", "am", "om"].includes(language)) language = "en";
  document.documentElement.lang = language;
  document.title = language === "am" ? "ስለ ኮንሶ — ጌሰርጊዮ" : language === "om" ? "Waa’ee Konsoo — Gesergiyoo" : originalTitle;
  description.content = language === "am"
    ? "ስለ ጌሰርጊዮ የአሸዋ ድንጋይ ምሰሶዎች፣ የአካባቢው ቅጽል ስምና በአክብሮት ጉብኝት ስለማቀድ ይወቁ።"
    : language === "om"
      ? "Pinnaakilii dhagaa cirrachaa Gesergiyoo, maqaa naannoo keessaa fi akkamitti daawwannaa kabajaan akka karoorfattu baradhu."
      : originalDescription;
  document.querySelectorAll("[data-en][data-am][data-om]").forEach((element) => {
    element.innerHTML = language === "am" ? element.dataset.am : language === "om" ? element.dataset.om : element.dataset.en;
  });
  document.querySelectorAll("[data-alt-en][data-alt-am][data-alt-om]").forEach((image) => {
    image.alt = language === "am" ? image.dataset.altAm : language === "om" ? image.dataset.altOm : image.dataset.altEn;
  });
  languageSelect.value = language;
  languageSelect.setAttribute("aria-label", language === "am" ? "ቋንቋ" : language === "om" ? "Afaan" : "Language");
  siteNav.setAttribute("aria-label", language === "am" ? "ዋና ምናሌ" : language === "om" ? "Baafata ijoo" : "Main navigation");
  document.querySelector(".back-top").setAttribute("aria-label", language === "am" ? "ወደ ላይ ይመለሱ" : language === "om" ? "Gara gubbaatti deebi’i" : "Back to top");
  menuToggle.setAttribute("aria-label", language === "am" ? "ምናሌውን ክፈት" : language === "om" ? "Baafata bani" : "Open navigation");
  themeToggle.setAttribute("aria-label", language === "am"
    ? (document.documentElement.dataset.theme === "dark" ? "ወደ ብርሃን ገጽታ ይቀይሩ" : "ወደ ጨለማ ገጽታ ይቀይሩ")
    : language === "om" ? (document.documentElement.dataset.theme === "dark" ? "Gara ifaatti jijjiiri" : "Gara dukkanaatti jijjiiri")
    : (document.documentElement.dataset.theme === "dark" ? "Switch to light theme" : "Switch to dark theme"));
  themeToggle.querySelector(".theme-label").textContent = language === "am"
    ? (document.documentElement.dataset.theme === "dark" ? "ብርሃን" : "ጨለማ")
    : language === "om" ? (document.documentElement.dataset.theme === "dark" ? "Ifaa" : "Dukkana")
    : (document.documentElement.dataset.theme === "dark" ? "Light" : "Dark");
  writePreference("konso-language", language);
}

function setTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  document.querySelector('meta[name="theme-color"]').content = "#2b2118";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.querySelector(".theme-icon").textContent = isDark ? "☀" : "☾";
  const language = document.documentElement.lang;
  themeToggle.querySelector(".theme-label").textContent = language === "am"
    ? (isDark ? "ብርሃን" : "ጨለማ")
    : language === "om" ? (isDark ? "Ifaa" : "Dukkana")
    : (isDark ? "Light" : "Dark");
  themeToggle.setAttribute("aria-label", language === "am"
    ? (isDark ? "ወደ ብርሃን ገጽታ ይቀይሩ" : "ወደ ጨለማ ገጽታ ይቀይሩ")
    : language === "om" ? (isDark ? "Gara ifaatti jijjiiri" : "Gara dukkanaatti jijjiiri")
    : (isDark ? "Switch to light theme" : "Switch to dark theme"));
  writePreference("konso-theme", isDark ? "dark" : "light");
}

languageSelect.addEventListener("change", () => setLanguage(languageSelect.value));
themeToggle.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", document.documentElement.lang === "am"
    ? (isOpen ? "ምናሌውን ክፈት" : "ምናሌውን ዝጋ")
    : document.documentElement.lang === "om" ? (isOpen ? "Baafata bani" : "Baafata cufi")
    : (isOpen ? "Open navigation" : "Close navigation"));
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  menuToggle.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("is-open");
});

setTheme(readPreference("konso-theme", "dark"));
setLanguage(readPreference("konso-language", "en"));
