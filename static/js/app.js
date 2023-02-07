const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "static/images/coffee1.jpg" },
  { name: "Voluptatem", image: "static/images/coffee2.jpg" },
  { name: "Explicabo", image: "static/images/coffee3.jpg" },
  { name: "Rchitecto", image: "static/images/coffee4.jpg" },
  { name: " Beatae", image: "static/images/coffee5.jpg" },
  { name: " Vitae", image: "static/images/coffee6.jpg" },
  { name: "Inventore", image: "static/images/coffee7.jpg" },
  { name: "Veritatis", image: "static/images/coffee8.jpg" },
  { name: "Accusantium", image: "static/images/coffee9.jpg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
}
  
document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("https://csc395.wc.reclaim.cloud/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
}
  