<?php

$nombres = [10, 42, 5, 8, 42, 19];
$recherche = 42;


if (in_array($recherche, $nombres)) {
//    $key =  array_search($recherche, $nombres);
   var_dump(array_keys($nombres, $recherche));
};

?>