<?php


function ButtonBeforeAfter($ID)
{
    $myfile = fopen("../media/json/home-lavori.json", "r") or die("Unable to open file!");
    $to_parse = fread($myfile, filesize("../media/json/home-lavori.json"));
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
    $myfile = fopen("../media/json/home-lavori.json", "r") or die("Unable to open file!");
    $to_parse = fread($myfile, filesize("../media/json/home-lavori.json"));
    fclose($myfile);
    $parsed = json_decode($to_parse, true);
    $index = 0;
    $vBefore = [];
    $vAfter = [];
    $view = [];
    foreach ($parsed as $v) {

        if ($v["id"] == $ID) {
            $view = $v;
            $vAfterIndex = $index + 1;
            $vBeforeIndex = $index - 1;
            if ($vAfterIndex >= count($parsed))
                $vAfterIndex = 0;
            if ($vBeforeIndex < 0)
                $vBeforeIndex = count($parsed) - 1;
            $vAfter = array_values($parsed)[$vAfterIndex];
            $vBefore = array_values($parsed)[$vBeforeIndex];
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

    <div class="columns is-vcentered">
        <div class="column">
            <div class="buttons is-left">
                <a id="buttonLeft" class="button is-dark buttonBack <?php
                if (empty($vBefore)) {
                    echo 'hide';
                }
                ?>"
                   data-link="<?php
                   if (!empty($vBefore)) {
                       echo '/lavori/' . $vBefore['link'];
                   }
                   ?>">

                    <img alt='' class="backgroundButton"

                         src="<?php
                         if (!empty($vBefore)) {
                             echo '/media/img/lavori/' . $vBefore['image'];
                         }
                         ?>">


                    <p class="buttonText" style="text-align: left"><?php
                        if (!empty($vBefore)) {
                            echo $vBefore['title'];
                        } ?></p>


                </a>
            </div>
        </div>
        <div class="column">
            <div class="has-text-centered">
                <a class="button is-dark buttonBack" href="<?php
                if ($view['case-study'] == true) {
                    echo '/case_study';
                } else {
                    echo '/produzioni';
                }
                ?>">
                    <p class="buttonText " style="text-align: center">Torna Indietro</p>
                </a>
            </div>
        </div>

        <div class="column">
            <div class="buttons is-right">
                <a id="buttonRight" class="button is-dark buttonBack <?php
                if (empty($vAfter)) {
                    echo 'hide';
                }
                ?>"
                   data-link="<?php
                   if (!empty($vAfter)) {
                       echo '/lavori/' . $vAfter['link'];
                   }
                   ?>">
                    <p class="buttonText" style="text-align: right"><?php
                        if (!empty($vAfter)) {
                            echo $vAfter['title'];
                        } ?></p>
                    <img alt='' class="backgroundButton"

                         src="<?php
                         if (!empty($vAfter)) {
                             echo '/media/img/lavori/' . $vAfter['image'];
                         }
                         ?>">


                </a>

            </div>
        </div>
    </div>

    <?php
}