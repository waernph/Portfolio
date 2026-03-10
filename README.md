# Portfolio - Philip Waern

## Syfte
Portfolion har i huvudsak två syften.
Dels att visa upp projekt utvecklade före, under och efter utbildningen. Dels har portfolion ett syfte i sig att visa på kunskaper inom frontend. Siten är utvecklad med HTML, CSS och JavaScript.

## Funktioner
Här listas några av de funktioner som används på sidan.

### Väder
Väder hämtas med fetch() från open weather maps API och användaren kan i dagsläget välja mellan tre städer. Längre fram kommer även möjligheten att använda sin plats för att hämta väder.

### Theme
Genom att klicka på glödlampan kan användaren växla mellan mörkt och ljust läge. Funktionen anropas via Event Listener, som sedan avgör vilket tema som är aktivt för att då växla till det tema som inte är aktivt med en enkel if-sats. I dagsläget startar sidan med mörkt läge, längre fram kommer sidan att anpassa sig efter användarens systems tema eller sparat valt tema.

### Modal
För att kontakta mig genom via sidan klickar användaren på knappen "Contact me". Då öppnas ett modal-fönster där användaren fyller i sin egen mail och meddelande och trycker sedan på skicka. Mailet skickas via extern tjänst.

En modal används även som meny vid smalare skärm, som t.ex. mobil.

## JavaScript
Nedan listas funktioner där JavaScript(JS)används per sektion

### Header
För att flytta och visa modalen för kontaktformuläret används JS för att ändra styling på modalen, samt sätta boolean med namnet modalIsOpen till true. Detta för att kunna stänga kontaktformuläret om menyn i mobil-läge öppnas. Samma sak gäller modalen för menyn, men då med variabeln menuIsOpen. Menyn stängs även när du klickar på någon av dess länkar.

För att ändra tema(mörk/ljus) används också JS för att ändra värden på variabler i colors.css samt loggor för att de ska urskiljas bättre mot bakgrunden.

### Hero
JS används för att loopa igenom en array av taglines i hero. Loopen sköts med en setIntervall med 4 sekunders intervall. När index i setIntervall når längd av array sätts index till 0. Detta för att enkelt kunna fylla på fler tag lines vid behov. Eventuellt kommer det ändras till att slumpas fram.

För att hämta väder används en asynkron metod och fetch för att hämta och presentera väder. Temperaturen avrundas med Math.round(). För att enkelt kunna välja stad används cityId i endpoint och det fås från en rullista(select). Eventuellt kommer även möjligheten att hämta sin plats genom att aktivt trycka på en "pil" implementeras längre fram.

### Main
Här används JS för att presentera referenser med citat. Det liknar sättet att hämta tag line, men nu används en dictionary för att enkelt hämta namn, text och företag med hjälp av index. Det gör det också väldigt enkelt att uppdatera med nya referenser.

### Footer
JS används för att uppdatera år så att jag slipper ha det hårdkodat.

