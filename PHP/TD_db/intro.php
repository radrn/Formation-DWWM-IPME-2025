<?php

// conncection à la base de donées 
$pdo = new PDO(
    'mysql:host=localhost;dbname=spotify;charset=utf8',
    'root',
    ''
);

var_dump($pdo);

//ecrire en texte la requete 
$sql = "SELECT * FROM song";

//on prepare la requete 
$stmt = $pdo->prepare($sql);

//on execute la requete 
$stmt->execute();

//on récupère les datas
//fetchAll -> récupère plusieurs lignes
//fetch_assoc -> récupère les valeurs sous forme de tableau assoc
$song = $stmt->fetchAll(PDO::FETCH_ASSOC);

var_dump($song);


//  récuperer une seule ligne par son id
$sql = "SELECT * FROM song WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => 1]);
$song = $stmt->fetch(PDO::FETCH_ASSOC);

var_dump($song);

// recuperer une ligne par son label
$sql = "SELECT * FROM song WHERE title = :title";
$stmt = $pdo->prepare($sql);
$stmt->execute(['title' => 'Castle']);
$song = $stmt->fetch(PDO::FETCH_ASSOC);

var_dump($song);

// inserer une chanson dans la table
$sql = "INSERT INTO song (title, description, note) VALUES (:title, :description, :note)";
$stmt = $pdo->prepare($sql);
$stmt->execute([
    'title' => 'Inception',
    'description' => 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    'note' => 5
]);


// inserer plusieurs chansons
$songs = [
    ['title' => 'Deja-vu', 'description' => "oui", 'note' => 6],
    ['title' => 'Cyberpunk', 'description' => "on l'attend encore", 'note'=> 4],
    ['title' => 'Dune', 'description' => 'celle qui restera au basement', 'note'=> 10],
];

$sql = "INSERT INTO song (title, description, note) VALUES (:title, :description, :note)";
$stmt = $pdo->prepare($sql);

foreach ($songs as $song) {
    $stmt->execute($song);
};


// supprimer une chanson avec son id
$sql = "DELETE FROM song WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => 2]);

// mettre à jour une chason 
$sql = "UPDATE song SET title = :title WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute([
    'title' => 'wake up',
    'id' => 7
]);