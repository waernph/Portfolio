
function translation() {

    if (!isEnglish) {
        flag.src = "resources/media/graphics/uk-flag.svg";
        flag.alt = "The Union Jack flag";

        nameField.placeholder = "Namn";
        messageField.placeholder = "Meddelande";
        modalHeader.innerText = "Hör gärna av dig via formuläret";
        sendBtn.innerText = "Skicka";

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

        nameField.placeholder = nameFieldOg;
        messageField.placeholder = messageFieldOg;
        modalHeader.innerText = modalButtonOg;
        sendBtn.innerText = sendBtnOg;

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
    }
}