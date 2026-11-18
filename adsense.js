/*
 * Optional Google AdSense Auto ads.
 * Set data-adsense-publisher on the <html> element to your approved ca-pub ID.
 * No Google ad script is loaded while the value is blank or invalid.
 */
(() => {
  "use strict";
  const publisherId = document.documentElement.dataset.adsensePublisher?.trim() ?? "";
  if (!/^ca-pub-\d{16}$/.test(publisherId)) return;

  const script = document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(publisherId)}`;
  document.head.append(script);
})();
