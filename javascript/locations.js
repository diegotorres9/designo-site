let canadaMap = document.querySelector("#location-canada");
let australiaMap = document.querySelector("#location-australia");
let ukMap = document.querySelector("#location-uk");

canadaMap = L.map(canadaMap).setView([43.645, -79.38], 14);
let canadaPin = L.marker([43.645, -79.38]).addTo(canadaMap);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(canadaMap);

australiaMap = L.map(australiaMap).setView([-30.319, 149.78], 14);
let australiaPin = L.marker([-30.319, 149.78]).addTo(australiaMap);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(australiaMap);

ukMap = L.map(ukMap).setView([51.737, -3.86], 14);
let ukPin = L.marker([51.737, -3.86]).addTo(ukMap);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(ukMap);