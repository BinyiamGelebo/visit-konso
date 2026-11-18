// One-click cache reset: open the site with ?reset=1 to unregister the old
// service worker, delete every cached file, and reload the clean page.
if (new URLSearchParams(location.search).has("reset")) {
  (async () => {
    try {
      if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
      }
      if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map((registration) => registration.unregister()));
      }
    } catch (error) {
      console.warn("Visit Konso cache reset hit an issue.", error);
    }
    location.replace(location.pathname + location.hash);
  })();
} else if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js", { scope: "./" }).catch((error) => {
      console.warn("Visit Konso offline support could not be enabled.", error);
    });
  });
}
