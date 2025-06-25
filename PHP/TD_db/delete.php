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
    
    
    $sql = "DELETE FROM game WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['id' => $_GET["jeux_id"]]);
    header("Location: index.php?deleted=1");
}

