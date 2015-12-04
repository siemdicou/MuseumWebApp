window.addEventListener("load", function(){

    /** we maken de notificationBar aan, gekoppeld aan het HTML element */
    var notificationBar = new NotificationBar(".notification-bar");
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
          
         console.log(data)
                 var theTemplate = Handlebars.compile(theTemplateScript);
         var paintings=
                {
                  title: "1", 
                  content: "baas nummer 1" , 
                   img:"http://www.engraversnetwork.com/files/placeholder.jpg" 
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

              //   {title: "2", content: "baas nummer 2" ,  img:"" },
              //   {title: "3", content: "baas nummer 3" ,  img:"" }
              // ];
                // Pass our data to the template


});