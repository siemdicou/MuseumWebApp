   
   function ArtWork(templateID, containerID){

    

    

    // We slaan een referentie op naar de <DIV> waar we de kunstwerken in mogen laten zien
    this.container = document.querySelector(containerID);

    	// we halen onze HTML template op als 'rauwe' html
    var templateSource = document.querySelector(templateID).innerHTML;

// Als er geen containerID is doorgegeven dan pakken we standaard "#container"
    containerID = containerID || "#container";
    // Handlebars moet je template eerst compilen voordat je hem kunt gebruiken
    this.createHTMLFromTemplate = Handlebars.compile(templateSource);

    // todo: verplaats deze data naar een 'model' object + eigen script bestand
    // het zou zelfs het mooiste zijn als je model de data laad uit een JSON bestand of uit een database
    this.artworks = [
        {
            title: "Mona Lisa",
            description: "In Parijs is ....",
            url:"http://nieuws.testnet.org/wp-content/uploads/2013/05/Schilderij-de-aardappel-eters.png"
        },
        {
            title: "Nachtwacht",
            description: "In Amsterdam is ....",
            url:"http://nieuws.testnet.org/wp-content/uploads/2013/05/Schilderij-de-aardappel-eters.png"
        },
        {
            title: "De schreeuw",
            description: "Verloren gegaan....",
            url:"http://nieuws.testnet.org/wp-content/uploads/2013/05/Schilderij-de-aardappel-eters.png"
        },
        {
            title: "Aardappeleters",
            description: "Mooi werk wat....",
            url:"http://nieuws.testnet.org/wp-content/uploads/2013/05/Schilderij-de-aardappel-eters.png"
        }
    ];

}
