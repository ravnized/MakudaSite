<?php

function ButtonBeforeAfter($ID)
{
    $myfile = fopen("../media/json/home-works.json", "r") or die("Unable to open file!");
    $to_parse = fread($myfile, filesize("../media/json/home-works.json"));
    fclose($myfile);
    $parsed = json_decode($to_parse, true);
    $index = 0;
    $view = [];
    $vBefore = [];
    $vAfter = [];
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
    <div class="fixed-left">
        <a class="button is-black <?php
        if (empty($vBefore)) {
            echo 'hide';
        }
        ?>"
                href="<?php
                if (!empty($vBefore)) {
                    echo '/works/' . $vBefore['link'];
                }
                ?>">Indietro
        </a>
    </div>

    <div class="fixed-right">
        <a class="button is-black <?php
        if (empty($vAfter)) {
            echo 'hide';
        }
        ?>"
                href="<?php
                if (!empty($vAfter)) {
                    echo '/works/' . $vAfter['link'];
                }
                ?>">Avanti
        </a>
    </div>
    <?php

    return $view;
}