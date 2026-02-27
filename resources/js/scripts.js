var contactModal = document.getElementById("contact-modal");
var openButton = document.getElementById("button-open-modal");
var closeButton = document.getElementsByClassName("button-close-modal");

function year() {
    const year = new Date().getFullYear();
    document.getElementById("yearNow").innerText = year;
}
year();

//Change tagline
function tagLine() {
    const tagLine = document.querySelector("#tag-line");
    let index = 0;
    const tagLineList = [
        "Backend developer studying at Jensen YH",
        "Former video producer and photographer",
        "Creative problem solver",
    ]
    tagLine.innerText = tagLineList[0];
    setInterval(() => {
        if (index == tagLineList.length) {
            index = 0;
        }
        tagLine.innerText = tagLineList[index];
        index++;
    }, 4000);
}
tagLine();
//Change tagline

//Fetch weather data with input default set to Göteborg
async function weather(cityId = 2711533) {

    const apiKey = "69ec97f7b99ef917a294c46362d91722";
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${apiKey}`
    const response = await fetch(endpoint)
    const result = await response.json();
    const temperatureC = (Math.round(result.main.temp) + "°C");
    const weather = result.weather[0].main;
    document.getElementById("weather-condition").innerText = weather;
    document.getElementById("temperature").innerText = temperatureC;
}
weather();
//Fetch weather data with input default set to Göteborg

//Get set value to weather() from list
const cityList = document.getElementById("city");

function updateWeather() {
    weather(cityList.value)
}
cityList.addEventListener("click", updateWeather);
//Get set value to weather() from list



