let map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// var marker = L.marker([51.5, -0.09]).addTo(map);

// var circle = L.circle([48.8588897, 2.3200410], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);

let form = document.querySelector("#form");
let adressInput = document.querySelector("#adressInput");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://nominatim.openstreetmap.org/search?q=" + adressInput.value + "&format=json")
    .then((response) =>{
    return response.json();
    })
    .then((data) => {
        console.log(data);
        let marker = L.marker([data[0].lat, data[0].lon]).addTo(map);
        map.setView([data[0].lat, data[0].lon]);

    })
});

// var marker = L.marker([51.5, -0.09]).addTo(map)
