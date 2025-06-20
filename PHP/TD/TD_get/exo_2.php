<?php


if ((isset($_GET["a"])) and (isset($_GET["b"]))) {
    echo $_GET["a"] . "<br>";
    echo $_GET["b"] . "<br>";
    echo "La somme des deux est : " . $_GET["a"] + $_GET["b"];
} else {
    echo "Aucune somme en cours";
}
