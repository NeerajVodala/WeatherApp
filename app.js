



let apikey = "8153c938a33762c3016a056bfce61087";
let city = "nairobi";

fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apikey)
.then(response => response.json())
.then(data => {
    console.log(data, data.weather[0].icon);
    let iconId = data.weather[0].icon;
    fetch("https://openweathermap.org/img/wn/" + iconId + "@2x.png").then(document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + iconId + "@2x.png")
});




