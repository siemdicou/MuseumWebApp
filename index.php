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
    <script src="js/main.js"></script>
</head>

<body>
<img id="show" src="https://www.mileiq.com/images/homepage/hamburger.png" width="10%">

<div class="notification-bar animatedCSS">
    <div id="navTop">
        <img id="remove" src="img/delete30.png" width="10%">
    </div>
    <div id="navMenu">
        <p>Home</p>
        <p>About</p>
        <p>Help</p>
        <p>Credits</p>
    </div>
</div>
<div id="container">
    <p id="scan">SCAN</p>
</div>
<div id="reader">
</div>


<script id="block-expressions-template" type="text/x-handlebars-template">

    <p> The <b> {{#uppercase}} konami {{/uppercase}} </b> Code is a cheat code that appears in many video games.</p>

    <img src="{{img}}">
    <p>During the title screen before the game demo begins, the player could press the following sequence of buttons on the game controller to enable the cheat:</p>

    <p>{{#uppercase}}{{code}}{{/uppercase}}</p>


    <p>The code is also present as an Easter egg on a number of websites.</p>



</script>


<?php

for($i = 0; $i<=10; $i++){
    echo'<div class="content-placeholder'.$i.'"></div>';
}
?>




</body>
</html>