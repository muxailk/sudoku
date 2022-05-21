<?php

function render($matrix) {
    // For every 3 rows
    for ($i = 0; $i < 9; $i += 3) {

        // For every box in 3 rows
        for ($j = 0; $j < 3; $j++) {
            echo '<div class="box">';

            // For every row in a box
            for ($k = 0; $k < 3; $k++) {

                // For every element in a row
                for ($l = 0; $l < 3; $l++) {
                    echo '<div class="cell">', $matrix[$i + $k][$j][$l] !== 0 ? $matrix[$i + $k][$j][$l] : "", '</div>';
                }
                
            }

            echo '</div>';
        }

    }

}

?>