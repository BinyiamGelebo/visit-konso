/* Konso essentials, new photo captions, navigation groups and Karat captions:
   swaps data-en / data-am / data-om text (and data-alt-am / data-alt-om image alt text)
   when the language changes. Elements with data-aria-key receive a translated
   aria-label so screen-reader announcements follow the selected language. */
(() => {
  "use strict";
  const current = () => (["am", "om"].includes(document.documentElement.lang) ? document.documentElement.lang : "en");

  const ARIA = {
    home: { en: "Visit Konso home", am: "ወደ የኮንሶ ዋና ገጽ", om: "Gara fuula duraa Konsoo" },
    menu: { en: "Open navigation", am: "ምናሌውን ይክፈቱ", om: "Baafata bana" },
    nav: { en: "Main navigation", am: "ዋና ምናሌ", om: "Baafata ijoo" },
    language: { en: "Language", am: "ቋንቋ", om: "Afaan" },
    heroPhotos: { en: "Hero photographs", am: "ዋና ምስሎች", om: "Suuraawwan ijoo" },
    heroPhoto1: { en: "Show photo 1", am: "ፎቶ 1 አሳይ", om: "Suuraa 1 agarsiisi" },
    heroPhoto2: { en: "Show photo 2", am: "ፎቶ 2 አሳይ", om: "Suuraa 2 agarsiisi" },
    heroPhoto3: { en: "Show photo 3", am: "ፎቶ 3 አሳይ", om: "Suuraa 3 agarsiisi" },
    heroPhoto4: { en: "Show photo 4", am: "ፎቶ 4 አሳይ", om: "Suuraa 4 agarsiisi" },
    heroPause: { en: "Pause slideshow", am: "የስላይድ ትርኢቱን ያቁሙ", om: "Slideshow dhaabi" },
    heroFacts: { en: "Konso at a glance", am: "ኮንሶ በአጭሩ", om: "Konsoo gabaabaan" },
    scrollCue: { en: "Scroll to the landscape section", am: "ወደ መልክዓ ምድር ክፍል ይውረዱ", om: "Gara kutaa lafaatti gadi bu'i" },
    place0: { en: "Find Karat on OpenStreetMap", am: "ካራትን በOpenStreetMap ይፈልጉ", om: "Kaaraatii OpenStreetMap irratti barbaadi" },
    place1: { en: "See Gamole in the UNESCO photo gallery", am: "ጋሞሌን በዩኔስኮ የፎቶ ማዕከል ይመልከቱ", om: "Gamolee galerii suuraa UNESCO keessa ilaali" },
    place2: { en: "Read the heritage record for Mecheke", am: "ስለ ሜቼኬ የቅርስ መዝገብ ያንብቡ", om: "Waa'ee dhaala Mekheekee dubbisi" },
    place3: { en: "Find Buso on OpenStreetMap", am: "ቡሶን በOpenStreetMap ይፈልጉ", om: "Busoo OpenStreetMap irratti barbaadi" },
    place4: { en: "View UNESCO's maps of the Konso paletas", am: "የዩኔስኮ የኮንሶ ፓሌታ ካርታዎችን ይመልከቱ", om: "Kaartaa paleetoota Konsoo UNESCO ilaali" },
    place5: { en: "Read about terraces and water systems at UNESCO", am: "ስለ እርከኖችና የውሃ ሥርዓቶች በዩኔስኮ ያንብቡ", om: "Waa'ee tarrisiiwwanii fi sirna bishaanii UNESCO irratti dubbisi" },
    place6: { en: "Read about protected cultural places at UNESCO", am: "ስለ ተጠበቁ የባህል ስፍራዎች በዩኔስኮ ያንብቡ", om: "Waa'ee iddoo aadaa eegamaa UNESCO irratti dubbisi" },
    place7: { en: "Learn about Gesergiyo New York", am: "ስለ ጌሰርጊዮ ኒው ዮርክ ያንብቡ", om: "Waa'ee Gesergiyoo Niiw Yoork baradhu" },
    profileSources: { en: "Profile sources", am: "የመገለጫ ምንጮች", om: "Madda odeeffannoo" },
    media0: { en: "Watch The Konso Cultural Landscape in Ethiopia on YouTube", am: "The Konso Cultural Landscape in Ethiopia በዩቲዩብ ላይ ይመልከቱ", om: "The Konso Cultural Landscape in Ethiopia YouTube irratti ilaali" },
    media1: { en: "Watch A Living Legacy of Terracing on YouTube", am: "A Living Legacy of Terracing በዩቲዩብ ላይ ይመልከቱ", om: "A Living Legacy of Terracing YouTube irratti ilaali" },
    media2: { en: "Watch Terracing and moringa on YouTube", am: "Terracing and moringa በዩቲዩብ ላይ ይመልከቱ", om: "Terracing and moringa YouTube irratti ilaali" },
    media3: { en: "Watch Konso, Land of Origins on YouTube", am: "Konso, Land of Origins በዩቲዩብ ላይ ይመልከቱ", om: "Konso, Land of Origins YouTube irratti ilaali" },
    essentialsLinks: { en: "Konso essentials shortcuts", am: "የኮንሶ መሠረታዊ እውነታዎች አገናኞች", om: "Odeeffannoo Konsoo gabaabduu" },
    photoFilters: { en: "Filter photographs", am: "ፎቶዎችን በርዕስ ያጣሩ", om: "Suuraawwan hiri" },
    photoViewerClose: { en: "Close photograph", am: "ፎቶውን ዝጋ", om: "Suuraa cufi" },
    storyTabs: { en: "Explore Konso themes", am: "የኮንሶ ገጽታዎችን ይወቁ", om: "Mata duree Konsoo baradhu" },
    plannerOptions: { en: "Choose a visit length", am: "የጉብኝት ቀናትን ይምረጡ", om: "Dheerina daawwannaa filadhu" },
    itineraryList: { en: "Suggested visit outline", am: "የጉብኝት አስተያየት እቅድ", om: "Qabxiiwwan daawwannaa" },
    backTop: { en: "Back to top", am: "ወደ ላይ ይመለሱ", om: "Gara gubbaatti deebi'i" }
  };

  const apply = () => {
    const lang = current();
    document.querySelectorAll("[data-en][data-am][data-om]").forEach((el) => {
      if (el.hasAttribute("data-home-en")) return;
      el.textContent = el.dataset[lang] || el.dataset.en;
    });
    document.querySelectorAll("img[data-alt-am][data-alt-om]").forEach((img) => {
      img.dataset.altEn ??= img.dataset.englishAlt || img.alt;
      img.alt = lang === "en" ? img.dataset.altEn : img.dataset[lang === "am" ? "altAm" : "altOm"];
    });
    document.querySelectorAll("[data-aria-key]").forEach((el) => {
      const entry = ARIA[el.dataset.ariaKey];
      if (entry) el.setAttribute("aria-label", entry[lang] || entry.en);
    });
  };
  /* Re-run after app.js / om.js finish their own updates, whichever order they run in. */
  const later = () => { setTimeout(apply, 0); setTimeout(apply, 150); };
  new MutationObserver(later).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  document.querySelector("#language-select")?.addEventListener("change", later);
  apply();
  window.addEventListener("load", later);

  const drops = [...document.querySelectorAll(".nav-drop")];
  drops.forEach((drop) => {
    const toggle = drop.querySelector(".nav-drop-toggle");
    toggle?.addEventListener("click", (event) => {
      if (!window.matchMedia("(max-width: 900px)").matches) return;
      drops.forEach((other) => {
        if (other === drop) return;
        other.classList.remove("is-open");
        other.querySelector(".nav-drop-toggle")?.setAttribute("aria-expanded", "false");
      });
      const open = drop.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      if (open) event.preventDefault();
    });
    drop.querySelectorAll(".nav-drop-menu a").forEach((link) =>
      link.addEventListener("click", () => {
        drop.classList.remove("is-open");
        toggle?.setAttribute("aria-expanded", "false");
      }));
  });
})();
