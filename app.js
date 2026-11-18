/* Static-hosting support: use the Python API when present, otherwise read data/konso-guide.json */
let staticGuidePromise;
async function apiOrStatic(apiUrl, fromGuide) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (apiError) {
    staticGuidePromise ??= fetch("data/konso-guide.json").then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); });
    return fromGuide(await staticGuidePromise);
  }
}

const storyData = {
  villages: {
    title: { en: "Built to<br><em>belong.</em>", am: "በአንድነት<br><em>የተገነባ።</em>", om: "Waliin jiraachuuf<br><em>ijaarrame.</em>" },
    description: {
      en: "Konso villages are traditionally enclosed by stone walls, with pathways that bring neighbors together. Each settlement reflects generations of shared building and community life.",
      am: "በኮንሶ ባህላዊ መንደሮች በድንጋይ ግንቦች ይከበባሉ፤ መንገዶቻቸውም ጎረቤቶችን ያገናኛሉ። እያንዳንዱ ሰፈር የትውልዶችን የጋራ ግንባታና ማኅበራዊ ሕይወት ያንጸባርቃል።",
      om: "Gandoonni aadaa Konsoo dallaa dhagaa tiin marfamu; daandiiwwanis olloota walitti fidu. Qubsumi tokkoon tokkoon isaanii ijaarsa waliinii fi jireenya hawaasaa dhaloota hedduu calaqqisiisu."
    },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Traditional_settlement_in_the_Konso_Cultural_Landscape.jpg?width=1280",
    alt: { en: "A traditional settlement in the Konso Cultural Landscape", am: "በኮንሶ የባህል መልክዓ ምድር ያለ ባህላዊ ሰፈር" },
    credit: "Traditional settlement · Image source & licence",
    source: "https://commons.wikimedia.org/wiki/File:Traditional_settlement_in_the_Konso_Cultural_Landscape.jpg"
  },
  terraces: {
    title: { en: "Cultivated<br><em>with care.</em>", am: "በጥንቃቄ<br><em>የታረሰ መሬት።</em>", om: "Of eeggannoodhaan<br><em>qotame.</em>" },
    description: {
      en: "Stone terraces contour the hillsides, helping protect soil and make farming possible on steep ground. Their upkeep reflects a long tradition of cooperation and knowledge passed between generations.",
      am: "የድንጋይ እርከኖች የኮረብታውን ቁልቁለት ተከትለው አፈርን ከመሸርሸር ይጠብቃሉ፤ በቁልቁለት ላይ እርሻ እንዲቻልም ያግዛሉ። ጥገናቸው የትብብርና ከትውልድ ወደ ትውልድ የሚተላለፍ እውቀት ውጤት ነው።",
      om: "Tarrisiiwwan dhagaa cinaacha gaaraa hordofu; biyyoo dhiqamuu irraa eegu, lafa olka’aa irrattis qonnaaf mijataa godhu. Suphaan isaanii tumsa fi beekumsa dhalootaa tiin dabarfamu calaqqisiisa."
    },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Agricultural_terraces_in_the_Konso_Cultural_Landscape.jpg?width=1280",
    alt: { en: "Traditional agricultural terraces in the Konso Cultural Landscape", am: "በኮንሶ የባህል መልክዓ ምድር ያሉ ባህላዊ የእርሻ እርከኖች" },
    credit: "Agricultural terraces · Image source & licence",
    source: "https://commons.wikimedia.org/wiki/File:Agricultural_terraces_in_the_Konso_Cultural_Landscape.jpg"
  },
  heritage: {
    title: { en: "A culture<br><em>in motion.</em>", am: "ሕያው<br><em>ባህል።</em>", om: "Aadaa<br><em>jijjiiramaa.</em>" },
    description: {
      en: "Konso heritage is carried through community life, local knowledge and a strong relationship with the land. It is not only something preserved; it continues to be made by the people who call this place home.",
      am: "የኮንሶ ቅርስ በማኅበረሰብ ሕይወት፣ በአካባቢያዊ እውቀትና ከመሬት ጋር ባለው ጠንካራ ግንኙነት ይቀጥላል። የተጠበቀ ታሪክ ብቻ ሳይሆን፣ ይህን ቦታ ቤታቸው በሚሉ ሰዎች ዛሬም እየተፈጠረ ያለ ባህል ነው።",
      om: "Dhaalli Konsoo jireenya hawaasaa, beekumsa naannoo fi hariiroo cimaa lafa waliin qabuun jiraata. Wanti eegame qofa miti; aadaan namoota bakka kana mana isaanii jedhaniin ammallee bocamaa jira."
    },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Traditional_Konso_village_on_a_hillside,_Ethiopia.jpg?width=1280",
    alt: { en: "Traditional Konso village built on a hillside", am: "በኮረብታ ላይ የተገነባ ባህላዊ የኮንሶ መንደር" },
    credit: "Hillside village · Image source & licence",
    source: "https://commons.wikimedia.org/wiki/File:Traditional_Konso_village_on_a_hillside,_Ethiopia.jpg"
  }
};

