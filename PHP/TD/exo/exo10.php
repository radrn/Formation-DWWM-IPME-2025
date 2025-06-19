<?php

$mot = 'Bonjour';
$mot = strtolower($mot);
$array = str_split($mot);
$array2 = [];
for ($i = count($array) - 1; $i >= 0; $i--) { 
    $array2[] = $array[$i]; 
}; 

if ($array == $array2) {
    echo "C'est un palindrome";
} else {
    echo "Ce n'est pas un palindrome";
};
?>