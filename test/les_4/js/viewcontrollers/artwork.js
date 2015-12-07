

/**
 * We stellen het prototype object in met de functies die van buitenaf gebruikt moeten kunnen worden
 */
ArtWork.prototype = {

    /**
     * Deze functie kan een kunstwerk uit de lijst pakken en deze in de template injecteren
     * @param id
     */
    showArtByID: function(id){
        var artwork = this.artworks[id],
            artworkHTML = this.createHTMLFromTemplate(artwork);

        this.container.innerHTML = artworkHTML;

        // kunstwerk staat klaar buiten beeld. Over 1 seconde geven we hem de class 'enabled'
        setTimeout(function(){
            document.querySelector(".artwork").classList.add("enabled");
        }, 1000);
    }

}