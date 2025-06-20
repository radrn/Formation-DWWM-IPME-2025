
<ul> 
<?php
var_dump($_GET);

if (isset($_GET["item"])) {
    foreach($_GET["item"] as $values) {
      echo  "<li>" . $values . "</li>"; 
    };
}
?>
</ul>