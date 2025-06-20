<?php

if ((isset($_GET["op"])) and (isset($_GET["a"])) and (isset($_GET["b"]))) {
    if ($_GET["op"] == "add") {
        echo $_GET["a"] + $_GET["b"];
    }
 elseif ($_GET["op"] == "sub") {
    echo $_GET["a"] - $_GET["b"];
} elseif ($_GET["op"] == "mul") {
    echo $_GET["a"] * $_GET["b"];
} elseif (($_GET["op"] == "div") and ($_GET["b"] != "0")) {
    echo $_GET["a"] / $_GET["b"];
} else {
    echo "Opération inconnue try again";
}
};