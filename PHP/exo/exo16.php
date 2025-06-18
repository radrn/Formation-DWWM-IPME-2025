<?php

$mysteres = [38, 72, 15];

foreach ($mysteres as $mystere) {
    $random = rand(1, 100);
    $compteur = 0; 
    while ($random != $mystere) {
        $compteur ++;
        $random = rand(1, 100);
    };
    echo "Nombre mystère : " . $mystere . ", trouvé en " . $compteur . " essais." . "<br>";
};
