<?php
if(isset($_GET["jeux_id"])){
    $pdo = new PDO(
        'mysql:host=localhost;dbname=jeux video;charset=utf8',
        'root',
        ''
    );
    $sql = "SELECT * FROM game WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['id' => $_GET["jeux_id"]]);
    $game = $stmt->fetch(PDO::FETCH_ASSOC);
} else {
    echo ("Aucun jeux n'a été trouvé");
}
?>

<form method="post">
    <label for="title">Title</label>
    <input type="text" value="<?php echo($game["title"])?>" id="title" name="title"/>

    <label for="genre">Genre</label>
    <input type="genre" value="<?php echo($game["genre"])?>" id="genre" name="genre"/>

    <label for="plateform">Plateform</label>
    <input type="plateform" value="<?php echo($game["plateform"])?>" id="plateform" name="plateform"/>

    <label for="rating">Rating</label>
    <input type="rating" value="<?php echo($game["rating"])?>" id="rating" name="rating"/>

    <input name="id" hidden value="<?php echo($_GET["jeux_id"])?>">

    <button type="submit"> Modifier le jeu </button>

</form>

<?php

if (isset($_POST["title"]) && isset($_POST["genre"]) && isset($_POST["plateform"]) && isset($_POST["rating"])){
                $sql = "UPDATE game SET title = :title, genre = :genre, plateform= :plateform, rating= :rating WHERE id = :id";
                $stmt = $pdo->prepare($sql);
                $stmt->execute([
                    'id' => $_POST["id"],
                    'title' => $_POST["title"],
                    'genre' => $_POST["genre"],
                    'plateform' => $_POST["plateform"],
                    'rating' => $_POST["rating"]
                ]);
                header("Location: index.php?updated=". $_GET["jeux_id"]);
}
?>