const amharicCopy = {
  html: {
    "#hero-title": "የኮንሶን<br>አስደናቂ ስፍራዎች ያግኙ",
    "#landscape-title": "አስደናቂ ስፍራ፣<br><em>በጋራ የተፈጠረ።</em>",
    "#places-title": "ቦታዎችም<br><em>የታሪኩ አካል ናቸው።</em>",
    ".map-copy h3": "ኮንሶ፣<br>በደቡባዊ ደጋማ አካባቢ።",
    ".culture-intro h2": "ባህል ወደፊት<br><em>ይተላለፋል።</em>",
    "#photo-title": "የዕለት ተዕለት<br><em>ሕይወት በቅርብ።</em>",
    "#visit-title": "በጉጉት<br><em>ይጓዙ።</em>"
  },
  text: {
    ".site-nav a[href=\"#places\"]:not(.nav-drop-toggle)": "ቦታዎች",
    ".site-nav a[href=\"#culture\"]": "ባህልና ዕለታዊ ሕይወት",
    ".site-nav a[href=\"#people\"]": "ሕዝቡ",
    ".site-nav a[href=\"#heritage\"]": "ቅርስ",
    ".site-nav a[href=\"#getting-there\"]": "እንዴት መድረስ",
    ".site-nav a[href=\"#contact\"]": "ያግኙን",
    ".site-nav a[href=\"#visit\"]:not(.nav-cta):not(.nav-drop-toggle)": "ጉብኝት ያቅዱ",
    ".site-nav a[href=\"#karat\"]": "ካራትና ማረፊያ",
    ".site-nav a[href=\"about.html\"]": "ስለ ኮንሶ",
    ".hero-intro": "ኮንሶን ያግኙ፤ የድንጋይ እርከኖች፣ በአንድነት የሚኖሩ መንደሮች እና ከትውልድ የተላለፈ እውቀት ታሪክን የሚናገሩበት ስፍራ።",
    ".large-copy": "ለዘመናት የኮንሶ ማኅበረሰቦች ቁልቁለታማ ኮረብታዎችን ወደ ለም የእርሻ መሬት ቀይረዋል፤ አፈርንና ትውስታን የሚጠብቁ እርከኖችንና የድንጋይ ግንቦችን ገንብተዋል።",
    ".body-copy": "አንዳንድ የእርከን ግንቦች እስከ አምስት ሜትር ከፍታ ይደርሳሉ። ደረቅ የድንጋይ ግንቦች አፈርን ይይዛሉ፣ ውሃን ያስተዳድራሉ፣ በቁልቁለት ላይ እርሻንም ይደግፋሉ።",
    ".places-heading > p": "የኮንሶ ቅርስ አንድ ሐውልት ብቻ አይደለም። በሰዎች የሚኖሩባቸውን በግንብ የተከበቡ ሰፈሮች፣ የእርሻ መሬቶች፣ የጋራ ስፍራዎችና የተጠበቁ ደኖችን የሚያገናኝ ሕያው መልክዓ ምድር ነው። የዩኔስኮ ገጽታ እነዚህን አካላት በኮንሶ ደጋማ አካባቢ አንድ ላይ ያገናኛል።",
    ".map-copy .eyebrow": "አቅጣጫ ይወቁ",
    ".map-copy > p:not(.eyebrow)": "ይህ ካርታ አጠቃላይ አቅጣጫ ለማወቅ ብቻ ነው። የግል ቤቶችን፣ የሥነ ሥርዓት ስፍራዎችን ወይም ሁሉንም የማኅበረሰብ መንገዶችን አያሳይም። ከአካባቢው አስጎብኚ ጋር መድረሻዎችንና የመግቢያ ፈቃድን ያረጋግጡ።",
    ".map-copy small": "የካርታ መረጃ © OpenStreetMap አበርካቾች",
    ".culture-intro > p:last-child": "እነዚህ የሕያው ባህል የተያያዙ ክፍሎች ናቸው። ልምዶች በማኅበረሰቦች መካከል ይለያያሉ፣ ከጊዜ ጋርም ይለወጣሉ፤ ትርጉማቸውን በተሻለ የሚያውቁት የኮንሶ ሕዝብ ነው።",
    ".photo-heading > p": "የጌሰርጊዮ የተቀረጹ ኮረብታዎች፣ በድንጋይ የተከበቡ መንደሮች፣ የገበያ እይታዎችና የማኅበረሰብ ሕይወት የሚካሄድባቸው ስፍራዎች። ፎቶውን ለማስፋትና ምንጩንና ፈቃዱን ለማረጋገጥ ይክፈቱ።",
    ".planner-heading h3": "ለግኝት ጊዜ ይተዉ።",
    ".planner-intro": "ይህ የመነሻ እቅድ ነው፣ የተወሰነ ጉብኝት አይደለም። የቀኑን እቅድ ከአካባቢው አስጎብኚና ከማኅበረሰቡ ፈቃድ ጋር ያስተካክሉ።",
    ".visitor-heading p:last-child": "ጉብኝትዎን በአክብሮት ለማድረግ ጥቂት ተግባራዊ ማስታወሻዎች።",
    "#photo-viewer-source": "የፎቶውን ምንጭ ይመልከቱ ↗",
    ".visit-copy > p": "የጉብኝት ቀን ብዛት ይምረጡ፤ ከዚያ እቅዱን ከፍላጎትዎ ጋር ያስማሙ።",
    ".site-footer > p": "በደቡባዊ ኢትዮጵያ የሚገኝ ሕያው የባህል መልክዓ ምድር።"
  },
  first: {
    ".site-nav .nav-cta": "ኮንሶን ያስሱ ",
    ".hero-actions > .text-link": "መልክዓ ምድሩን ይወቁ ",
    ".section-heading > .eyebrow": "መልክዓ ምድሩ",
    ".landscape-body > a": "ኮንሶን ይበልጥ ይወቁ ",
    ".places-heading > div .eyebrow": "የቦታ መመሪያ",
    ".map-copy > a": "ካርታውን ይክፈቱ ",
    ".culture-intro > .eyebrow": "ባህልና ዕለታዊ ሕይወት",
    ".photo-heading .eyebrow": "ኮንሶ በፎቶ",
    ".planner-heading .eyebrow": "የጉብኝት እቅድ",
    ".story-content > .eyebrow": "ዝርዝሩን ይመልከቱ",
    ".visit-topline .eyebrow": "ጉዞውን ያቅዱ",
    ".visit-copy .visit-button": "ስለ ኮንሶ በዩኔስኮ ያንብቡ ",
    ".visit-copy .visit-source": "የዩኔስኮ የቦታ ካርታዎች ",
    "#download-plan": "እቅዱን ያውርዱ ",
  },
  lists: {
    ".place-entry h3": ["Karat", "Gamole", "Mecheke", "Buso", "የፓሌታ ሰፈሮች", "እርከኖችና ውሃ", "ደኖች፣ መቅደሶችና ትውስታ", "ጌሰርጊዮ (“New York”)"],
    ".place-entry p": [
      "በኮንሶ ጉብኝት ለመጀመር የሚያግዝ ዋና ከተማ ነው። ከመነሳትዎ በፊት ስለ አስጎብኚዎች፣ ትራንስፖርትና የመድረሻ ሁኔታ በአካባቢው ይጠይቁ።",
      "በዩኔስኮ የፎቶ ማህደር ውስጥ የእርከን ጥገና ምሳሌ ሆኖ የተጠቀሰ ቦታ ነው፤ ቅርሱ ዛሬም በሥራ ላይ እንዳለ ያሳያል።",
      "በድንጋይ ግንቦች፣ በሮችና በሞራዎች የሚታወቅ በግንብ የተከበበ ሰፈር (ፓሌታ) ነው። የቅርስ መዝገቡ ዋናውን የኮንሶ ሹመት ሰነድ ይጠቅሳል።",
      "በታተሙ የጉዞ ማጣቀሻዎች ውስጥ የተጠቀሰ የኮንሶ መንደር ነው። የካርታ ምልክቶችን አጠቃላይ አቅጣጫ ለማወቅ ብቻ ይጠቀሙ፤ መድረሻንና ፈቃድን ከአካባቢው አስጎብኚ ጋር ያረጋግጡ።",
      "በከፍተኛ ቦታዎች የተመሠረቱ በግንብ የተከበቡ ሰፈሮች ናቸው። ግንቦቻቸው፣ መንገዶቻቸውና ሞራዎቻቸው የማኅበረሰብ ሕይወት ማዕከላት ናቸው፤ ከተሞቹ አሁንም የሰዎች መኖሪያ ናቸው።",
      "የድንጋይ ደረቅ ግንቦች ኮረብታዎችን ተከትለው አፈርን ከመሸርሸር ይጠብቃሉ፣ ውሃንም ለማስተዳደር ያግዛሉ። በጋራ የተሠሩ የውሃ ማጠራቀሚያዎች (ሃርዳ) የዚህ ሕያው ሥርዓት ክፍል ናቸው።",
      "ባህላዊ ደኖች፣ መቅደሶችና የመቃብር ቦታዎች የቅርሱ አካል ናቸው። አንዳንዶቹ ስሱ ወይም የተገደቡ ስፍራዎች ናቸው፤ አድራሻቸውን የአካባቢ ጠባቂዎች ሲፈቅዱ ብቻ ይወቁ።",
      "ጌሰርጊዮ በመሬት መሸርሸር በተቀረጹ ከፍ ያሉ የአፈር ምሰሶዎች ይታወቃል። ቅርጻቸው የከተማ ሰማይ ጠቀስ ሕንጻዎችን ስለሚያስታውስ “New York” የሚል ቅጽል ስም አላቸው። የአካባቢ መድረሻንና ፈቃድን ከአስጎብኚ ጋር ያረጋግጡ።"
    ],
  },
  placeLinkLabels: ["Karat በካርታ ይፈልጉ", "በዩኔስኮ የGamole ፎቶዎችን ይመልከቱ", "ስለ Mecheke ያንብቡ", "Buso በካርታ ይፈልጉ", "የዩኔስኮ ካርታዎችን ይመልከቱ", "ስለ እርከኖች በዩኔስኮ ያንብቡ", "ስለ ቅዱሳን ስፍራዎች ያንብቡ", "ስለ ጌሰርጊዮ New York ያንብቡ"],
  photoCategories: ["ጌሰርጊዮ · ኒው ዮርክ", "እርከኖች", "የትውልድ ዛፍ", "ቤቶችና ግቢዎች", "ምግብና ገበያ", "ጥጥና የእጅ ሥራ", "የኮንሶ ባህላዊ መልክዓ ምድር", "የመንደር መግቢያዎች", "የድሮ መንገዶች", "የገበያ ቀን", "የማኅበረሰብ ስብሰባ ቦታዎች"],
  photoTitles: ["የጌሰርጊዮ የአፈር ምሰሶዎች", "ድንጋይ ወደ እርሻ መሬት", "በኮንሶ መንደር ውስጥ የትውልድ ዛፍ", "በቤተሰብ ግቢ ውስጥ ያሉ ቤቶች", "በገበያ ላይ ማሽላ", "ጥጥን በእጅ ማሽከርከር", "የኮንሶ ባህላዊ መልክዓ ምድር ውስጥ የአካባቢው ማኅበረሰቦች", "በድንጋይ በር ውስጥ ማለፍ", "ማኅበረሰቡን የሚያገናኙ መንገዶች", "በካራት ዕለታዊ ገበያ", "በኮንሶ የመንደር አደባባይ"],
  photoAlts: ["በጌሰርጊዮ ያሉ በመሬት መሸርሸር የተፈጠሩ የአፈር ምሰሶዎችና ገደሎች", "በኮንሶ የባህል መልክዓ ምድር ያሉ ባህላዊ የእርሻ እርከኖች", "የኮንሶ የትውልድ ዛፍና በዙሪያው ያሉ የመንደር ሕንጻዎች", "በኮንሶ የቤተሰብ ግቢ ውስጥ ያሉ ቤቶች", "በኮንሶ ገበያ ያለ ማሽላ", "የኮንሶ ሴት ጥጥ በእጅ ስታሽከረክር", "በኮንሶ ባህላዊ መልክዓ ምድር ውስጥ የአካባቢው ማኅበረሰቦች", "በባህላዊ የኮንሶ መንደር ያለ የድንጋይ መግቢያ", "በኮንሶ መንደር ያለ ጠባብ የድንጋይ መንገድ", "በካራት ከተማ ያለ ገበያ", "በኮንሶ ያለ ክፍት የመንደር አደባባይ"],
  photoFilters: ["ሁሉም ፎቶዎች", "መልክዓ ምድር", "ሕንጻዎች", "ምግብና ገበያ", "ሰዎችና ሙያ"],
  plannerOptions: ["አንድ ቀን", "ሁለት ቀን"],
  storyTabs: ["መንደሮች", "እርከኖች", "ቅርስ"]
};

