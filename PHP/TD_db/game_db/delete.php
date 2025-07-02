<?php
if(isset($_GET["jeux_id"])){
   require 'pdo.php';
   
    $sql = "SELECT * FROM game WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['id' => $_GET["jeux_id"]]);
    $game = $stmt->fetch(PDO::FETCH_ASSOC);
    
    
    $sql = "DELETE FROM game WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['id' => $_GET["jeux_id"]]);
    header("Location: index.php?deleted=1");
} else {
    echo ("Aucun jeux n'a été trouvé");
};
?>

