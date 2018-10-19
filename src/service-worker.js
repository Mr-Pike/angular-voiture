var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/index.html',
  '/styles.js',
  '/vendor.js',
  '/main.js',
  '/polyfills.js',
  '/runtime.js',
  '/scripts.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          console.log("Réponse du cache pour" + event.request);
          return response;
        }
        console.log("Réponse du serveur pour" + event.request);
        return fetch(event.request);
      }
    )
  );
});