const storyTabs = [...document.querySelectorAll(".story-tab")];
const storyTitle = document.querySelector("#story-title");
const storyDescription = document.querySelector("#story-description");
const storyImage = document.querySelector("#story-image");
const storyCredit = document.querySelector("#story-credit");
const storyPanel = document.querySelector("#story-panel");
const languageSelect = document.querySelector("#language-select");
const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const photoViewer = document.querySelector("#photo-viewer");
const viewerImage = document.querySelector("#photo-viewer-image");
const viewerTitle = document.querySelector("#photo-viewer-title");
const viewerSource = document.querySelector("#photo-viewer-source");
const plannerList = document.querySelector("#itinerary-list");
const plannerStatus = document.querySelector("#planner-status");
const pageTitle = document.title;
const pageDescription = document.querySelector('meta[name="description"]').content;
let selectedPhotoFilter = "all";
let selectedVisitDays = 1;
let currentItinerary = null;
let itineraryRequestId = 0;
let profileRequestId = 0;

function firstText(element) {
  return [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim())?.textContent ?? "";
}

function setFirstText(element, value) {
  const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) textNode.textContent = value;
  else element.textContent = value;
}

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

function saveOriginals(copy) {
  const saved = { html: {}, text: {}, first: {}, lists: {}, photoCategories: [], photoTitles: [], photoFilters: [], plannerOptions: [] };
  Object.keys(copy.html).forEach((selector) => { saved.html[selector] = document.querySelector(selector).innerHTML; });
  Object.keys(copy.text).forEach((selector) => { saved.text[selector] = document.querySelector(selector).textContent; });
  Object.keys(copy.first).forEach((selector) => { saved.first[selector] = firstText(document.querySelector(selector)); });
  Object.keys(copy.lists).forEach((selector) => { saved.lists[selector] = [...document.querySelectorAll(selector)].map((element) => element.textContent); });
  saved.photoCategories = [...document.querySelectorAll(".photo-category")].map((element) => element.textContent);
  saved.photoTitles = [...document.querySelectorAll(".photo-card strong")].map((element) => element.textContent);
  saved.photoFilters = [...document.querySelectorAll(".photo-filter")].map((element) => element.textContent);
  saved.plannerOptions = [...document.querySelectorAll(".planner-option")].map((element) => element.textContent);
  saved.placeLinkLabels = [...document.querySelectorAll(".place-entry > a")].map((element) => element.getAttribute("aria-label"));
  return saved;
}

