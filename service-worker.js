
const cacheName = "mockPWA-v0.1.0";
const filesToCache = ["./","./index.html","https://jsonbin.io/b/59f721644ef213575c9f6531","./manifest.json","./icons/android-icon-36x36.png","./icons/android-icon-48x48.png","./icons/android-icon-72x72.png","./icons/android-icon-96x96.png","./icons/android-icon-144x144.png","./icons/android-icon-192x192.png","./icons/android-icon-512x512.png","./icons/favicon.ico","./static/css/main.871c1fe2.css","./static/js/main.d52bd0c7.js"];
self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(cacheName)
    .then(function(cache) {
      return cache.addAll(filesToCache)
        .then(function() {
          self.skipWaiting();
        });
      }));
});

self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys()
    .then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName)
          return caches.delete(key);
      }));
  }));
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request)
    .then(function(response) {
      return response || fetch(e.request)
        .then(function (resp){
          return caches.open(cacheName)
            .then(function(cache){
              cache.put(e.request, resp.clone());
              return resp;
          })
        }).catch(function(event){
          console.log('Error fetching data!');
        })
      })
  );
});
