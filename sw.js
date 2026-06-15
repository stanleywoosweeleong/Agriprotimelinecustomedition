/* AgriPro Timeline — Personal Edition · offline service worker
   Cache name is namespaced so it never collides with the baseline app
   on the shared stanleywoosweeleong.github.io origin. Bump the version
   string on every deploy to force clients to pick up the new build. */
const CACHE = 'agripro-timeline-personal-v29';
const ASSETS = ['./', './index.html'];

self.addEventListener('install', e => {
  // Activate the new worker immediately, don't wait for old tabs to close.
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);

  // Always go to network first for the app shell (navigations AND index.html itself),
  // so a fresh deploy is always picked up; fall back to cache only when offline.
  const isAppShell = req.mode === 'navigate'
    || url.pathname.endsWith('/') 
    || url.pathname.endsWith('/index.html');

  if (isAppShell) {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put('./index.html', copy));
        return res;
      }).catch(() => caches.match('./index.html').then(hit => hit || caches.match('./')))
    );
    return;
  }

  // Other same-origin static assets: cache-first (fast, offline-friendly).
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      }).catch(() => hit))
    );
  }
});
