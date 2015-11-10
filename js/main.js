window.addEventListener("load", function(){

    /** we maken de notificationBar aan, gekoppeld aan het HTML element */
    var notificationBar = new NotificationBar(".notification-bar");

    /** we laten een begin notificatie zien */
    // notificationBar.showMessage("hoi");
    console.log(notificationBar);
    /** we checken of je op de pagina klikt */
    document.addEventListener("click", function(){
        notificationBar.show();
    });


    // document.addEventListener("click", function(){
    //     notificationBar.hide(3000);
    // });



});