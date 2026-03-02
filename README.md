# Portfolio - Philip Waern

## Syfte
Portfolion har i huvudsak två syften.
Dels att visa upp projekt utvecklade före, under och efter utbildningen. Dels har portfolion ett syfte i sig att visa på kunskaper inom frontend. Siten är utvecklad med HTML, CSS och JavaScript.

## Funktioner
Här listas några av de funktioner som används på sidan.

### Väder
Väder hämtas med fetch() från open weather maps API och användaren kan i dagsläget välja mellan tre städer. Längre fram kommer även möjligheten att använda sin plats för att hämta väder.

### Theme
Genom att klicka på glödlampan kan användaren växla mellan mörkt och ljust läge. Funktionen anropas via Event Listener, som sedan avgör vilket tema som är aktivt för att då växla till det tema som inte är aktivt med en enkel if-sats. I dagsläget startar sidan med mörkt läge, längre fram kommer sidan att anpassa sig efter användarens systems tema.

### Modal
För att kontakta mig genom via sidan klickar användaren på knappen "Contact me". Då öppnas ett modal-fönster där användaren fyller i sin egen mail och meddelande och trycker sedan på skicka. Mailet skickas via extern tjänst.