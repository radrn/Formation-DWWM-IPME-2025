<?php
// EXEMPLE 
// header('Location: index.php')
// //je peux aussi envoyé des params GET avec ma rediriection
// header('Location: index.php?toto=tata')

// permet à PHP de ne pas executer les balises html, du genre : "<script></script>"
// htmlspecialchars($_POST['test-input'])

if ((isset($_POST["name"])) && (isset($_POST["firstName"])) && (isset($_POST["age"]))){
    echo ("Bonjour" . " " . htmlspecialchars($_POST["name"]). " ". htmlspecialchars($_POST["firstName"]). " vous avez " . htmlspecialchars(($_POST["age"])) . " ans.");
} else if((!isset($_POST["name"])) && (!isset($_POST["firstName"])) && (!isset($_POST["age"]))){
    echo (" ERREUR : Un des champs n'a pas été renseigné !");
};
?>