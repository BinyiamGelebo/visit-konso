/* Afaan Oromoo (om) layer. Runs after app.js; untranslated passages stay in English.
   Translations should be reviewed by a native Afaan Oromoo speaker before wide publication. */
(() => {
  "use strict";
  const HOME = {
    "See the places": "Iddoowwan ilaali",
    "The town before the trail.": "Magaalattii daandii duraa.",
    "Karat is the main town and a practical base for arranging transport, a local guide and supplies. Confirm routes and services locally before setting out.": "Kaaraatiin magaalaa guddittii fi bakka mijataa geejjibaa, qajeelcha naannoo fi kuusaa qopheessuuf dha. Imaltan dura karaa fi tajaajila naannoo irratti mirkaneeffadhaa.",
    "Places to stay.": "Iddoowwan boqonnaa.",
    "The hotel describes itself as being in the heart of Karat. Confirm availability and current services directly.": "Hoteelichi ofii isaa Kaaraatii guddoo keessa jira jedha. Banaa ta'uu fi tajaajila ammaa kallattiin mirkaneeffadhaa.",
    "Listed near Karat; booking enquiries are handled through its associated Omo Valley Tours operator. Confirm current availability before booking.": "Kaaraatiin dhiyootti tarreeffameera; gaaffiin kuusuu Omo Valley Tours waliin walqabatuun geggeeffama. Kuusuun dura banaa ta'uu mirkaneeffadhaa.",
    "Local directory and map listings exist, but current availability is unclear. Verify it is operating before planning around it.": "Tarree naannoo fi kaartaa irratti jira, garuu banaa ta'uun isaa ammaa ifa miti. Karoora itti hirkisuun dura hojii irra jiraachuu isaa mirkaneeffadhaa.",
    "Listings are for trip planning, not endorsements. Prices, phone numbers and road access can change; confirm directly before travel.": "Tarreewwan kun karoora imalaaf malee deeggarsa miti. Gatiin, lakkoofsi bilbilaa fi haalli daandii ni jijjiiramu; imaltan dura kallattiin mirkaneeffadhaa.",
    "Stone by stone, generation by generation.": "Dhagaa dhagaan, dhaloota dhalootaan.",
    "Konso's terraces and walls are still repaired by the families who depend on them. Walk the lanes with a local guide and see a heritage that is lived, not displayed.": "Tarrisiiwwanii fi dallaawwan Konsoo maatiiwwan irratti hirkatanitti ammallee suphamu. Qajeelcha naannoo waliin daandii irra deemaa; dhaala mul'ifamu osoo hin taane jiraatu ilaalaa.",
    "Plan your visit": "Daawwannaa keessan karoorsaa",
    "Each photograph links to its source page for attribution and reuse terms. Community photographs were shared for this guide.": "Suuraan tokkoon tokkoon madda isaa fi haala hayyamaa agarsiisuuf gara fuula maddaatti geessa. Suuraawwan hawaasaa qajeelfama kanaaf qoodamaniiru."
  };
  const nav = (h) => `.site-nav a[href="${h}"]:not(.nav-drop-toggle)`;
  const OM = [
    [nav("#places"), "Iddoowwan"], [nav("#culture"), "Aadaa fi jireenya"], [nav("#people"), "Uummata"], [nav("#heritage"), "Dhaala"],
    [nav("#getting-there"), "Akkaataa ga'umsaa"], [nav("#contact"), "Nu qunnamaa"], [`${nav("#visit")}:not(.nav-cta)`, "Daawwannaa karoorsi"], [nav("#karat"), "Kaaraatii fi bakka bultii"], [nav("about.html"), "Waa'ee Konsoo"],
    ["#hero-title", "Dinqii Konsoo<br>Argadhu", 1],
    [".hero-intro", "Konsoo beeki: iddoo tarrisiiwwan dhagaa, gandoonni walitti dhiyaatan fi beekumsi dhaloota irraa dhaloota dabarfame seenaa ammallee itti dubbatan."],
    [".hero-actions .text-link", "Lafa jiru ilaali"],
    [".scroll-cue", "GAD DEEMI, ILAALI"],
    ["#landscape-title", "Iddoo dinqisiisaa,<br><em>waliin ijaarame.</em>", 1],
    [".landscape .large-copy", "Waggoota hedduuf hawaasonni Konsoo gaarreen jabaa lafa qonnaa oomishaa taasisaniiru; tarrisii fi dallaa dhagaa biyyoo fi yaadannoo of keessatti qabatu ijaaraniiru."],
    [".landscape .body-copy", "Tarrisiiwwan tokko tokko hamma meetira shanii olka’u. Dallaan dhagaa gogaa biyyoo qaba, bishaan to’ata, qonna lafa olka’aa irrattis deeggara."],
    ["#places-title", "Iddoowwan<br>kutaa <em>seenaati.</em>", 1],
    [".places-heading > p", "Dhaalli Konsoo lafa aadaa jiraataa dha; qubsumaawwan dallaadhaan marfaman, lafa qonnaa, iddoowwan waliinii fi bosona eegamaa walitti hidha. Qabxiin UNESCO amala kanaa hunda badda Konsoo keessa walitti fidha."],
    [".map-copy h3", "Konsoo,<br>baddaa kibbaa keessa.", 1],
    [".map-copy .eyebrow", "BAKKA JIRTAN BARAADHAA"],
    [".map-copy > p:not(.eyebrow)", "Kaartaan kun bakka jiru ilaaluuf qofa. Manneen dhuunfaa, iddoo sirna aadaa yookaan karaa hawaasaa hunda hin agarsiisu. Iddoo deemtan fi eyyama qajeelcha naannoo waliin mirkaneeffadhaa."],
    [".culture-intro h2", "Aadaan fuula<br>duratti <em>dabarfama.</em>", 1],
    ["#photo-title", "Jireenya guyyaa<br>guyyaa <em>dhiyoo irraa.</em>", 1],
    [".photo-filter", ["Suuraawwan hunda", "Lafa", "Ijaarsa", "Nyaataa fi gabaa", "Uummataa fi ogummaa"]],
    [".planner-option", ["Guyyaa tokko", "Guyyaa lama"]],
    ["#visit-title", "Fedhii<br>waliin <em>deemaa.</em>", 1],
    [".visit-copy p", "Guyyaa daawwannaa meeqa akka ta’e filadhu; sana booda karoora fedhii keetti mijeeffadhu."],
    ["#getting-title", "Daandiin gara <em>Kaaraatii.</em>", 1],
    [".getting-heading p:last-child", "Fageenyi fi tajaajilli ni jijjiiramu; kanaaf kunniin qabxii jalqabaa qofa. Imaltan dura naannoo irratti mirkaneeffadhaa."],
    [".getting-grid article strong", ["Karaa xiyyaaraa", "Karaa konkolaataa"]],
    [".getting-grid article p", ["Buufatni xiyyaaraa dhiyoon Arba Minch dha; Konsoo irraa gara kaabaatti kiilomeetira 85 ta’a. Sagantaa balallii Finfinnee–Arba Minch ammaa mirkaneeffadhu.", "Kaaraatiin Finfinnee irraa gara kibbaatti kiilomeetira 540 ta’a; daandiin Butajiraa fi Arba Minch keessa darba. Daandiin Finfinnee irraa ka’uun iddoo darbii dha."]],
    [".site-footer > p:nth-of-type(1)", "Lafa jiraataa kibba Itoophiyaa."],
    [".site-nav .nav-cta", 'Konsoo daawwadhu <span aria-hidden="true">↗</span>', 1],
    [".landscape-body > a", 'Aadaa Konsoo baradhu <span aria-hidden="true">↓</span>', 1],
    [".map-copy > a", 'Kaartaa bana <span aria-hidden="true">↗</span>', 1],
    [".culture-intro > .eyebrow", "AADAA FI JIREENYA GUYYAA GUYYAA"],
    [".culture-intro > p:last-child", "Kunneen aadaa jiraataa kan walitti hidhamanidha. Aadaan hawaasa gidduutti ni garaagara, yeroo waliin ni jijjiirama; uummatni Konsoo hiikni isaa maal akka ta'e kan beekanidha."],
    [".photo-heading .eyebrow", "KONSOO SUURAA KEENNAATTI"],
    [".photo-heading > p", "Gesergiyoo, gandoota dallaadhaan marfaman, gabaa fi iddoo jireenya hawaasaa ilaali. Suuraa guddisuuf maddaa fi hayyama isaa ilaali."],
    [".place-entry p", [
      "Kaaraatiin magaalaa guddittii fi bakka mijataa geejjibaa fi kuusaa dha. Imaltan dura qajeelcha naannoo, geejjibaa fi seensaa naannoo irratti mirkaneeffadhaa.",
      "Bakki maqaa qabu kan tarree suuraa UNESCO keessatti eegumsa tarrisii agarsiisu; eegumsi itti fufiinsa qabu dha, seenaa qofa miti.",
      "Magaalaan dallaadhaan marfame (paleetaa) kan dallaa, balbalootaa fi mooraawwan qabu; galmee dhaalaa isaa hima dossier seensaa Konsoo jalqabaa.",
      "Gandi Konsoo kan tarreewwan imalaa keessatti maqaa qabu. Kaartaa irratti kallattii qofaaf fayyadamuun, karaa fi seensaa qajeelcha naannoo waliin mirkaneeffadhaa.",
      "Qubsumawwan cimsaman lafa olka’aa irratti. Dallaawwan isanii, daandiiwwan fi mooron walitti qabaa iddoo jireenya hawaasaa uumu; magaaloonni kunneen mana jireenyaa dha, mooziyeemii banaa miti.",
      "Dallaan dhagaa gogaa gaarreen maramaa fi dhiqannaa hirta; bishaan darbii hirtaa fi to’achuuf gargaara. Kuusaa bishaanii walitti qabaa, harda jedhamu, sirna kana keessa qooda qaba.",
      "Bosonaa aadaa, iddoowwan sirnaa fi awwaalcha bocni dhaala keessa qooda qabu. Tokko tokko rukkanaa ykn darbii darbii qabu; iddoo isaanii abbootii eegumsaa naannoo irraa baradhu.",
      "Pinnaakiliiwwan dhaqaa dhagaa ijiidhuun uumaman jawwee Gesergiyoo, Konsoo keessa. Maqaan naannoo isanii 'Niiw Yoork' boca kaayyoo-fuulaa isanii irraa dhufe; waa'ee dhaabaa fi daawwannaa fuula Waa'ee Konsoo irratti baradhu."
    ]],
    [".story-tab", ['Gandootaa <span>01</span>', 'Tarrisiiwwan <span>02</span>', 'Dhaala <span>03</span>'], 1],
    [".checklist-print", "Tarreewwan chaapisi"],
    [".visit-copy .visit-button", 'Tarree UNESCO sirrii ilaali <span aria-hidden="true">↗</span>', 1],
    [".visit-copy .visit-source", 'Kaartaa qabeenya UNESCO ilaali <span aria-hidden="true">↗</span>', 1],
    ["#download-plan", 'Qabxiiwwan qophaa’oo buusi <span aria-hidden="true">↓</span>', 1]
  ];
  const PH = ["Walitti qabama jiraattota ganda Konsoo", "Biyyoo harkaan qopheessuu Konsoo keessatti", "Manneenii fi ijaarsa Konsoo", "Ulaahitaa dhaloota Konsoo", "Bifawwan yaadannoo waka Konsoo", "Tarrisiiwwan gaara irratti", "Tarrisiiwwan qubsuma jala", "Dirree Taaktuu keessatti muka midhaaniifi margaa dhabamsiif dhaabate", "Gandoo Konsoo keessa", "Manneen gandoo Konsoo", "Lafti kun galmeeffame", "Lafa eeguu", "Konsoo irraa gara baha", "Egeree dhaaluuf dhaabuu", "Iddoo galgala walitti qabamanii", "Waakaan Mooziyeemii Konsoo keessa", "Pinnaaklii Gesergiyoo", "Gamoowwan cirracha", "Ifni boolla irra", "Fiixee fi boolla", "Bishaaniin bocame", "Gabateewwan dhiqamuu biyyoo", "‘Niiw Yoork’, biyya Konsoo", "Bifa waakaa yaadannoo", "Gandoo Konsoo tokko", "Alaabaa fi uffata aadaa", "Walitti qabama iddoo banaa", "Lafa midhaan irraa walitti qabame irratti hojjechuu", "Jaarsolii fi durboonni waliin", "Walitti qabama gandaa", "Mukaa daraaraa jala", "Tarrisiiwwan fi citaa", "Gaara bosonaan haguugame gubbaa irraa", "Meeshaalee guyyaa guyyaa", "Walitti qabama hawaasaa guddaa", "Dhagoonni dhaabbatan", "Mana hawaasaa citaadhaan ijaaramee", "Mukaa guddaa waliin baachuu", "Gaaraa diimaa fi pinnaaklii", "Bifawwan mukaa bocaman"];

  /* Gap-fill for both languages: [selector, {am, om}, html?]. Arrays map by element index; null skips. */
  const G = [
    [".photo-credit-local", { am: "የማኅበረሰብ ፎቶ", om: "Suuraa hawaasaa" }],
    ["#heritage-title", { am: "የእውቀት <em>መልክዓ ምድር።</em>", om: "Bocni <em>beekumsaa.</em>" }, 1],
    [".heritage-section .visit-button", { am: "የዩኔስኮን ይፋዊ ዝርዝር ይመልከቱ", om: "Tarree UNESCO sirrii ilaali" }],
    ["#visitor-title", { am: "አሳቢ ጉብኝት <em>እዚህ ይጀምራል።</em>", om: "Daawwannaan of eeggannoo <em>asirraa jalqaba.</em>" }, 1],
    [".visitor-checklist h3", { am: "ከመሄድዎ በፊት", om: "Imaltan dura" }],
    [".checklist-print", { am: "ዝርዝሩን ያትሙ" }],
    [".visitor-heading p:last-child", { am: "ጉብኝትዎን በአክብሮት ለማድረግ ጥቂት ተግባራዊ ማስታወሻዎች።", om: "Daawwannaa kabajaan akka gootu yaadannoowwan qabatamaa muraasa." }],
    [".visitor-checklist label", {
      am: ["የአየር ትንበያውን ያረጋግጡና ለቀኑ ሁኔታ የሚስማማውን ይዘው ይምጡ።", "የመጠጥ ውሃ፣ የፀሐይ መከላከያና ለመራመድ የሚስማማ ጫማ ይዘው ይምጡ።", "ካርድ ክፍያ ላይገኝ በሚችልባቸው የአካባቢ አገልግሎቶች ገንዘብ ይዘው ይምጡ።", "ማንኛውንም ቆሻሻዎን ይዘው ይውጡ።"],
      om: ["Haala qilleensaa ilaali; guyyaa sanaaf qophaa’i.", "Bishaan dhugaatii, eegumsa aduu fi kophee mijatu fidi.", "Tajaajila naannoo kaardiin kaffalamuu hin dandeenyeef maallaqa harkaa fidi.", "Kosii kee hunda of faana baasi."]
    }],
    [".visitor-principles h3", { am: "በአክብሮት ይጓዙ", om: "Kabajaan imali" }],
    [".visitor-principles li", {
      am: ["መንደሮች ቤቶች እንጂ ክፍት የአየር ላይ ሙዚየሞች እንዳልሆኑ ያስታውሱ።", "ካልተጋበዙ በስተቀር ወደ ግል ወይም የሥነ ሥርዓት ስፍራዎች አይግቡ።", "የአካባቢ አስጎብኚዎችን፣ የእጅ ጥበብ ባለሙያዎችንና አነስተኛ ንግዶችን በቀጥታ ይደግፉ።", "የአካባቢውን መመሪያ ይከተሉ፤ የቅርስ ዕቃዎችን አይንኩ ወይም አያንቀሳቅሱ።", "ሰዎችን፣ ቤቶችን ወይም ሥነ ሥርዓቶችን ፎቶ ከማንሳትዎ በፊት ፈቃድ ይጠይቁ።"],
      om: ["Gandoonni mana jireenyaa malee mooziyeemii banaa miti.", "Yoo hin afeerramin iddoo dhuunfaa yookaan kan sirna keessa hin seenin.", "Qajeelchota, ogeeyyii harkaa fi daldala xixiqqaa naannoo kallattiin deeggari.", "Qajeelfama naannoo hordofi; meeshaalee dhaalaa hin tuqin yookaan hin sochoosin.", "Namoota, manneen yookaan sirna suuraa kaasuun dura eeyyama gaafadhu."]
    }],
    [".place-entry h3", { om: [null, null, null, null, "Paleetaawwan", "Tarrisiiwwan fi bishaan", "Bosonaa, iddoowwan sirnaa fi yaadannoo", null] }],
    [".heritage-top > p", { am: "ዩኔስኮ የኮንሶን የባህል መልክዓ ምድር በ2011 በዓለም ቅርስ ዝርዝር አስመዝግቧል። ጠቀሜታው በመሬቱ፣ በሰፈሮቹና እነርሱን በሚንከባከቡ ሰዎች ቀጣይ እውቀት መካከል ባለው ግንኙነት ላይ ነው።", om: "UNESCOn Bocaa Aadaa Konsoo bara 2011 tarree Dhaala Addunyaa keessatti galmeesse. Barbaachisummaan isaa hariiroo lafaa, qubsumaawwanii fi beekumsa itti fufiinsa qabu uummata isaan eegu gidduu jiruu irratti." }],
    [".contact-heading .eyebrow", { am: "የጎብኚዎች መረጃ", om: "ODEEFFANNOO DAAWATTOOTAA" }],
    ["#contact-title", { am: "የመንደር ጉብኝት <em>ዝግጅት።</em>", om: "Qophii daawwannaa <em>gandootaa.</em>" }, 1],
    [".contact-card h3", { am: "የኮንሶ የቱሪስት መረጃ ማዕከል", om: "Wiirtuu Odeeffannoo Turistii Konsoo" }],
    [".cl-label", { am: ["አድራሻ", "የመንደር ጉብኝት በፊት"], om: ["Teessoo", "Daawwannaa ganda dura"] }],
    [".cl-val", { am: ["ካራት፣ የኮንሶ ዞን፣ ኢትዮጵያ", "ይፋዊ የጉዞ መመሪያ ወደ መረጃ ማዕከሉ በመሄድ አስገዳጅ አካባቢያዊ አስጎብኚ እንዲያዘጋጁና የአሁኑን የመግቢያ ክፍያ እንዲከፍሉ ያዛል።"], om: ["Kaaraatii, Godina Konsoo, Itoophiyaa", "Qajeelfamni turizimii sirrii daawwattoonni qajeelcha naannoo dirqamaa qopheessuu fi kaffaltii seensaa ammaa kaffaluuf waajjira odeeffannoo turizimii Kaaraatii akka dhaqan ajaja."] }],
    [".contact-card .visit-button", { am: "ይፋዊ የቱሪዝም መመሪያ ↗", om: "Qajeelfama turizimii sirrii ↗" }],
    [".getting-heading .eyebrow", { am: "እንዴት መድረስ", om: "AKKAATAA GA'UMSAA" }],
    ["#getting-title", { am: "ወደ <em>ካራት</em> የሚወስደው መንገድ።" }, 1],
    [".getting-heading p:last-child", { am: "ርቀቶችና አገልግሎቶች ሊለወጡ ይችላሉ፤ ስለዚህ እነዚህ መነሻ ነጥቦች ብቻ ናቸው። ከመጓዝዎ በፊት በአካባቢው ያረጋግጡ።" }],
    [".getting-grid article strong", { am: ["በአውሮፕላን", "በመንገድ"] }],
    [".getting-grid article p", { am: ["የቅርብ አውሮፕላን ማረፊያ አርባ ምንጭ ነው፤ ከኮንሶ በግምት 85 ኪ.ሜ ወደ ሰሜን ይገኛል። የአዲስ አበባ–አርባ ምንጭ በረራ መርሐ ግብርን ያረጋግጡ።", "ካራት ከአዲስ አበባ ወደ ደቡብ በግምት 540 ኪ.ሜ ርቀት ላይ ስትሆን መንገዱ በቡታጅራና በአርባ ምንጭ ያልፋል። መንገድ ከአዲስ አበባ ለመጓዝ መደበኛው መንገድ ነው።"] }],
  ];
  const AM_PH = ["በኮንሶ የመንደር ነዋሪዎች ስብሰባ", "በኮንሶ በእጅ ጭቃ ማዘጋጀት", "የኮንሶ ቤቶችና ግንባታ", "የኮንሶ የትውልድ ምሰሶ (ኦላሂታ)", "የኮንሶ ዋካ የመታሰቢያ ምስሎች", "በኮረብታው ላይ ያሉ እርከኖች", "ከሰፈር በታች ያሉ እርከኖች", "በኮንሶ የታክቱ ማሳ ውስጥ የተተከሉ የምግብና የመኖ ዛፎች", "በኮንሶ መንደር ውስጥ", "የኮንሶ መንደር ቤቶች", "መልክዓ ምድሩ በሰነድ", "ለመሬት እንክብካቤ", "ከኮንሶ ወደ ምሥራቅ", "ለወደፊት መትከል", "የምሽት መሰብሰቢያ ስፍራ", "በኮንሶ ሙዚየም ውስጥ ያለ ዋካ", "የጌሰርጊዮ የአሸዋ ምሰሶዎች", "የአሸዋ ማማዎች", "በሸለቆው ላይ ብርሃን", "የሸለቆው ጠርዝና ጉድጓድ", "በውሃ የተቀረጸ", "የአፈር መሸርሸር ደረጃዎች", "“ኒው ዮርክ”፣ የኮንሶ ምድር", "የዋካ መታሰቢያ ምስል", "የኮንሶ መንደር", "ባንዲራና ባህላዊ ልብስ", "በክፍት ስፍራ የተደረገ ስብሰባ", "በተሰበሰበ እርሻ ላይ ሥራ", "ሽማግሌዎችና ልጃገረዶች በአንድነት", "የመንደር ስብሰባ", "ከአበባማ ዛፍ በታች", "እርከኖችና ሳር ክዳን", "ከላይ የሚታይ ደን የለበሰ ኮረብታ", "የዕለት ተዕለት ዕቃዎች", "ትልቅ የማኅበረሰብ ስብሰባ", "ቀጥ ያሉ ድንጋዮች", "የሳር ክዳን የማኅበረሰብ ቤት", "ግንድ በጋራ መሸከም", "ቀይ ገደሎችና ምሰሶዎች", "የተቀረጹ የእንጨት ምስሎች"];
  const PH_FIRST = ["Pinnaakilii bocaman Gesergiyoo keessatti", "Dhagaa gara lafa qonnaatti jijjiirame", "Muka dhalootaa ganda Konsoo keessatti", "Manneen dallaa maatii keessa", "Boqqolloo gabaa irratti", "Jibuu harkaan fooyyessuu", "Hawaasotni naannoo Lafa Aadaa Konsoo keessa", "Balbala dhagaa keessa darbu", "Daandiiwwan hawaasa wal-qunnamsiisan", "Daldala guyyaa guyyaa Kaaraatii keessatti", "Iddoo banaa ganda Konsoo"];
  const AM_PH_FIRST = ["የጌሰርጊዮ የአፈር ምሰሶዎች", "ድንጋይ ወደ እርሻ መሬት", "በኮንሶ መንደር ውስጥ የትውልድ ዛፍ", "በቤተሰብ ግቢ ውስጥ ያሉ ቤቶች", "በገበያ ላይ ማሽላ", "ጥጥን በእጅ ማሽከርከር", "የኮንሶ ባህላዊ መልክዓ ምድር ውስጥ የአካባቢው ማኅበረሰቦች", "በድንጋይ በር ውስጥ ማለፍ", "ማኅበረሰቡን የሚያገናኙ መንገዶች", "በካራት ዕለታዊ ገበያ", "በኮንሶ የመንደር አደባባይ"];
  const PHOTO_CATS = {"am": {"GESERGIYO · NEW YORK": "ጌሰርጊዮ · ኒው ዮርክ", "THE TERRACES": "እርከኖች", "MORA & GATHERING": "ሞራና መሰብሰቢያ", "GENERATION TREE": "የትውልድ ዛፍ", "HOMES & COMPOUNDS": "ቤቶችና ግቢዎች", "FOOD & MARKETS": "ምግብና ገበያ", "PEOPLE & EVERYDAY DRESS": "ሰዎችና ዕለታዊ ልብስ", "COTTON & HANDWORK": "ጥጥና የእጅ ሥራ", "KONSO CULTURAL LANDSCAPE": "የኮንሶ ባህላዊ መልክዓ ምድር", "VILLAGE GATEWAYS": "የመንደር በሮች", "OLD VILLAGE LANES": "የድሮ መንደር መንገዶች", "MARKET DAY": "የገበያ ቀን", "COMMUNITY SPACES": "የማኅበረሰብ ስፍራዎች", "COMMUNITY LIFE": "የማኅበረሰብ ሕይወት", "CRAFT & MAKING": "ሙያና አሠራር", "HOMES & BUILDING": "ቤቶችና ግንባታ", "MEMORY & GENERATIONS": "ትውስታና ትውልዶች", "CULTURAL MEMORY": "ትውስታና ቅርስ", "LAND & STEWARDSHIP": "ምድርና እንክብካቤ", "THE HILLTOP VILLAGE": "በኮረብታ ላይ ያለ መንደር", "TREES & FIELDS": "ዛፎችና እርሻ ማሳዎች", "VILLAGE LIFE": "የመንደር ሕይወት", "HOMES & THATCH": "ቤቶችና ሣር ክዳን", "UNESCO PHOTO RECORD": "የዩኔስኮ ፎቶ መዝገብ", "THE WIDER VIEW": "ሰፊ እይታ", "STEWARDSHIP": "እንክብካቤ", "FOOD & DRINK": "ምግብና መጠጥ", "THE PINNACLES": "የጌሰርጊዮ አፈር ምሰሶዎች", "MEMORY & MUSEUM": "ትውስታና ሙዚየም", "THE “NEW YORK” GORGE": "የ“ኒው ዮርክ” ሸለቆ", "COMMUNITY CELEBRATION": "የማኅበረሰብ በዓል", "FARMING": "እርሻ", "TERRACES": "እርከኖች", "FOREST": "ደን", "OBJECTS": "ዕለታዊ ዕቃዎች", "STONES": "ድንጋዮች", "COMMUNAL HOUSE": "የጋራ ቤት", "ERODED CLIFFS": "በመሸርሸር የተፈጠሩ ገደሎች", "CRAFTS": "የእጅ ሥራ"}, "om": {"GESERGIYO · NEW YORK": "Gesergiyoo · Niiw Yoork", "THE TERRACES": "Tarrisiiwwan", "MORA & GATHERING": "Moraa fi walitti qabama", "GENERATION TREE": "Muka dhalootaa", "HOMES & COMPOUNDS": "Manneenii fi dallaa", "FOOD & MARKETS": "Nyaataa fi gabaa", "PEOPLE & EVERYDAY DRESS": "Namootaa fi uffata guyyaa guyyaa", "COTTON & HANDWORK": "Jibuu fi hojii harkaa", "KONSO CULTURAL LANDSCAPE": "Lafa Aadaa Konsoo", "VILLAGE GATEWAYS": "Balbaloota gandootaa", "OLD VILLAGE LANES": "Daandiiwwan gandoota durii", "MARKET DAY": "Guyyaa gabaa", "COMMUNITY SPACES": "Iddoowwan hawaasaa", "COMMUNITY LIFE": "Jireenya hawaasaa", "CRAFT & MAKING": "Ogummaa fi hojjechuu", "HOMES & BUILDING": "Manneenii fi ijaarsa", "MEMORY & GENERATIONS": "Yaadannoo fi dhaloota", "CULTURAL MEMORY": "Yaadannoo fi dhaala", "LAND & STEWARDSHIP": "Lafa fi kunuunsa", "THE HILLTOP VILLAGE": "Ganda gaara irra jiru", "TREES & FIELDS": "Mukaa fi lafa qonnaa", "VILLAGE LIFE": "Jireenya gandootaa", "HOMES & THATCH": "Manneenii fi citaa", "UNESCO PHOTO RECORD": "Galmee suuraa UNESCO", "THE WIDER VIEW": "Ilaalcha bal’aa", "STEWARDSHIP": "Kunuunsa", "FOOD & DRINK": "Nyaataa fi dhugaatii", "THE PINNACLES": "Pinnaakilii Gesergiyoo", "MEMORY & MUSEUM": "Yaadannoo fi muuziyeemii", "THE “NEW YORK” GORGE": "Boolla “Niiw Yoork”", "COMMUNITY CELEBRATION": "Ayyaana hawaasaa", "FARMING": "Qonna", "TERRACES": "Tarrisiiwwan", "FOREST": "Bosona", "OBJECTS": "Meeshaalee guyyaa guyyaa", "STONES": "Dhagaa", "COMMUNAL HOUSE": "Mana waliinii", "ERODED CLIFFS": "Gaara bubbeen nyaate", "CRAFTS": "Hojii harkaa"}};
  let touched = [];
  const put = (el, v, html) => {
    touched.push([el, el.innerHTML]);
    if (html) { el.innerHTML = v; return; }
    if (el.children.length) {
      const n = [...el.childNodes].reverse().find((x) => x.nodeType === 3 && x.data.trim());
      if (n) { n.data = n.data.match(/^\s*/)[0] + v + n.data.match(/\s*$/)[0]; return; }
    }
    el.textContent = v;
  };
  window.omRestore = () => { touched.forEach(([el, value, kind]) => { if (kind === "alt") el.setAttribute("alt", value); else el.innerHTML = value; }); touched = []; };
  window.applyOromo = (lang = "om") => {
    const isOm = lang === "om";
    if (isOm) {
      OM.forEach(([sel, val, html]) => document.querySelectorAll(sel).forEach((el, i) => { const v = Array.isArray(val) ? val[i] : val; if (v != null) put(el, v, html); }));
      document.querySelectorAll("[data-home-en]").forEach((el) => { const v = HOME[el.dataset.homeEn]; if (v) put(el, v); });
    }
    G.forEach(([sel, vals, html]) => { const val = vals[lang]; if (val == null) return; document.querySelectorAll(sel).forEach((el, i) => { const v = Array.isArray(val) ? val[i] : val; if (v != null) put(el, v, html); }); });
    const titles = isOm ? PH : AM_PH;
    const localizedTitles = [...document.querySelectorAll(".photo-card strong")].map((el, i) => i < 11 ? (isOm ? PH_FIRST[i] : AM_PH_FIRST[i]) : titles[i - 11]);
    document.querySelectorAll(".photo-card strong").forEach((el, i) => { if (localizedTitles[i]) put(el, localizedTitles[i]); });
    document.querySelectorAll(".photo-category").forEach((el) => { const original = el.dataset.en ?? el.textContent; el.dataset.en ??= original; const value = PHOTO_CATS[lang]?.[original]; if (value) put(el, value); });
    document.querySelectorAll(".photo-card img").forEach((el, i) => { if (!localizedTitles[i]) return; el.dataset.englishAlt ??= el.alt; touched.push([el, el.alt, "alt"]); el.alt = localizedTitles[i]; });
    if (!isOm) return;
    document.title = "Konsoo — Iddoowwan, uummataa fi dhaala jiraataa";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Iddoowwan, afaan, aadaa fi bocni aadaa jiraataa uummata Konsoo kibba Itoophiyaa baradhu.");
    document.querySelector("#language-select")?.setAttribute("aria-label", "Afaan");
    document.querySelector("#site-nav")?.setAttribute("aria-label", "Baafata ijoo");
  };
  if (["om", "am"].includes(document.documentElement.lang)) window.applyOromo(document.documentElement.lang);
})();
