window.addEventListener("load", function(){

    /** we maken de notificationBar aan, gekoppeld aan het HTML element */
    var notificationBar = new NotificationBar(".notification-bar");

    /** we laten een begin notificatie zien */
    notificationBar.showMessage("hoi");

    /** we checken of je op de pagina klikt */
    document.addEventListener("click", function(){
        notificationBar.showMessage(notificationBar);
    });

});