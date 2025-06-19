<?php

$couleurs = [
    'rouge' => '#FF0000',
    'bleu' => '#0000FF',
    'vert' => '00FF00'
];

$colors = [];

foreach($couleurs as $colorName => $hexa) {
    $colors[$hexa] = $colorName;
};
var_dump($couleurs);
var_dump($colors);