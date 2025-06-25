<?php

session_start();

// var_dump($_SESSION);


if(isset($_SESSION['test_views'])){
    $_SESSION['test_views']++;
} else {
    $_SESSION['test_views'] = 1;
}
