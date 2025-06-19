<?php

$myVar = 'Hello tout le monde';
//echo permet d'afficher des choses sur la page;
echo $myVar;

// permet d'écrire un paragraphe ou dedans il y a :$myVar
echo '<p>' . $myVar . '</p>';

$tableau = [20, 12, 23];

var_dump($tableau);

// boucle for 
// afficher chaque élément du tableau les uns à la suites des autres
for($i = 0; $i < count($tableau); $i++){
    echo $tableau[$i] . ' ';
}

// boucle foreach
foreach ($tableau as $item){
    echo $item;
}


?>