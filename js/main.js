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
    $('#reader').html5_qrcode(function(){
            // do something when code is read
        var theTemplate = Handlebars.compile(theTemplateScript);

        var painting1=
        {
            title: "1",
            content: "baas nummer 1",
            img:"https://i.ytimg.com/vi/So0kvMF79KI/maxresdefault.jpg"
        }
        var painting2=
        {
            title: "2",
            content: "baas nummer 2",
            img:""
        }
        var painting3=
        {
            title: "3",
            content: "baas nummer 3",
            img:""
        }
        // Pass our data to the template
        var theCompiledHtml = theTemplate(painting1);
        var theCompiledHtml2 = theTemplate(painting2);
        var theCompiledHtml3 = theTemplate(painting3);

        // Add the compiled html to the page
        $('.content-placeholder0').html(theCompiledHtml);
        $('.content-placeholder1').html(theCompiledHtml2);
        $('.content-placeholder2').html(theCompiledHtml3);
    });

        },
    function(error){
        //show read errors
    }, function(videoError){
        //the video stream could be opened
    }
);

  //   paintings: [
  //   {title: "1", content: "baas nummer 1"   url:"" },
  //   {title: "2", content: "baas nummer 2"   url:"" },
  //   {title: "3", content: "baas nummer 3"   url:"" }
  // ]

