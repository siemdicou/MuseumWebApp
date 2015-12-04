<!DOCTYPE html>
<html>
<head>
    <title>Web-app</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/default.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    <script src="js/handlebars-v4.0.5.js"></script>
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script src="lib/html5-qrcode.min.js"></script>
    <script src="js/NotificationBar.js"></script>
    <script src="js/kleurbitch.js"></script>
    <script src="js/main.js"></script>

</head>

<body>



<img id="show" src="https://www.mileiq.com/images/homepage/hamburger.png" width="0.01%">
<!-- 
<div class="notification-bar animatedCSS"> -->
    <div id="navTop">
        <img id="remove" src="img/delete30.png" width="0.01%" margin="600px">
    </div>
    <!-- <div id="navMenu">
        <p>Home</p>
        <p>About</p>
        <p>Help</p>
        <p>Credits</p>
    </div>
</div> -->
<div id="container">
    <p id="scan">SCAN QR CODE</p>
</div>
<div id="reader">
</div>




<!-- <h1 id="testhoi">hoi</h1> -->


<script id="block-expressions-template" type="text/x-handlebars-template">


    <div id="kleurbitch">
        <h1>{{title}}</h1>

        <img src="{{img}}">


        <p>{{content}}</p>
    </div>


</script>

<div class="content-placeholder"></div>


</body>
</html>
