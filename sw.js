if('serviceWorker' in navigator){
 	navigator.serviceWorker.register('./sw.js').then( function(){
 		console.log('sw registered successfully')
 	}).catch(function(){
 		console.log('failed to register sw')
 	})
 }

 self.addEventListener('install', function(e){
 	e.waitUntil(caches.open('cach-1').then(function(cache){
 		cache.addAll(
          [
            './',
            './index.html',
		    './restaurant.html',
		    './css/styles.css',
		    './js/dbhelper.js',
		    './js/main.js',
		    './js/restaurant_info.js',
		    './data/restaurants.json',
        ]
 		)
 	}))

 })


 self.addEventListener('fetch', function(e){
 	e.respondWith(caches.match(e.request).then(function(response){
 		if(response){
 			return response
 		} else {
 			return fetch(e.request)
 		}
 	}))
 })