const englishCopy = saveOriginals(amharicCopy);

function setLanguage(language) {
  window.omRestore?.();
  const copy = language === "am" ? amharicCopy : englishCopy;
  document.documentElement.lang = language;
  document.title = language === "am" ? "ኮንሶ — ቦታዎች፣ ሕዝብና ሕያው ቅርስ" : pageTitle;
  document.querySelector('meta[name="description"]').content = language === "am"
    ? "የኮንሶ ሕዝብ ቦታዎችን፣ ቋንቋን፣ ባህሎችንና ሕያው የባህል መልክዓ ምድርን ይወቁ።"
    : pageDescription;
  Object.entries(copy.html).forEach(([selector, value]) => { document.querySelector(selector).innerHTML = value; });
  Object.entries(copy.text).forEach(([selector, value]) => { document.querySelector(selector).textContent = value; });
  Object.entries(copy.first).forEach(([selector, value]) => { setFirstText(document.querySelector(selector), value); });
  document.querySelectorAll("[data-home-en][data-home-am]").forEach((element) => {
    element.textContent = language === "am" ? element.dataset.homeAm : language === "om" && element.dataset.homeOm ? element.dataset.homeOm : element.dataset.homeEn;
  });
  document.querySelectorAll("[data-home-alt-en][data-home-alt-am]").forEach((image) => {
    image.alt = language === "am" ? image.dataset.homeAltAm : language === "om" && image.dataset.homeAltOm ? image.dataset.homeAltOm : image.dataset.homeAltEn;
  });
  Object.entries(copy.lists).forEach(([selector, values]) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (selector === ".culture-entry a") setFirstText(element, values[index]);
      else element.textContent = values[index];
    });
  });
  if (language === "am") {
    document.querySelectorAll(".place-entry > a").forEach((element, index) => element.setAttribute("aria-label", copy.placeLinkLabels[index]));
  } else {
    document.querySelectorAll(".place-entry > a").forEach((element, index) => element.setAttribute("aria-label", copy.placeLinkLabels[index]));
  }
  document.querySelectorAll(".photo-category").forEach((element, index) => { element.dataset.en ??= element.textContent; element.textContent = (language === "am" ? copy.photoCategories[index] : undefined) ?? element.dataset.en; });
  document.querySelectorAll(".photo-card strong").forEach((element, index) => { element.dataset.en ??= element.textContent; element.textContent = (language === "am" ? copy.photoTitles[index] : undefined) ?? element.dataset.en; });
  document.querySelectorAll(".photo-card img").forEach((image, index) => {
    image.dataset.englishAlt ??= image.alt; image.alt = (language === "am" ? amharicCopy.photoAlts[index] : undefined) ?? image.dataset.englishAlt;
  });
  document.querySelectorAll(".photo-filter").forEach((button, index) => { button.textContent = copy.photoFilters[index]; });
  document.querySelectorAll(".planner-option").forEach((button, index) => { button.textContent = copy.plannerOptions[index]; });
  document.querySelector(".hero-image img").alt = language === "am"
    ? "በኮንሶ ባህላዊ መልክዓ ምድር የመንደር ፓኖራማ"
    : language === "om" ? "Ilaalcha bal’aa ganda aadaa Konsoo"
    : "Panoramic view of a traditional village in the Konso Cultural Landscape";
  document.querySelector(".visit-image img").alt = language === "am"
    ? "በኮረብታ ላይ የተገነባ ባህላዊ የኮንሶ መንደር"
    : language === "om" ? "Ganda aadaa Konsoo gaara irratti ijaarame"
    : "Traditional Konso village built on a hillside";
  storyTabs.forEach((tab, index) => setFirstText(tab, language === "am" ? amharicCopy.storyTabs[index] : ["Villages", "Terraces", "Heritage"][index]));
  languageSelect.value = language;
  languageSelect.setAttribute("aria-label", language === "am" ? "ቋንቋ" : "Language");
  siteNav.setAttribute("aria-label", language === "am" ? "ዋና ምናሌ" : "Main navigation");
  document.querySelector(".story-tabs").setAttribute("aria-label", language === "am" ? "የኮንሶ ገጽታዎችን ይወቁ" : "Explore Konso themes");
  document.querySelector(".photo-filters").setAttribute("aria-label", language === "am" ? "ፎቶዎችን በርዕስ ያጣሩ" : "Filter photographs");
  document.querySelector(".planner-options").setAttribute("aria-label", language === "am" ? "የጉብኝት ቀናትን ይምረጡ" : "Choose a visit length");
  document.querySelector(".itinerary-list").setAttribute("aria-label", language === "am" ? "የጉብኝት አስተያየት እቅድ" : "Suggested visit outline");
  document.querySelector(".photo-viewer-close").setAttribute("aria-label", language === "am" ? "ፎቶውን ዝጋ" : "Close photograph");
  document.querySelector(".map-block iframe").title = language === "am" ? "በደቡባዊ ኢትዮጵያ የኮንሶ አካባቢን የሚያሳይ ካርታ" : language === "om" ? "Kaartaa naannoo Konsoo kibba Itoophiyaa keessa jiru agarsiisu" : "Map showing the general Konso area in southern Ethiopia";
  document.querySelector(".back-top").setAttribute("aria-label", language === "am" ? "ወደ ላይ ይመለሱ" : "Back to top");
  if (language === "om" || language === "am") window.applyOromo?.(language);
  document.querySelectorAll(".photo-open").forEach((button) => {
    const alt = button.querySelector("img").alt;
    button.setAttribute("aria-label", language === "am" ? `ፎቶውን ይመልከቱ፦ ${alt}` : language === "om" ? `Suuraa ilaali: ${alt}` : `View photo: ${alt}`);
  });
  writePreference("konso-language", language);
  applyPhotoFilter(selectedPhotoFilter);
  renderItinerary();
  loadPeopleProfile(language);
  refreshStory();
  refreshThemeLabel();
}

