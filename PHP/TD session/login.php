<?php
session_start();
$users = [
  ["login" => "alice", "password" => "1234"],
  ["login" => "bob", "password" => "azerty"],
  ["login" => "charlie", "password" => "mdp"],
  ["login" => "david", "password" => "pass123"],
  ["login" => "eve", "password" => "12345"],
  ["login" => "frank", "password" => "secret"],
  ["login" => "grace", "password" => "abc123"],
  ["login" => "heidi", "password" => "pwdpwd"],
  ["login" => "ivan", "password" => "0000"],
  ["login" => "judy", "password" => "monkey"],
];

?>

<form method="post">
    <label for="login">LogIn</label>
    <input type="text" id="login" name="login">

    <label for="password">Password</label>
    <input type="text" id="password" name="password">

    <button type="submit"> Se connecter </button>

</form>


<?php

$passwordOk = false;
$loginOk = false;

if(isset($_POST['login']) && isset($_POST['password'])){
    foreach($users as $user){
        if($user["login"] == $_POST["login"]){
            $loginOk = true;
            if ($user["password"] == $_POST["password"]){
                $passwordOk = true;
                $_SESSION['user'] = $user;
                header("Location: index.php");
                exit();
        }
        }
    } if(!$loginOk){
            echo("Votre login est incorrect");
        } else if(!$passwordOk){
            echo("Votre password est incorrect");
        }
}