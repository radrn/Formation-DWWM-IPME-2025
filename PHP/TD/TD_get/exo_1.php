<?php

if (isset($_GET["prenom"])) {
    echo "Bonjour " . $_GET["prenom"] . " !";
} else {
    echo "Bonjour inconnu !";
}

