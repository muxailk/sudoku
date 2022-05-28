<?php

require_once "../vendor/autoload.php";

$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON);

$array = $output = [];

// Sorting array

// For 9 boxes
for ($i = 0; $i < 9; $i++) {

    // For 3 rows in a box
    for ($j = 0; $j < 9; $j += 3) {

        $array[$j / 3][] = $input[$i][$j];
        $array[$j / 3][] = $input[$i][$j + 1];
        $array[$j / 3][] = $input[$i][$j + 2];
    }
}



