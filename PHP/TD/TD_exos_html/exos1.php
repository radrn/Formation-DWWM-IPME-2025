<?php

$titre = "Bienvenue sur mon site";
$fruits = ['Pomme', 'Banane', 'Cerise'];
$personne = [
  'Nom' => 'Dupont',
  'Prénom' => 'Alice',
  'Âge' => 25,
  'Ville' => 'Paris'
];

$produits = [
  ['nom' => 'Chaise', 'stock' => 5],
  ['nom' => 'Table', 'stock' => 0],
  ['nom' => 'Lampe', 'stock' => 3]
];

$menu = [
  'Google' => 'https://google.fr',
  'Amazon' => 'https://www.amazon.fr/',
  'Spotify' => 'https://open.spotify.com/intl-fr',
  'Youtube' => 'https://www.youtube.com/'
];
?> 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    
    <h1> <?php echo $titre ?> </h1>
<!-- autre solution -->
    <!-- <?php
echo '<h3>' . $titre . '</h3>';
    ?> -->

    <ul>
        <?php foreach ($fruits as $fruit) : ?>
            <li> <?php echo $fruit ?> </li>
            <?php endforeach ;?>
    </ul>
    
<table> 

<?php foreach ($personne as $index => $value) : ?>
    <tr> 
        <th><?php echo $index ?> </th>
        <th> <?php echo $value ?> </th>
    </tr>
    <?php endforeach ;?>

</table>
    
 <ul>
        <?php foreach ($produits as $product ) : ?>
            <li> 
                <?php if ($product['stock'] != 0) :
                echo $product["nom"] . " " . $product['stock'];
                else :
                echo $product["nom"] . " Rupture de stock";
                endif;
                ?>
            <?php endforeach ;?>
</ul>
    
<nav> 
    <ul>
        <?php foreach ($menu as $label => $links ) : ?>
            <li> 
                <a href= <?php echo $links ?>> <?php echo $label ?> </a>
        <?php endforeach ;?>        


</body>
</html>