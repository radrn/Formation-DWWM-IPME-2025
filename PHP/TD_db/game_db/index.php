<?php
require 'pdo.php';

$sql = "SELECT * FROM game";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$game = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Charts</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>
<?php

    echo "<table border='1'>";
    echo "<tr><th>Title</th><th>Genre</th><th>Plateform</th><th>Rating</th><th>Links</th></tr>";

        foreach ($game as $jeux) {
            echo "<tr>";
            echo "<td>" . $jeux["title"] . "</td>";
            echo "<td>" . $jeux["genre"] . "</td>";
            echo "<td>" . $jeux["plateform"] . "</td>";
            echo "<td>" . $jeux["rating"] . "</td>";
            echo "<td>" .  "<a href=item.php?jeux_id=". $jeux['id'] . ">" . "Voir le jeux</a>" . " ". "<a href=edit.php?jeux_id=". $jeux['id'] . ">" . "Modifier le jeux</a>" . " ". "<a href=delete.php?jeux_id=". $jeux['id'] . ">" . "Supprimer le jeux</a>". "</td>";
            echo "</tr>";
        }

    echo "</table>";
?>

<?php 
    if (isset($_GET["success"])): ?>
        <script>
            alert("✅ Jeu ajouté avec succès.");
        </script>
    <?php endif; ?>

<?php 
    if (isset($_GET["updated"])): ?>
        <script>
            alert("✏️ Jeu modifié avec succès.");
        </script>
    <?php endif; ?>

    <?php 
    if (isset($_GET["deleted"])): ?>
        <script>
            alert("🗑️ Jeu supprimé avec succès.");
        </script>
    <?php endif; ?>

</body>
</html>