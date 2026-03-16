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
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${apiKey}`;
    const response = await fetch(endpoint)
    const result = await response.json();

    const temperatureC = (Math.round(result.main.temp) + "°C");
    const weather = result.weather[0].description;
    document.querySelector("#temperature").innerText = temperatureC;
    document.querySelector("#weather-condition").innerText = weather;
}
weather();
//Fetch weather data with input default set to Göteborg

//Get set value to weather() from list
const cityList = document.querySelector("#city");

function updateWeather() {
    weather(cityList.value)
}
cityList.addEventListener("click", updateWeather);
//Get set value to weather() from list

let modalIsOpen = false;

const contactForm = document.querySelector("#contact-form");
function openModalWindow() {
    contactForm.style.opacity = "1";
    contactForm.style.top = "70px";
    modalIsOpen = true;
    if (menuIsOpen) {
        closeMenu();
    }
}

const closeContactFormButton = document.querySelector("#close-modal-button");
function closeModalWindow() {
    contactForm.style.opacity = "0";
    contactForm.style.top = "-300px";
    modalIsOpen = false;
}



const modalButton = document.querySelector("#button-open-modal");
closeContactFormButton.addEventListener("click", closeModalWindow);

modalButton.addEventListener("click", function () {
    if (!modalIsOpen) {
        openModalWindow();
    } else {
        closeModalWindow();
    }
})


const themeSwitch = document.querySelector("#theme-button");
let isDarkTheme = true;
function lightMode() {
    document.documentElement.style.setProperty("--bg-color", "#FCF8EC");
    document.documentElement.style.setProperty("--light-color", "#1B3C53");
    document.documentElement.style.setProperty("--highlight", "#78B9B5");
    document.documentElement.style.setProperty("--hero-color-one", "#39e950");
    document.documentElement.style.setProperty("--hero-color-two", "#af73a3");

    document.querySelector(".blur").style.backdropFilter = "blur(16px) brightness(1.1)";
    document.querySelector("#html5-logo").src = "resources/media/logos/HTML5_logo_and_wordmark.svg";
    document.querySelector("#css3-logo").src = "resources/media/logos/CSS3_logo_and_wordmark.svg";
    document.querySelector("#github-logo").src = "resources/media/logos/GitHub/GitHub_Invertocat_Black.svg";
    document.querySelector("#js-logo").src = "resources/media/logos/Javascript-shield_black.svg";
    document.querySelector("#send-message").style.color = "#FCF8EC";
    document.querySelector(".modal-h3").style.color = "#FCF8EC";
    document.querySelector(".close-modal-button").style.color = "#FCF8EC"
}

function darkMode() {
    document.documentElement.style.setProperty("--bg-color", "#1B3C53");
    document.documentElement.style.setProperty("--light-color", "#D2C1B6");
    document.documentElement.style.setProperty("--highlight", "#78B9B5");
    document.documentElement.style.setProperty("--hero-color-one", "#74ff86");
    document.documentElement.style.setProperty("--hero-color-two", "#b978ac");

    document.querySelector(".blur").style.backdropFilter = "blur(16px) brightness(0.7)";
    document.querySelector("#html5-logo").src = "resources/media/logos/HTML5_logo_and_wordmark_white.svg";
    document.querySelector("#css3-logo").src = "resources/media/logos/CSS3_logo_and_wordmark_white.svg";
    document.querySelector("#github-logo").src = "resources/media/logos/GitHub/GitHub_Invertocat_White.svg";
    document.querySelector("#js-logo").src = "resources/media/logos/Javascript-shield.svg";
    document.querySelector("#send-message").style.color = "var(--bg-color)";
    document.querySelector(".modal-h3").style.color = "var(--light-color)";
    document.querySelector(".close-modal-button").style.color = "var(--light-color)";
}


themeSwitch.addEventListener("click", function () {
    if (isDarkTheme) {
        lightMode();
        document.querySelector(".theme-button").innerText = "☾";
        isDarkTheme = false;
    }
    else {
        darkMode();
        document.querySelector(".theme-button").innerText = "☼";
        isDarkTheme = true;
    }
    console.log(isDarkTheme);

});


addEventListener("resize", function () {
    windowWidth = window.innerWidth;
    if (windowWidth <= 950) {
        console.log(windowWidth);
    }
})
isScrollingDown = false;
windowScroll = 0;
addEventListener("scroll", function () {
    if (window.scrollY > windowScroll + 100) {
        windowScroll = window.scrollY;
        isScrollingDown = true;
        console.log(isScrollingDown);
    }
    else if (window.scrollY < windowScroll - 100) {
        windowScroll = window.scrollY;
        isScrollingDown = false;
        console.log(isScrollingDown);
    }
})

const refText = document.querySelector("#reference-text");
const refPerson = document.querySelector("#reference-person");
const refCompany = document.querySelector("#reference-company");
let refIndex = 1;
const refDict = [
    {
        "name": "Håkan Larsson",
        "text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ducimus qui quaerat ulla veniam laboriosam?",
        "company": "Maverick"
    },
    {
        "name": "Jakob Rockmyr",
        "text": "Lorem ipsum. Fugiat ducimus qui quaerat ulla veniam laboriosam?",
        "company": "BST"
    },
    {
        "name": "Jenny Spetz",
        "text": "Lorem ipsum. Fugiat ducimus qui quaerat ulla veniam laboriosam? dolor sit amet consectetur adipisicing",
        "company": "Liseberg"
    },
]
refText.innerText = refDict[0].text;
refPerson.innerText = refDict[0].name;
refCompany.innerText = refDict[0].company;

function reference() {
    setInterval(() => {
        if (refIndex == refDict.length) {
            refIndex = 0;
        }
        refText.innerText = refDict[refIndex].text;
        refPerson.innerText = refDict[refIndex].name;
        refCompany.innerText = refDict[refIndex].company;
        refIndex++;

    }, 5000);
}
reference();

let menuIsOpen = false;
const menuModal = document.querySelector("#menu-modal");
const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", function () {
    if (!menuIsOpen) {
        openMenu();
    }
    else {
        closeMenu();
    }
});

function openMenu() {
    menuModal.style.opacity = "1";
    menuModal.style.top = "60px";
    menuIsOpen = true;
    if (modalIsOpen) {
        closeModalWindow();
    }
}
function closeMenu() {
    menuModal.style.opacity = "0";
    menuModal.style.top = "-300px";
    menuIsOpen = false;
}

const navbarLinkModal = document.querySelectorAll(".navbar-link-modal");
for (let i = 0; i < navbarLinkModal.length; i++) {
    const element = navbarLinkModal[i];
    element.addEventListener("click", closeMenu);
}

const sendButton = document.querySelector("#send-message");
sendButton.addEventListener("click", function () {
    sendButton.style.backgroundColor = "var(--highlight)"
    sendButton.innerText = "Email sent!";
})
