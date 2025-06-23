<form action="traitement.php" method="post"> 
    <label for="test-input"> Test Input </label>
    <input type="text" id="test-input" name="test-input">

    <div>
        <label for="checkbox_1">Checkbox 1 </label>
        <input id="checkbox-1" type="checkbox" value="1" name="checkbox[]">

         <label for="checkbox_2">Checkbox 2 </label>
        <input id="checkbox-2" type="checkbox" value="2" name="checkbox[]" >

         <label for="checkbox_3">Checkbox 3 </label>
        <input id="checkbox-3" type="checkbox" value="3" name="checkbox[]" >

</div>

    <button type="submit"> Valider </buttton>
</form>
<!-- $_GET et $_POST permettent de recuperer les données d'un forms $_POST + secure pour données sensibles(authentification...)
 $_GET pour des champs de recherche -->
<?php

var_dump($_POST);