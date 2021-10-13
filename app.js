const locationName = document.querySelector(".location-name");
const temperatureValue = document.querySelector(".temperature-value");
const temperatureIcon = document.querySelector(".temperature-icon");
const temperatureDescription = document.querySelector(".temperature-description");

let apikey = "8153c938a33762c3016a056bfce61087";
let city = "hyderabad";

fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apikey).then(response => response.json()).then(json => {
    console.log(json, json.name, json.sys.country, json.main.temp, json.main.humidity, json.weather[0].description)

    locationName.innerText = json.name.toUpperCase() + ", " + json.sys.country;
    temperatureValue.innerText = json.main.temp + "° C";
    temperatureDescription.innerText =  json.weather[0].description.toUpperCase();
});