function applyPhotoFilter(filter) {
  selectedPhotoFilter = filter;
  document.querySelectorAll(".photo-card").forEach((card) => {
    card.hidden = filter !== "all" && card.dataset.photoCategory !== filter;
  });
  document.querySelectorAll(".photo-filter").forEach((button) => {
    const active = button.dataset.photoFilter === filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

async function renderItinerary() {
  const language = ["am", "om"].includes(document.documentElement.lang) ? document.documentElement.lang : "en";
  const requestId = ++itineraryRequestId;
  const downloadButton = document.querySelector("#download-plan");
  currentItinerary = null;
  downloadButton.disabled = true;
  plannerStatus.textContent = language === "am" ? "የጉብኝት እቅዱ በመጫን ላይ ነው…" : "Loading the visit outline…";

  try {
    const payload = await apiOrStatic(`/api/itineraries?language=${language}&days=${selectedVisitDays}`, (g) => ({ language, days: selectedVisitDays, itinerary: g.itineraries[language][String(selectedVisitDays)] }));
    if (
      payload.language !== language ||
      payload.days !== selectedVisitDays ||
      !Array.isArray(payload.itinerary) ||
      !payload.itinerary.every((entry) => typeof entry.title === "string" && typeof entry.detail === "string")
    ) {
      throw new Error("Itinerary API returned an invalid response.");
    }
    if (requestId !== itineraryRequestId) return;

    currentItinerary = payload.itinerary;
    const items = currentItinerary.map(({ title, detail }, index) => {
    const item = document.createElement("li");
    const number = document.createElement("span");
    const copy = document.createElement("div");
    const heading = document.createElement("h4");
    const description = document.createElement("p");
    number.className = "itinerary-number";
    number.textContent = String(index + 1).padStart(2, "0");
    heading.textContent = title;
    description.textContent = detail;
    copy.append(heading, description);
    item.append(number, copy);
    return item;
    });
    plannerList.replaceChildren(...items);
    downloadButton.disabled = false;
    plannerStatus.textContent = "";
  } catch (error) {
    if (requestId !== itineraryRequestId) return;
    console.error("Could not load the Konso itinerary.", error);
    plannerList.replaceChildren();
    plannerStatus.textContent = language === "am"
      ? "የጉብኝት እቅዱን መጫን አልተቻለም። እባክዎ ገጹን ያድሱ።"
      : "The visit outline could not be loaded. Please refresh the page.";
  }
}

async function loadPeopleProfile(language) {
  const profile = document.querySelector("#people-profile");
  const requestId = ++profileRequestId;
  profile.setAttribute("aria-busy", "true");

  try {
    const guide = await apiOrStatic(`/api/guide?language=${language}`, (g) => ({
      name: g.name[language], location: g.location[language], profileHeading: g.profileHeading[language], profileIntro: g.profileIntro[language],
      peopleProfile: g.peopleProfile.map((i) => ({ title: i.title[language], body: i.body[language] })),
      sources: g.sources,
    }));
    if (
      typeof guide.profileHeading !== "string" ||
      typeof guide.profileIntro !== "string" ||
      typeof guide.name !== "string" ||
      typeof guide.location !== "string" ||
      !Array.isArray(guide.peopleProfile) ||
      !guide.peopleProfile.every((item) => typeof item.title === "string" && typeof item.body === "string") ||
      !Array.isArray(guide.sources) ||
      !guide.sources.every((source) => {
        if (typeof source.title !== "string" || typeof source.url !== "string") return false;
        try {
          return new URL(source.url).protocol === "https:";
        } catch {
          return false;
        }
      })
    ) {
      throw new Error("Guide API returned an invalid response.");
    }
    if (requestId !== profileRequestId) return;

    document.querySelector("#people-profile-location").textContent = `${guide.name} · ${guide.location}`;
    document.querySelector("#people-profile-title").textContent = guide.profileHeading;
    document.querySelector("#people-profile-intro").textContent = guide.profileIntro;
    const cards = guide.peopleProfile.map(({ title, body }) => {
      const article = document.createElement("article");
      const heading = document.createElement("h4");
      const description = document.createElement("p");
      heading.textContent = title;
      description.textContent = body;
      article.append(heading, description);
      return article;
    });
    document.querySelector("#people-profile-grid").replaceChildren(...cards);

    const sourceLinks = guide.sources.map(({ title, url }) => {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.rel = "noreferrer";
      link.textContent = title;
      return link;
    });
    document.querySelector("#people-profile-sources").replaceChildren(...sourceLinks);
    document.querySelector("#people-profile-status").textContent = "";
  } catch (error) {
    if (requestId !== profileRequestId) return;
    console.error("Could not load the Konso people profile.", error);
    document.querySelector("#people-profile-status").textContent = language === "am"
      ? "የኮንሶ መገለጫውን መጫን አልተቻለም። እባክዎ ገጹን ያድሱ።"
      : "The Konso people profile could not be loaded. Please refresh the page.";
  } finally {
    if (requestId === profileRequestId) profile.setAttribute("aria-busy", "false");
  }
}

function showPhoto(button) {
  const card = button.closest(".photo-card");
  const image = card.querySelector("img");
  const attribution = card.querySelector("figcaption a");
  viewerImage.src = image.currentSrc || image.src;
  viewerImage.alt = image.alt;
  viewerTitle.textContent = card.querySelector("strong").textContent;
  viewerSource.href = attribution.href;
  photoViewer.showModal();
}

function downloadItinerary() {
  const language = ["am", "om"].includes(document.documentElement.lang) ? document.documentElement.lang : "en";
  if (!currentItinerary) {
    plannerStatus.textContent = language === "am"
      ? "የጉብኝት እቅዱ ገና አልተጫነም።"
      : "The visit outline is not ready to download.";
    return;
  }
  const heading = language === "am" ? `የኮንሶ ${selectedVisitDays} ቀን የጉብኝት እቅድ` : `Visit Konso: ${selectedVisitDays}-day outline`;
  const note = language === "am"
    ? "መንገዶችንና የመድረሻ ፈቃድን ከአካባቢው አስጎብኚ ጋር ያረጋግጡ።"
    : "Confirm routes and access with a local guide.";
  const content = [heading, "", ...currentItinerary.flatMap(({ title, detail }, index) => [`${index + 1}. ${title}`, `   ${detail}`]), "", note].join("\n");
  const file = new Blob([content], { type: "text/plain;charset=utf-8" });
  const downloadLink = document.createElement("a");
  const fileUrl = URL.createObjectURL(file);
  downloadLink.href = fileUrl;
  downloadLink.download = `konso-visit-outline-${selectedVisitDays}-day.txt`;
  document.body.append(downloadLink);
  downloadLink.click();
  downloadLink.remove();
  window.setTimeout(() => URL.revokeObjectURL(fileUrl), 1000);
  plannerStatus.textContent = language === "am" ? "የጉብኝት እቅድ ወርዷል።" : "Visit outline downloaded.";
}

function refreshStory() {
  const activeTab = storyTabs.find((tab) => tab.getAttribute("aria-selected") === "true") ?? storyTabs[0];
  const story = storyData[activeTab.dataset.story];
  const language = ["am", "om"].includes(document.documentElement.lang) ? document.documentElement.lang : "en";
  storyTitle.innerHTML = story.title[language];
  storyDescription.textContent = story.description[language];
  storyImage.src = story.image;
  storyImage.alt = story.alt[language];
  storyCredit.href = story.source;
  storyCredit.textContent = language === "am" ? "የፎቶ ምንጭና ፈቃድ ↗" : language === "om" ? "Madda suuraa fi hayyama ↗" : story.credit;
  storyPanel.setAttribute("aria-labelledby", activeTab.id);
}

function selectStory(tab) {
  storyTabs.forEach((item) => {
    const selected = item === tab;
    item.classList.toggle("is-active", selected);
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  refreshStory();
}

function setTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#2b2118" : "#2b2118";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.querySelector(".theme-icon").textContent = isDark ? "☀" : "☾";
  writePreference("konso-theme", isDark ? "dark" : "light");
  refreshThemeLabel();
}

function refreshThemeLabel() {
  const isDark = document.documentElement.dataset.theme === "dark";
  const language = ["am", "om"].includes(document.documentElement.lang) ? document.documentElement.lang : "en";
  const label = language === "am" ? (isDark ? "ብርሃን" : "ጨለማ") : language === "om" ? (isDark ? "Ifaa" : "Dukkana") : (isDark ? "Light" : "Dark");
  themeToggle.querySelector(".theme-label").textContent = label;
  themeToggle.setAttribute("aria-label", language === "am"
    ? (isDark ? "ወደ ብርሃን ገጽታ ይቀይሩ" : "ወደ ጨለማ ገጽታ ይቀይሩ")
    : language === "om" ? (isDark ? "Gara ifaatti jijjiiri" : "Gara dukkanaatti jijjiiri")
    : (isDark ? "Switch to light theme" : "Switch to dark theme"));
}

storyTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectStory(tab));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextTab = storyTabs[(index + direction + storyTabs.length) % storyTabs.length];
    nextTab.focus();
    selectStory(nextTab);
  });
});

