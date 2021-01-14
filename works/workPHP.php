<?php


function ButtonBeforeAfter($ID)
{
    $myfile = fopen("../media/json/home-works.json", "r") or die("Unable to open file!");
    $to_parse = fread($myfile, filesize("../media/json/home-works.json"));
    fclose($myfile);
    $parsed = json_decode($to_parse, true);
    $index = 0;
    $view = [];

    foreach ($parsed as $v) {

        if ($v["id"] == $ID) {
            $view = $v;


        }

        $index++;
    }
    return $view;
}

function button($ID)
{
    $myfile = fopen("../media/json/home-works.json", "r") or die("Unable to open file!");
    $to_parse = fread($myfile, filesize("../media/json/home-works.json"));
    fclose($myfile);
    $parsed = json_decode($to_parse, true);
    $index = 0;
    $vBefore = [];
    $vAfter = [];
    $view = [];
    foreach ($parsed as $v) {

        if ($v["id"] == $ID) {
            $view = $v;
            $vAfter = array_values($parsed)[$index + 1];
            $vBefore = array_values($parsed)[$index - 1];
            if ($v['case-study'] != $vBefore['case-study']) {
                $vBefore = [];
            }
            if ($v['case-study'] != $vAfter['case-study']) {
                $vAfter = [];
            }

        }

        $index++;
    }


    ?>
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column">
                <a class="button is-dark buttonBack <?php
                if (empty($vBefore)) {
                    echo 'hide';
                }
                ?>"
                   href="<?php
                   if (!empty($vBefore)) {
                       echo '/works/' . $vBefore['link'];
                   }
                   ?>">

                    <img alt='' class="backgroundButton"

                         src="<?php
                         if (!empty($vBefore)) {
                             echo '/media/img/works/' . $vBefore['image'];
                         }
                         ?>">


                    <p class="buttonText" style="text-align: left"><?php
                        if (!empty($vBefore)) {
                            echo $vBefore['title'];
                        } ?></p>


                </a>
            </div>
            <div class="column">
                <div class="has-text-centered">
                    <a class="button is-dark buttonBack" href="<?php
                    if ($view['case-study'] == true) {
                        echo '/work_case.php';
                    } else {
                        echo '/work_prod.php';
                    }
                    ?>">
                        <p class="buttonText " style="text-align: center">Torna Indietro</p>
                    </a>
                </div>
            </div>

            <div class="column">
                <div class="buttons is-right">
                    <a class="button is-dark buttonBack <?php
                    if (empty($vAfter)) {
                        echo 'hide';
                    }
                    ?>"
                       href="<?php
                       if (!empty($vAfter)) {
                           echo '/works/' . $vAfter['link'];
                       }
                       ?>">
                        <p class="buttonText" style="text-align: right"><?php
                            if (!empty($vAfter)) {
                                echo $vAfter['title'];
                            } ?></p>
                        <img alt='' class="backgroundButton"

                             src="<?php
                             if (!empty($vAfter)) {
                                 echo '/media/img/works/' . $vAfter['image'];
                             }
                             ?>">


                    </a>

                </div>
            </div>
        </div>
    </div>
    <?php
}