<?php

$characters = json_decode(file_get_contents("https://hp-api.onrender.com/api/characters"), true);
// var_dump($characters);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="row g-3">
            <?php foreach ($characters as $personnage) :?> 
                 <?php if ($personnage["image"] != '') :?>
                    <div class=col-md-4>       
                        <div class="card">
                            <img src=<?php echo $personnage['image']; ?> class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title"><?php echo $personnage['name']; ?></h5>
                                <p class="card-text"><?php echo $personnage['house']; ?></p>
                                <p class="card-text"><?php echo $personnage['dateOfBirth']; ?></p>
                            </div>
                        </div>
                    </div>
                <?php endif ;?>
            <?php endforeach ;?>    
        </div>            
    </div>   
</body>
</html>