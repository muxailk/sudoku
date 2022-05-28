<?php

function render($matrix)
{
    // For every 3 rows
    for ($i = 0; $i < 9; $i += 3) {

        // For every box in 3 rows
        for ($j = 0; $j < 3; $j++) {
            echo '<div class="box">';

            // For every row in a box
            for ($k = 0; $k < 3; $k++) {

                // For every element in a row
                for ($l = 0; $l < 3; $l++) {

                    printCell($j, $i + $k, $l, $matrix[$i + $k][$j][$l]);
                }
            }

            echo '</div>';
        }
    }
}

function printCell($j, $row, $column, $value)
{
    echo $value === 0
        ? "<div class='cell' data-row='" . $row . "' data-column='" . $column + $j * 3 . "' contenteditable ></div>"
        : "<div class='cell' data-row='" . $row . "' data-column='" . $column + $j * 3 . "'>$value</div>";
}
