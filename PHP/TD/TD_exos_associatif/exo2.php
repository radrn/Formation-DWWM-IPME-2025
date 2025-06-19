<?php

$personne = [
    'nom' => 'Dupont',
    'prenom' => 'Alice',
    'age' => 25
];

$personne['age'] = 26;
$personne['ville'] = 'Paris';
var_dump($personne);

