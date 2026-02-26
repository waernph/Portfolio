var contactModal = document.getElementById("contact-modal");
var openButton = document.getElementById("button-open-modal");
var closeButton = document.getElementsByClassName("button-close-modal");

function year() {
    const year = new Date().getFullYear();
    document.getElementById("yearNow").innerText = year;
}
year();


function tagLine() {
    const loop = true;
    let index = 0;
    const tagLineList = [
        "Backend developer studying at Jensen YH",
        "Former video producer and photographer",
        "Creative problem solver",
    ]
    document.getElementById("tag-line").innerText = tagLineList[index];
    setInterval(() => {
        if (index == tagLineList.length) {
            index = 0;
        }
        document.getElementById("tag-line").innerText = tagLineList[index];
        index++;
    }, 4000);
}

tagLine();

async function weather() {
    const apiKey = "69ec97f7b99ef917a294c46362d91722";
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?id=2711533&units=metric&appid=${apiKey}`
    const response = await fetch(endpoint)
    const result = await response.json();
    const temperatureC = (Math.round(result.main.temp) + "°C");
    const weather = result.weather[0].main;
    document.getElementById("weather-condition").innerText = weather;
    document.getElementById("temperature").innerText = temperatureC
    console.log(temperatureC + "° C");
    console.log(weather);
}
weather();