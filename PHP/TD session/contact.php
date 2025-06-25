<?php

session_start();


if(isset($_SESSION['contact_views'])){
    $_SESSION['contact_views']++;
} else {
    $_SESSION['contact_views'] = 1;
}
