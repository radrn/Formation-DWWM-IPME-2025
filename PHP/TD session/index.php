<?php
session_start();

//mettre une valeur en session
//dans la clef test -> une string
// $_SESSION['test'] = 'ma valeur de test';

//permet de completement vider le cookie.
//session_destroy();

//mettre à 0 les valeur
//$_SESSION = [];

var_dump($_SESSION);

// if (isset($_SESSION)) {
//     echo ("Vous êtes connecté en tant que" . $user);
// }