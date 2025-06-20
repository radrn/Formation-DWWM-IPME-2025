<?php

if (isset($_GET["couleur"])) {
    echo '<div style="Color:'.$_GET["couleur"].'">'. "Ceci est un texte coloré" .'</div>' ;
} else {
    echo "Ceci est un texte coloré";
}