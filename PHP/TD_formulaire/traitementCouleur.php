<?php

if ((isset($_POST["prenom"])) && isset($_POST["couleur"])) {
    echo ("Bonjour ".htmlspecialchars($_POST["prenom"]) . "!" . "<br>" . " Ta couleur préférée est : " . htmlspecialchars($_POST["couleur"]));
} else { 
    echo("Bienvenue ! Choisis ta couleur préférée.");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style=<?php echo ("background-color:" .htmlspecialchars($_POST["couleur"]))?>>
    
</body>
</html>

