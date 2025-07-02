<?php

if(isset($_GET["jeux_id"])){
  
    require 'pdo.php';
    
    $sql = "SELECT * FROM game WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['id' => $_GET["jeux_id"]]);
    $game = $stmt->fetch(PDO::FETCH_ASSOC);
    echo "<table border='1'>";
    echo "<tr><th>Title</th><th>Genre</th><th>Plateform</th><th>Rating</th></tr>";
    echo "<tr>";
            echo "<td>" . $game["title"] . "</td>";
            echo "<td>" . $game["genre"] . "</td>";
            echo "<td>" . $game["plateform"] . "</td>";
            echo "<td>" . $game["rating"] . "</td>";
            echo "</tr>";
} else {
    echo ("Aucun jeux n'a été trouvé");
}
?>

