window.addEventListener("load", function(){

    /** we maken de notificationBar aan, gekoppeld aan het HTML element */
    var notificationBar = new NotificationBar(".notification-bar");
    // var qrScan = new QrScan("#reader");

    /** we laten een begin notificatie zien */
    // notificationBar.showMessage("hoi");
    //console.log(notificationBar);
    /** we checken of je op de pagina klikt */
    // document.addEventListener("click", function(){
    //     notificationBar.show();
    // });

     document.getElementById("show").onclick = function(){
             notificationBar.show();
       
    };
    // document.getElementById("scan").onclick = function(){
    //          qrScan.show();
       
    // };
 

    document.getElementById("remove").onclick = function(){
             notificationBar.hide();
    };
 $('#reader').html5_qrcode(function(data){
         // do something when code is read
         console.log(data)

    },
    function(error){
        //show read errors 
    }, function(videoError){
        //the video stream could be opened
    }
);       
    
    paintings: [
    {title: "1", content: "baas nummer 1"   url:"" },
    {title: "2", content: "baas nummer 2"   url:"" },
    {title: "3", content: "baas nummer 3"   url:"" }
  ]

});