document.querySelectorAll(".photo-filter").forEach((button) => {
  button.addEventListener("click", () => applyPhotoFilter(button.dataset.photoFilter));
});

document.querySelectorAll(".photo-open").forEach((button) => {
  button.addEventListener("click", () => showPhoto(button));
});

photoViewer.addEventListener("click", (event) => {
  if (event.target === photoViewer) photoViewer.close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && photoViewer.open) photoViewer.close();
});

document.querySelectorAll(".planner-option").forEach((button) => {
  button.addEventListener("click", () => {
    selectedVisitDays = Number(button.dataset.days);
    document.querySelectorAll(".planner-option").forEach((option) => {
      const active = option === button;
      option.classList.toggle("is-active", active);
      option.setAttribute("aria-pressed", String(active));
    });
    plannerStatus.textContent = "";
    renderItinerary();
  });
});

document.querySelector("#download-plan").addEventListener("click", downloadItinerary);

languageSelect.addEventListener("change", () => setLanguage(languageSelect.value));
themeToggle.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  const lang = document.documentElement.lang;
  menuToggle.setAttribute("aria-label", lang === "am"
    ? (isOpen ? "ምናሌውን ክፈት" : "ምናሌውን ዝጋ")
    : lang === "om" ? (isOpen ? "Baafata bana" : "Baafata cufi")
    : (isOpen ? "Open navigation" : "Close navigation"));
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", document.documentElement.lang === "am" ? "ምናሌውን ክፈት" : document.documentElement.lang === "om" ? "Baafata bana" : "Open navigation");
  siteNav.classList.remove("is-open");
});

document.querySelectorAll(".photo-card img").forEach((image) => { image.dataset.englishAlt = image.alt; });
setTheme(readPreference("konso-theme", "dark"));
setLanguage(readPreference("konso-language", "en"));
