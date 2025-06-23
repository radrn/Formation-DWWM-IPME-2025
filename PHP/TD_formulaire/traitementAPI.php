<?php

// lien api : https://restcountries.com/v3.1/all

if (isset($_POST["pays"]) && $_POST["pays"] !== "") {
    $url= "https://restcountries.com/v3.1/name/".$_POST["pays"]."?fullText=true";


   $data = json_decode(file_get_contents($url), true);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet"
</head>
<body>
    <div class="container">
        <div class="card">
  <img src=<?php echo ($data[0]["flags"]["png"]);?> class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"><?php echo("Nom officiel : " . $data[0]["name"]["official"]); ?></h5>
    <p class="card-text"><?php echo("Capitale : " . $data[0]["capital"][0]);?></p>
    <p class="card-text"><?php echo("Population : " . $data[0]["population"]);;?></p>
    <p class="card-text"><?php echo("Region : " . $data[0]["region"]);?></p>
  </div>
</div>
    </div>
</body>
</html>