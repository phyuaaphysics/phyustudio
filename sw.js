const CACHE_NAME = 'phyustudio-v1';
const ASSETS = [
  './',
  './splash.html',
  'https://phyuaaphysics.github.io/phyustudio/appicon.png',
  'https://phyuaaphysics.github.io/phyustudio/favicon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

### Summary of Directory Needs:
1.  **`splash.html`**: The main interface (updated in Canvas).
2.  **`sw.js`**: The service worker (provided above) for offline support and installability.
3.  **`appicon.png`**: Ensure this exists at the URL provided so the PWA has a home screen icon.
4.  **HTTPS**: PWAs only work over HTTPS (which your GitHub Pages site already uses).