<?php

$movies = json_decode(file_get_contents("https://ghibliapi.vercel.app/films/" . $_GET["movie_id"]), true);

var_dump($movies);

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
            <div class=col-md-6>        
                <?php if (isset($_GET["movie_id"])) :?>
                    <img src=<?php echo $movies['image']; ?> class="card-img-top" alt="...">    
                <?php endif ;?>
            </div>    
            <div class=col-md-6>
                <?php if (isset($_GET["movie_id"])) :?>
                    <img src=<?php echo $movies['movie_banner']; ?> class="card-img-top" alt="...">
                    <h1><?php echo $movies['title'];?></h1>
                    <p><?php echo "<strong>"."Date de sortie : "."</strong>".$movies['release_date'];?></p>
                    <p><?php echo "<strong>"."Rating : "."</strong>".  $movies['rt_score'];?></p>
                    <p><?php echo "<strong>"."Description :"."</strong>" ."<br>" . $movies['description'];?></p>
                <?php endif ;?>
            </div>    
        </div>
    </div>    
</body>
</html>

