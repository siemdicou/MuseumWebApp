window.addEventListener("load", function(){

    /** we maken de notificationBar aan, gekoppeld aan het HTML element */
    var notificationBar = new NotificationBar(".notification-bar");
    var kleurbitch = new Kleurbitch("#kleurbitch.");

    var theTemplateScript = $("#block-expressions-template").html();
    // var reader = new reader("#reader");
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
    //          reader.show();
       
    // };
    // document.getElementById("scan").onclick = function(){
    //          qrScan.show();
       
    // };
 

    document.getElementById("remove").onclick = function(){
             notificationBar.hide();
    };
 $('#reader').html5_qrcode(function(data){
         // do something when code is read
          

         console.log(data);
         var theTemplate = Handlebars.compile(theTemplateScript);
         var paintings=
         {
             title: "Oboma-Rembrandt",
             img:"img/obama-rembrandt.jpg",
             content: "President Obama is vanochtend even voor negen uur geland op Schiphol. Vanmiddag is hij bij de nucleaire top in Den Haag, maar de president ging eerst nog met zijn helikopter Marine One naar het Museumplein voor een bezoek aan het Rijksmuseum. Na een rondleiding gaven premier Rutte en president Obama een korte toespraak."

         };
         var theCompiledHtml = theTemplate(paintings);
         $('.content-placeholder').html(theCompiledHtml);
  


  // Add the compiled html to the page
 
            },
    function(error){
        //show read errors 
    }, function(videoError){
        //the video stream could be opened
    }
);
//    var theTemplate = Handlebars.compile(theTemplateScript);
//    var paintings=
//    {
//        title: "1",
//        img:"img/obama-rembrandt.jpg",
//        content: "baas nummer 1"
//
//    };
//    var theCompiledHtml = theTemplate(paintings);
//    $('.content-placeholder').html(theCompiledHtml);
//              //   {title: "2", content: "baas nummer 2" ,  img:"" },
//              //   {title: "3", content: "baas nummer 3" ,  img:"" }
//              // ];
//                // Pass our data to the template
//
//
});