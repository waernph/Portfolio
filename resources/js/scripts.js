var contactModal = document.getElementById("contact-modal");
var openButton = document.getElementById("button-open-modal");
var closeButton = document.getElementsByClassName("button-close-modal");


function year(){
    const year = new Date().getFullYear();
    document.getElementById("yearNow").innerText = year;
}
year();
