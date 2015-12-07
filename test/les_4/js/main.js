window.addEventListener("load", function(){

    /** we proberen alle 'logica' in losse bestanden op te slaan waardoor het onder andere:
     * - goed te hergebruiken is
     * - we duidelijk weten waar welke logica is opgeslagen
     * - we onze code heel leesbaar maken/houden
     * - we verantwoordelijkheden gescheiden houden
     * */

    /**
     * Voordelen huidige structuur:
     * - content goed gescheiden (data zou nog uit database mogen)
     * - template: maar op 1 plek stylen (1 HTML voor alle kunstvoorwerpen)
     * - duidelijke stijling in scss
     */

    /** we maken een nieuw object aan waar alle logica inzit voor de notificatie balk */
    var notificationBar = new NotificationBar(".notification-bar");

    /** we laten een begin notificatie zien */
    notificationBar.showMessage("Welkom op deze pagina");

    /** we maken een nieuw object aan waar alle logica inzit voor het laten zien van een kuntwerk */
    var artWorkView = new ArtWork("#artwork-template", "#artwork-container");

    /** we maken een nieuw object aan waar alle logica inzit voor het uitlezen van qr codes */
    // todo: deze logica wil je eigenlijk niet in de Main maar in een Controller object (bijvoorbeeld qrreader.controller.js)
    // dan houden we main.js lekker schoon. We maken hier alleen alle objecten aan.
    var qrReader = new QRReader('#reader', function(id){
        artWorkView.showArtByID(id);
        notificationBar.showMessage("code gescand");
    });

});