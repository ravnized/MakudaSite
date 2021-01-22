<?php
header("HTTP/1.1 404 Not Found");
?>

<!DOCTYPE html>
<html class="has-navbar-fixed-top" lang="en">

<head>
    <meta charset="UTF-8"/>
    <title>TOIA</title>
    <?php require('./components/common_libraries.php') ?>
    <link href="/css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="/css/menu.css" rel="stylesheet" type="text/css"/>
    <link href="/css/404.css" rel="stylesheet" type="text/css"/>

</head>
<body style="background-color: #111;">

<?php require("./components/navbar.php"); ?>

<?php require("./components/menu.php"); ?>


<section class="hero is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-centered">
                <i class="far fa-frown fa-10x"></i>
                <p class="bigFont">
                    Hmmmmmmm,<br> non trovo la pagina.
                </p>
            </div>
        </div>
    </div>
</section>



<?php require "./components/footer.php" ?>

<script src="/js/menu.js" type="text/javascript"></script>

</body>
</html>


