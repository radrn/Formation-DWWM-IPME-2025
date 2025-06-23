<form action="traitementCouleur.php" method="post">
     <label for="prenom"> Prénom </label>
     <input type="text" id="prenom" name="prenom">


    <select name="couleur">
    <option value="white">Blanc</option>
    <option value="lightblue">Bleu clair</option>
    <option value="lightgreen">Vert clair</option>
    <option value="lightpink">Rose clair</option>
    <option value="beige">Beige</option>
  </select>

  <button type="submit">Valider</button>
</form>

<?php
if (isset($_POST["prenom"]) && $_POST["couleur"]) {
    echo ("Bonjour ".htmlspecialchars($_POST["prenom"]) . "!" . "<br>" . " Ta couleur préférée et : " . htmlspecialchars($_POST["couleur"]));
}