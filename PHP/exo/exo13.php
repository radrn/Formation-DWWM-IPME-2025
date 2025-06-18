<?php

$nombres = [1, 3, 5, 7, 9]; 

$doubles = [];

for ($i=0; $i < count($nombres) ; $i++) { 
   $doubles[] = $nombres[$i] * 2;
};

print_r($doubles);