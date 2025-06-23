<form action="traitement-inscription.php" method="post">
    <label for="fullName"> Nom et Prénom </label>
    <input type="text" id="fullName" name="fullName">
    <br>
    <label for="femme"> Femme </label>
    <input type="radio" id="Femme" name="genre"> 
    <br>
    <label for="homme"> Homme </label>
    <input type="radio" id="Homme" name="genre"> 
    <br>
    <label for="autre"> Autre </label>
    <input type="radio" id="Autre" name="genre">
    <br>
    <label for="php">PHP </label>
    <input id="php" type="checkbox" value="php" name="languages[]">
    <br>
    <label for="js"> JavaScript </label>
    <input id="js" type="checkbox" value="js" name="languages[]">
    <br>
    <label for="python">Python </label>
    <input id="python" type="checkbox" value="python" name="languages[]">
    <br>
    <label for="c#"> C# </label>
    <input id="c#" type="checkbox" value="c#" name="languages[]">
    <br>
    <label for="bio"> Biographie </label>
    <input id="bio" type="textarea" name="bio"> 
    <br>
    <button type="submit"> Valider </button>

</form>


