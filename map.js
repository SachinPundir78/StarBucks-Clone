//map
const map = L.map('map').setView([39.8283, -98.5795], 4);

// OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker;

document.getElementById("search").addEventListener("click", async () => {
    const address = document.getElementById("address").value;
    if (address) {
        await geocodeAddress(address);
    } else {
        alert("Please enter an address or city.");
    }
});

async function geocodeAddress(address) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.length > 0) {
            const { lat, lon } = data[0];

            // Center map on the searched location
            map.setView([lat, lon], 14);

            // Place a marker
            if (marker) {
                map.removeLayer(marker);
            }
            marker = L.marker([lat, lon]).addTo(map);
        } else {
            alert("No results found for the provided address.");
        }
    } catch (error) {
        console.error("Error fetching geocode data:", error);
        alert("There was an error with the geocoding request.");
    }
}
