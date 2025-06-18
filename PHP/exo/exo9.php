<?php

$phrase = 'Bonjour tout le monde';
$phrase = strtolower($phrase);
$vowelsArr = [ 'a', 'e', 'i', 'o', 'u', 'y'];
$array = str_split($phrase);
$vowelsNbr = 0;
foreach ($array as $element) {
    if (in_array($element, $vowelsArr) == true) {
        $vowelsNbr += 1;
    };
};
echo $vowelsNbr;

?>




