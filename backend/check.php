<?php

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

// for ($m = 0; $m < 3; $m++) {
//     $array[$m] = array_chunk($array[$m], 9);
// }

// for ($a = 0; $a < 3; $a++) {
//     for ($b = 0; $b < 3; $b++) {
//         $output[] = $array[$a][$b];
//     }
// }

$row1 = array_chunk($array[0], 9);
$row2 = array_chunk($array[1], 9);
$row3 = array_chunk($array[2], 9);

for ($m = 0; $m < 3; $m++) {
    $output[] = $row1[$m];
    $output[] = $row2[$m];
    $output[] = $row3[$m];
}

var_dump($output);