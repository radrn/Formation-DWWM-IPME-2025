<?php

$movies = json_decode(file_get_contents("https://ghibliapi.vercel.app/films"), true);

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
           <?php foreach ($movies as $keys => $item) :?> 
                    <div class=col-md-4>       
                        <div class="card">
                            <img src=<?php echo $item['image']; ?> class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title"><?php echo $item['title']; ?></h5>
                                <p class="card-text"><?php echo substr($item['description'], 0, 300); ?></p>
                                <a href=<?php echo "item.php?movie_id=". $item['id'];?>>Voir le film</a>
                            </div>
                        </div>
                    </div>
            <?php endforeach ;?>     
        </div>
    </div>
</body>
</html>
