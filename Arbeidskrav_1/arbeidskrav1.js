/*
    Opprettet funksjonen articleCardChange som blir kalt på i button taggen i HTML dokumentet. 
    La til parameter titlename for å kunne kalle på de ulike titlene på knappene eks; HTML tittelen på HTML knappen.
    Opprettet en const variabel (resourceItem) for å bruke denne når jeg filtrerte ut resources. 
    ResourceItem ble brukt for å sette inn verdier i template literals. 
    .join ble brukt for å fjerne fnuttene som dukket opp mellom de ulike listepunktene. 
*/

/*
    Marius Rørmark hjalp meg med å forstå template literals og hvordan dette kunne brukes i koden, 
    i tillegg hjalp han meg med å forstå hvordan .filter kan brukes for å få ut et spesifikt objekt. 
    Har i tillegg fått god hjelp av cheatsheetsene Innføring i programmering; array-with-objects-filtered, functions
    og utvikling av interaktive nettsteder: UIN2025_coursebase. 
*/
function articleCardChange(titlename) {
    const resourceItem = resources.filter(resourceItem => resourceItem.category === titlename)
    //console.log(resources.filter(resourceItem => resourceItem.category === titlename))
    
    //console.log("Hva er navnet på artikkelkortet? " + titlename)
    document.getElementById("article-card").innerHTML = 
         `<h2>${resourceItem[0].category}</h2>             
            <p>
               ${resourceItem[0].text}
            </p>
            <ul>
               ${resourceItem[0].sources.map(sourceItem => `<li><a href=${sourceItem.url}>${sourceItem.title}</a></li>`).join("")}
            </ul>`
}

