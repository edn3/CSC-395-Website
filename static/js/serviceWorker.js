const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/templates/base.html",
  "/templates/about.html",
  "/templates/header.html",
  "/templates/home.html",
  "/static/css/style.css",
  "/static/js/app.js",
  "/static/images/coffee1.jpg",
  "/static/images/coffee2.jpg",
  "/static/images/coffee3.jpg",
  "/static/images/coffee4.jpg",
  "/static/images/coffee5.jpg",
  "/static/images/coffee6.jpg",
  "/static/images/coffee7.jpg",
  "/static/images/coffee8.jpg",
  "/static/images/coffee9.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      return cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
