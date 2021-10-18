const searchBox = document.querySelector(".search-box");
const searchButton = document.querySelector(".search-button");
const cityWeather = document.querySelector(".weather-city");
const actualTemperature = document.querySelector(".weather-temperature");
const feelsTemperature = document.querySelector(".weather--feels-like-temperature");
const description = document.querySelector(".weather-description");
const icon = document.querySelector(".icon");
const humidity = document.querySelector(".weather-humidity");
const windSpeed = document.querySelector(".weather-windspeed");
const weather = document.querySelector(".weather");
const errorMessage = document.querySelector(".error");


function errorhandler(error) {
    weather.style.display = "none";
    errorMessage.style.display = "block";
    errorMessage.innerText = "Error: Invalid city name";
}


function display() {
    const city = searchBox.value;
    document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + city + "')";

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=8153c938a33762c3016a056bfce61087")
        .then(response => response.json())
        .then(data => {
            errorMessage.style.display = "none";
            weather.style.display = "block";
            let temp = data.main.temp;
            let feelsliketemp = data.main.feels_like;
            let descriptionValue = data.weather[0].description;
            let iconId = data.weather[0].icon;
            let humidityValue = data.main.humidity;
            let windSpeedValue = data.wind.speed;

            cityWeather.innerText = "WEATHER IN " + city.toUpperCase();

            actualTemperature.innerText = "TEMPERATURE: " + Math.round(temp) + "° C";

            feelsTemperature.innerText = "FEELS LIKE: " + Math.round(feelsliketemp) + "° C";

            description.innerText = descriptionValue.toUpperCase();

            humidity.innerText = "HUMIDITY: " + humidityValue + "%";

            windSpeed.innerText = "WIND SPEED: " + windSpeedValue + " M/S";


            fetch("https://openweathermap.org/img/wn/" + iconId + "@2x.png").then(icon.src = "https://openweathermap.org/img/wn/" + iconId + ".png")
        })
        .catch(errorhandler);
}

searchButton.addEventListener("click", display);

searchBox.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        display();
    }
});