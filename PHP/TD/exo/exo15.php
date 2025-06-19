<?php

$valeur = [8, 3, 5, 1, 9];
$min = $valeur[0];
for ($i=0; $i < count($valeur) ; $i++) { 
    if ($valeur[$i] < $min) {
        $min = $valeur[$i];
    }
};
echo $min;
?>