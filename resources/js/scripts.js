const contactModal = document.getElementById("contact-modal");
const openButton = document.getElementById("button-open-modal");
const closeButton = document.getElementsByClassName("button-close-modal");

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
let weatherLanguage = "en"
//Fetch weather data with input default set to Göteborg
async function weather(cityId = 2711533) {
    const apiKey = "69ec97f7b99ef917a294c46362d91722";
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&lang=${weatherLanguage}&appid=${apiKey}`;
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
    document.documentElement.style.setProperty("--extra-dark", "#fffdf6");
    document.documentElement.style.setProperty("--hero-color-one", "#39e950");
    document.documentElement.style.setProperty("--hero-color-two", "#af73a3");

    document.querySelector(".blur").style.backdropFilter = "blur(16px) brightness(1.1)";
    document.querySelector("#html5-logo").src = "resources/media/logos/HTML5_logo_and_wordmark.svg";
    document.querySelector("#css3-logo").src = "resources/media/logos/CSS3_logo_and_wordmark.svg";
    document.querySelector("#github-logo").src = "resources/media/logos/GitHub/GitHub_Invertocat_Black.svg";
    document.querySelector("#js-logo").src = "resources/media/logos/Javascript-shield_black.svg";

    document.querySelector("#html-case-logo").src = "resources/media/logos/HTML5_logo_and_wordmark.svg";
    document.querySelector("#css-case-logo").src = "resources/media/logos/CSS3_logo_and_wordmark.svg";
    document.querySelector("#js-case-logo").src = "resources/media/logos/Javascript-shield_black.svg";

    document.querySelector("#send-message").style.color = "#FCF8EC";
    document.querySelector(".modal-h3").style.color = "#FCF8EC";
    document.querySelector(".close-modal-button").style.color = "#FCF8EC"
}

function darkMode() {
    document.documentElement.style.setProperty("--bg-color", "#1B3C53");
    document.documentElement.style.setProperty("--light-color", "#D2C1B6");
    document.documentElement.style.setProperty("--highlight", "#78B9B5");
    document.documentElement.style.setProperty("--extra-dark", "#152e3f");
    document.documentElement.style.setProperty("--hero-color-one", "#74ff86");
    document.documentElement.style.setProperty("--hero-color-two", "#b978ac");

    document.querySelector(".blur").style.backdropFilter = "blur(16px) brightness(0.7)";
    document.querySelector("#html5-logo").src = "resources/media/logos/HTML5_logo_and_wordmark_white.svg";
    document.querySelector("#css3-logo").src = "resources/media/logos/CSS3_logo_and_wordmark_white.svg";
    document.querySelector("#github-logo").src = "resources/media/logos/GitHub/GitHub_Invertocat_White.svg";
    document.querySelector("#js-logo").src = "resources/media/logos/Javascript-shield.svg";

    document.querySelector("#html-case-logo").src = "resources/media/logos/HTML5_logo_and_wordmark_white.svg";
    document.querySelector("#css-case-logo").src = "resources/media/logos/CSS3_logo_and_wordmark_white.svg";
    document.querySelector("#js-case-logo").src = "resources/media/logos/Javascript-shield.svg";

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

// ------------ För att avgöra om användare scrollar ner eller inte -------------
isScrollingDown = false;
windowScroll = 0;
addEventListener("scroll", function () {
    if (window.scrollY > windowScroll + 100) {
        windowScroll = window.scrollY;
        isScrollingDown = true;
        console.log("Is scrolling down: " + isScrollingDown);
    }
    else if (window.scrollY < windowScroll - 100) {
        windowScroll = window.scrollY;
        isScrollingDown = false;
        console.log("Is scrolling down: " + isScrollingDown);
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


const flag = document.querySelector("#language");

const downloadCv = document.querySelector("#download-cv");
const aboutMeTextOne = document.querySelector("#about-me-text-1");
const aboutMeTextTwo = document.querySelector("#about-me-text-2");
const aboutMeTextThree = document.querySelector("#about-me-text-3");
const downloadCvOg = downloadCv.innerText;
const modalButtonOg = modalButton.innerText;
const aboutMeTextOneOg = aboutMeTextOne.innerText;
const aboutMeTextTwoOg = aboutMeTextTwo.innerText;
const aboutMeTextThreeOg = aboutMeTextThree.innerText;

const aboutMe = document.querySelector("#about-me");
const skills = document.querySelector("#skills");
const references = document.querySelector("#references");
const aboutMeMobile = document.querySelector("#about-me-mobile");
const skillsMobile = document.querySelector("#skills-mobile");
const referencesMobile = document.querySelector("#references-mobile");
const aboutMeOg = aboutMe.innerText;
const skillsOg = skills.innerText;
const referencesOg = references.innerText;
const aboutMeMobileOg = aboutMeMobile.innerText;
const skillsMobileOg = skillsMobile.innerText;
const referencesMobileOg = referencesMobile.innerText;


const aboutMeH2 = document.querySelector("#about-me-h2");
const skillsH2 = document.querySelector("#skills-h2");
const referencesH2 = document.querySelector("#references-h2");
const aboutMeH2Og = aboutMeH2.innerText;
const skillsH2Og = skillsH2.innerText;
const referencesH2Og = referencesH2.innerText;

const caseOne = document.querySelector("#case-one");
const caseTwo = document.querySelector("#case-two");
const caseThree = document.querySelector("#case-three");
const caseFour = document.querySelector("#case-four");
const caseOneOg = caseOne.innerText;
const caseTwoOg = caseTwo.innerText;
const caseThreeOg = caseThree.innerText;
const caseFourOg = caseFour.innerText;

let isEnglish = true;
function translation() {

    if (!isEnglish) {
        flag.src = "resources/media/graphics/uk-flag.svg";
        flag.alt = "The Union Jack flag";

        aboutMeTextOne.innerText = "Jag heter Philip Waern och studerar .NET-utvecklare med molninriktning på Jensen YH."
        aboutMeTextTwo.innerText = "Jag har 15 års erfarenhet av videoproduktion och fotografi. Under åren har jag varit van vid att tänka kreativt när jag löser alla typer av problem, både i redigering och på inspelningsplats. Det kreativa sättet att lösa problem är något jag tar med mig in i min nya karriär som utvecklare.";
        aboutMeTextThree.innerText = "Nu tar jag med mig samma nyfikenhet, kreativitet och analytiska tänkande in i min nyaroll som utvecklare. Mitt mål är att bli en professionell backendutvecklare och bygga skalbara och tillförlitliga molnbaserade lösningar, samtidigt som jag kontinuerligt utvecklas som utvecklare.";

        aboutMe.innerText = "Om mig";
        skills.innerText = "Kompetenser";
        references.innerText = "Referenser";
        aboutMeMobile.innerText = "Om mig";
        skillsMobile.innerText = "Kompetenser";
        referencesMobile.innerText = "Referenser";

        aboutMeH2.innerText = "Om mig";
        skillsH2.innerText = "Kompetenser";
        referencesH2.innerText = "Referenser";

        modalButton.innerText = "Kontakta mig";
        downloadCv.innerText = "Ladda ner CV";

        caseOne.innerText = "Ett eget projekt med att göra en synth genom att använda HTML, CSS och JavaScript tillsammans med Web Audio API.";
        caseTwo.innerText = "En uppgift att skapa ett API för en bank, database first. Tekniker som används i API:et är Entity Framework, Controllers, JWT för authorization och authentication, AutoMapper och Swagger.";
        caseThree.innerText = "En uppgift att skapa API för ett forum, code first. Tekniker som använts är bland annat Entity Framework, Controllers, JWT for autharization and authentication, AutoMapper Swagger";
        caseFour.innerText = "Ett konsolspel utvecklat som en inlämninguppgift under kursen C# grund";

        weatherLanguage = "se";
        updateWeather();
        isEnglish = false;
    }
    else if (isEnglish) {
        flag.src = "resources/media/graphics/swe-flag.svg";
        flag.alt = "Swedish flag";
        aboutMeTextOne.innerText = aboutMeTextOneOg;
        aboutMeTextTwo.innerText = aboutMeTextTwoOg;
        aboutMeTextThree.innerText = aboutMeTextThreeOg;

        aboutMe.innerText = aboutMeOg;
        skills.innerText = skillsOg;
        references.innerText = referencesOg;
        aboutMeMobile.innerText = aboutMeMobileOg;
        skillsMobile.innerText = skillsMobileOg;
        referencesMobile.innerText = referencesMobileOg;

        aboutMeH2.innerText = aboutMeH2Og;
        skillsH2.innerText = skillsH2Og;
        referencesH2.innerText = referencesH2Og;

        modalButton.innerText = modalButtonOg;
        downloadCv.innerText = downloadCvOg;
        
        
        caseOne.innerText = caseOneOg;
        caseTwo.innerText = caseTwoOg;
        caseThree.innerText = caseThreeOg;
        caseFour.innerText = caseFourOg;

        weatherLanguage = "en";
        updateWeather();
        isEnglish = true;
        console.log(caseFourOg.innerText);
    }
}
// translation();

const languageBtn = document.querySelector("#language");
languageBtn.addEventListener("click", () => {
    if (isEnglish) {
        isEnglish = false;
        translation();
    }
    else if (!isEnglish) {
        isEnglish = true;
        translation();
    }
})