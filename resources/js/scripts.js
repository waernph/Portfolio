function swapDarkLightStyle(styleDark, styleLight){
    document.getElementById(styleDark).setAttribute('href',styleDark);
    document.getElementById(styleLight).setAttribute('href', styleLight);
}

function yearNow(){
    const year = new Date().getFullYear();
    let yearString = year.toString();
    document.getElementById("yearNow").innerText = yearString;
    return yearString;
}