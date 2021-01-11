<!DOCTYPE html>
<html class="has-navbar-fixed-top" lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>Toia - Works</title>
    <link href="/css/bulma.min.css" rel="stylesheet"/>
    <link href="/css/work.css" rel="stylesheet" type="text/css"/>
    <link href="/css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="/css/menu.css" rel="stylesheet" type="text/css"/>
    <link
            href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/css/bulma-carousel.min.css"
            rel="stylesheet"
    />
    <link href="https://vjs.zencdn.net/7.10.2/video-js.css" rel="stylesheet"/>
    <script
            crossorigin="anonymous"
            src="https://kit.fontawesome.com/9eeab300fc.js"
    ></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
</head>
<body style="background-color: #111; min-height: 200vh">

<?php require("../components/navbar.php"); ?>

<?php require("../components/menu.php"); ?>

<div class="mainSection">
    <section class="sectionFullWorks">
        <div class="workList">
            <div class="workListItem">
                <div class="container">
                    <div class="workBlockContainer">
                        <div class="workBlock">
                            <div class="workBlockImageSub">
                                <div class="container is-max-desktop">
                                    <video
                                            autoplay
                                            class="imageVideo video-js vjs-default-skin vjs-16-9"
                                            data-setup='{"controls":true}'
                                            loop
                                            muted
                                            preload="none"
                                    >
                                        <source
                                                src="/media/video/works/Oh%20Madre%20Mia%20Finale-1web.m4v"
                                                type="video/mp4"
                                        />
                                        <p class="vjs-no-js">
                                            To view this video please enable JavaScript, and
                                            consider upgrading to a web browser that
                                            <a
                                                    href="https://videojs.com/html5-video-support/"
                                                    target="_blank"
                                            >supports HTML5 video</a
                                            >
                                        </p>
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container textContainer">
                        <h1 class="tVideo">OH MADRE MIA</h1>
                        <br/><br/>
                        <p class="subVideo">Zoda</p>
                        <br/><br/>
                        <div class="columns is-6">
                            <div class="column is-two-thirds">
                                <p class="subVideo">MESSAGGIO</p>
                                <p class="descVideo">
                                    Raccontare Il passaggio turbolento e difficile da uno stile di vita afflitto da
                                    dipendenze e falsa gioia ad uno più cosciente e pulito. Il messaggio ha
                                    un’importanza vitale per il target giovanile del cantante, che mira ad esprimere le
                                    proprie difficoltà e ad aprirsi ai propri ascoltatori.
                                </p>
                            </div>
                            <div class="column">
                                <p><span class="boldOrange">Cliente:</span> Daniele Sodano "Zoda"</p>
                                <p>
                                    <span class="boldOrange">Regia:</span> Simone Santacroce - Taras Snegovoy
                                </p>
                            </div>
                        </div>
                        <br/>


                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<script src="https://vjs.zencdn.net/7.10.2/video.js"></script>
<script
        crossorigin="anonymous"
        integrity="sha512-6MT8e40N5u36Um5SXKtwZmoKcCSg1XaKtexnXZPpQ4iJDHrBEHXKz37fnDovXezsaCd4oKCH5Y+vrcl7qpLPoA=="
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/CSSRulePlugin.min.js"
></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js"></script>
<script src="workJS.js" type="text/javascript"></script>
<script src="../js/menu.js" type="text/javascript"></script>
<script src="/js/aboutJS.js" type="text/javascript"></script>
</body>
</html>
