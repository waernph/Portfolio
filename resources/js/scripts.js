
function year(){
    const year = new Date().getFullYear();
    document.getElementById("yearNow").innerText = year;
}

year();