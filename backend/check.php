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


for ($m = 0; $m < 3; $m++) {

    for ($n = 0; $n < 3; $n++) {
        
        $output[] = array_chunk($array[$n], 9)[$m];
    }
}


// Replace "" with 0
foreach ($output as &$values) {

    foreach ($values as &$value) {

        if ($value == '') $value = 0;
    }
}


$puzzle = new Xeeeveee\Sudoku\Puzzle($output);
$puzzle->solve();

echo $puzzle->getSolution() === $output ? true : false;