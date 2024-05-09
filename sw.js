console.log('#SW#','sw.js');
self.addEventListener('install', (e) => {
    e.waitUntil(
      
      caches.open('mycv-store-v2').then((cache) => cache.addAll([
        '/wwwroot/lib/uikit/css/uikit.min.css',
        '/wwwroot/bundles/libs.min.css',
        '/wwwroot/lib/font-awesome/css/fontawesome.min.css',
        '/wwwroot/lib/animate.css/animate.min.css',
        //'/index.html',
      ])),
    );
  });
  
  // self.addEventListener('fetch', (e) => {
  //   console.log(e.request.url);
  //   e.respondWith(
  //     caches.match(e.request).then((response) => response || fetch(e.request))
  //   );
  // });
  