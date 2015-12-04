/**
 * Constructor functie om notification bars aan te kunnen maken. Goed her te gebruiken
 * @param htmlElementID (String): ID of Class van het html element die je wilt koppelen
 * @param showTime (int): hoelang blijft een notification bar open staan (milliseconde)
 * @constructor
 */
function Kleurbitch(htmlElementID, showTime){
    /** we halen het HTML element op die gebruikt moet worden als notification bar */
    //this.kleurbitch = document.querySelector(htmlElementID);

    /** we stellen in hoelang een bar zichtbaar blijft. Als je niets door hebt gegeven: 3 seconden */
    this.showTime = showTime || 3000;
}

/**
 * We stellen het prototype object in met de functies die van buitenaf gebruikt moeten kunnen worden
 */
Kleurbitch.prototype = {
    /**
     * Trigger de notification bar om een bericht te laten zien
     * @param message (String): de tekst die moet worden weergegeven
     */
    show: function(){
        /** als er al een bericht wordt weergegeven, dan resetten we de timeout */
        if(this.timeoutID) {
            clearTimeout(this.timeoutID);
        }

        this.show();

        /** we stellen de tekst in in de div */
        this.kleurbitch.innerHTML = message;

        /** we stellen een timer in om de balk weer weg te laten gaan
         *  ik doe this.hide.bind() omdat de functie 'hide' niet meer weet wie 'this' is */
        this.timeoutID = setTimeout(this.hide.bind(this), this.showTime);
    },

    /**
     * Functie om de bar in beeld te laten komen
     */
    show: function(){
        this.kleurbitch.classList.add("enabled");
    },

    /**
     * Functie om de balk weer weg te laten gaan
     */
    hide: function(){
        this.kleurbitch.classList.remove("enabled");
    }

}