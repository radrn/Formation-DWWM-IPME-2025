<?php

session_start();


if(isset($_SESSION['random_views'])){
    $_SESSION['random_views']++;
} else {
    $_SESSION['random_views'] = 1;
}
