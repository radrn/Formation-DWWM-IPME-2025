<?php

$array = [2, 5, 5, 10];
// utiliser break pour sortir de la boucle
foreach ($array as $value) {
    if ($value === 5) {
        break;
    }
}

// die permet d'arreter complement l'execution de PHP des qu'il passe dedans
$array = [2, 5, 5, 10];
foreach ($array as $value) {
    var_dump($value);
    die;
}
var_dump($_SERVER);

// permet de vérifier si la variable name est bien passé dans l'url
// http://localhost:8080/?toto=allo => non
// http://localhost:8080/?name=jules => oui
var_dump($_GET);
if (isset($_GET["name"])) {
    echo $_GET["name"];
};
