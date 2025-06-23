<?php

if ((isset($_POST["fullName"])) && (isset($_POST["genre"])) && (isset($_POST["languages"])) && (isset($_POST["bio"]))) {   

      echo ("Bonjour " . htmlspecialchars($_POST["fullName"]) . "<br>" . "Vous êtes " . htmlspecialchars($_POST["genre"]) . " et vous aimez coder en : ");
    foreach($_POST["languages"] as $langues){
        echo ($langues . " ");
    }
    
  echo("Voici ce que vous avez écrit à propos de vous : "."<br>" . (htmlspecialchars($_POST["bio"])));
};