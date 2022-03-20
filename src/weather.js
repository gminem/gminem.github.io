const API_KET = "f6fff26268b33bbbc91672e7eee5c1a9";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    console.log("You live in", lat, lng);
}

function onGeoError() {
    alert("Can't find you. No Weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);