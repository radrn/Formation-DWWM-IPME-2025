<?php

$arrayUsers = [
    [
        'firstName' => 'Jules',
        'favoriteColor' => 'Bleu',
        'fanKamelott' => true
    ],
    [
        'firstName' => 'Antoine',
        'favoriteColor' => 'Noir',
        'fanKamelott' => false
    ],
    [
        'firstName' => 'Bejnamin',
        'favoriteColor' => 'Vert',
        'fanKamelott' => false
    ],

];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .card-custom{
            padding : 20px;
            border : 1px solid red;
            margin : 10px
        }
    </style>
</head>
<body>
    <?php 
foreach ($arrayUsers as $user) {
        echo "<div class='card-custom'>";
        echo "<p>Je m'appel <strong>" . $user['firstName'] . "</strong></p>";
        echo "<p>Je m'appel <strong>" . $user['favoriteColor'] . "</strong></p>";
        echo "</div>";
    }
    ?>

    <?php foreach ($arrayUsers as $users) : ?>
    <div class="card-custom">
        <p>Je m'appel <strong><?php echo $user['firstName'] ?></p>
        <p>Ma couleur préférée est le : <strong><?php echo $user['favoriteColor']?></p>
    <?php if ($users['fanKamelott']) : ?>
        <p>C'est un fan de Kamelott</p>
    <?php else :?>
   <p> Ce n'est pas un fan de Kamelott </P>
    <?php endif ;?>
    </div>
    <?php endforeach; ?>
</body>
</html>