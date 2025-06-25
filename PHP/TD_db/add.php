<form method="post">
    <label for="title">Title</label>
    <input type="text" id="title" name="title"/>

    <label for="genre">Genre</label>
    <input type="genre" id="genre" name="genre"/>

    <label for="plateform">Plateform</label>
    <input type="plateform" id="plateform" name="plateform"/>

    <label for="rating">Rating</label>
    <input type="rating" id="rating" name="rating"/>

    <button type="submit"> Ajouter le jeu </button>

</form>

<?php

    $pdo = new PDO(
        'mysql:host=localhost;dbname=jeux video;charset=utf8',
        'root',
        ''
    );


if (isset($_POST["title"]) && isset($_POST["genre"]) && isset($_POST["plateform"]) && isset($_POST["rating"])){
                $sql = "INSERT INTO game (title, genre, plateform, rating) VALUES (:title, :genre, :plateform, :rating)";
                $stmt = $pdo->prepare($sql);
                $stmt->execute([
                     'title' => $_POST["title"],
                     'genre' => $_POST["genre"],
                     'plateform' => $_POST["plateform"],
                     'rating' => $_POST["rating"],
                ]);
                header("Location: index.php?success=1");            
}