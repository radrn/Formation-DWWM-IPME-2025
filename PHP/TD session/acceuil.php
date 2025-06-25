<?php

session_start();

// $_SESSION['home_views'] = 0;
// $_SESSION['contact_views'] = 0;
// $_SESSION['test_views'] = 0;
// $_SESSION['random_views'] = 0;

if(isset($_SESSION['home_views'])){
    $_SESSION['home_views']++;
} else {
    $_SESSION['home_views'] = 1;
    $_SESSION['contact_views'] = 0;
    $_SESSION['test_views'] = 0;
    $_SESSION['random_views'] = 0;
}

echo ("La page acceuil a été vu " . $_SESSION['home_views'] . " fois." . "<br>");
echo ("La page contact a été vu " . $_SESSION['contact_views'] . " fois." . "<br>");
echo ("La page test a été vu " . $_SESSION['test_views'] . " fois." . "<br>");
echo ("La page random a été vu " . $_SESSION['random_views'] . " fois." . "<br>");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="reset.php">Reinitialiser la session</a>
</body>
</html>


