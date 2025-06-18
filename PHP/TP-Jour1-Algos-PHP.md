# TP Jour 1 – Algorithmes en PHP 🧠

## Objectif

Pratiquer les bases du langage PHP tout en développant sa logique algorithmique.  
Tous les exercices doivent être réalisés dans un fichier `.php`, lancé depuis un navigateur ou en ligne de commande.

---

## Structure des fichiers

- `exos/` : dossier contenant un fichier par exercice (ex : `exo1.php`, `exo2.php`, ...)
- Chaque fichier contient un seul exercice, avec des `echo` pour afficher les résultats.
- pour y accéder donc {votre_serveur}/exo/exo1.php...

---

## Contraintes techniques

- Utiliser PHP pur (pas de HTML au début)
- Aucune fonction ou classe personnalisée pour les 5 premiers exercices
- Toujours afficher clairement le résultat avec `echo`

---

## Conseils

- Tester chaque exo indépendamment
- Bien commenter son code
- Utiliser `var_dump()` pour déboguer si besoin

---

## Exercice 1 : Afficher un message

Écris un script PHP qui affiche le message suivant à l'écran :

`Bonjour, PHP !`

Cet exercice permet de découvrir la syntaxe de base et l'utilisation de la fonction `echo`.

💡 **Fonction utile** : `echo`

---

## Exercice 2 : Variables et opérations

Déclare deux variables `$a = 7;` et `$b = 3;`. Calcule et affiche :
- La somme
- La différence
- Le produit
- Le quotient

💡 **Fonctions utiles** : `echo`, opérateurs `+`, `-`, `*`, `/`

---

## Exercice 3 : Conditions simples

Déclare une variable `$age = 17;`. Ensuite, affiche :
- "Tu es mineur" si l'âge est strictement inférieur à 18
- "Tu es majeur" sinon

💡 **Fonctions utiles** : `if`, `else`, `echo`

---

## Exercice 4 : Pair ou impair

Déclare une variable `$nombre = 8;`.
Affiche si ce nombre est pair ou impair.
Utilise l'opérateur modulo `%` pour savoir s’il reste un reste à la division par 2.

💡 **Fonctions utiles** : `%`, `if`, `echo`

---

## Exercice 5 : Boucle `for`

Affiche les nombres de 1 à 10 chacun sur une ligne en utilisant une boucle `for`.

💡 **Structure utile** : boucle `for`, `echo`

---

## Exercice 6 : Boucle `while` et somme

Déclare une variable `$n = 5;`. Calcule la somme des entiers de 1 à `$n`.
Exemple : si `$n = 5`, alors affiche `15` (1+2+3+4+5).

💡 **Fonctions utiles** : boucle `while`, variable d’accumulation, `echo`

---

## Exercice 7 : Table de multiplication

Déclare une variable `$nombre = 3;`.
Affiche sa table de multiplication de 1 à 10 (3x1=3, ..., 3x10=30).

💡 **Fonctions utiles** : boucle `for`, multiplication `*`, `echo`

---

## Exercice 8 : Trouver le plus grand

Déclare trois variables : `$a = 14;`, `$b = 22;`, `$c = 6;`.
Affiche le plus grand des trois.

💡 **Fonctions utiles** : `if`, `elseif`, `else`.

---

## Exercice 9 : Compter les voyelles

Déclare une variable `$phrase = 'Bonjour tout le monde';`.
Compte et affiche le nombre de voyelles (a, e, i, o, u, y).

💡 **Fonctions utiles** : `strtolower()`, `str_split()`, `in_array()`, boucle `foreach`

---

## Exercice 10 : Mot palindrome

Déclare une variable `$mot = 'radar';`. Vérifie si ce mot est un palindrome (se lit dans les deux sens).
Affiche un message selon le résultat.


💡 **Fonctions utiles** : `strtolower()`, `explode()`, comparaison avec `==`
---


## Exercice 11 : Factorielle

Déclare une variable `$n = 5;` (un entier positif). Calcule et affiche la factorielle de `$n` (ex: 5! = 120).

💡 La factorielle se calcule en multipliant tous les entiers de 1 à n.

💡 **Fonctions utiles** : boucle `for`, opérateur `*`, variable d'accumulation `$result`

---

## Exercice 12 : Compter les multiples d’un nombre

Déclare deux variables dans ton code :
```php
$limite = 50;
$multipleDe = 7;
```

Écris un script qui **compte combien de nombres entre 1 et `$limite`** sont des **multiples** de `$multipleDe`.  
Un multiple, c’est un nombre divisible sans reste.

👉 Exemple avec les valeurs ci-dessus :
- Les multiples de 7 entre 1 et 50 sont : 7, 14, 21, 28, 35, 42, 49
- Il y en a **7**

🎯 Ton script doit afficher :
```
Il y a 7 multiples de 7 entre 1 et 50.
```

---

💡 **Concepts utiles** :
- Une boucle `for` de 1 à `$limite`
- L’opérateur modulo `%` pour tester si un nombre est divisible
- Une variable compteur `$total` pour compter les cas où le modulo vaut `0`

---

## Exercice 13 : Doubler les éléments d’un tableau

Déclare le tableau suivant :
```php
$nombres = [1, 3, 5, 7, 9];
```

Crée un **nouveau tableau** appelé `$doubles` qui contient les **valeurs doublées** de chaque nombre du tableau `$nombres`.

👉 Exemple :  
Le tableau `$doubles` doit contenir `[2, 6, 10, 14, 18]`

📤 Affiche le résultat avec :
```php
print_r($doubles);
```

---

💡 **Concepts utiles** :
- Boucle `foreach` ou `for`
- Création d’un tableau vide : `$doubles = [];`
- Ajouter un élément dans un tableau : `$doubles[] = $valeur * 2;`

---

## Exercice 14 : Recherche dans un tableau

Déclare un tableau `$nombres = [10, 42, 5, 8, 42, 19];` et une variable `$recherche = 42;`.
Affiche la ou les positions de ce nombre dans le tableau ou indique qu'il n'est pas présent.

💡 **Fonctions utiles** : `in_array()`, `array_keys()`, `array_search()`

---

## Exercice 15 : Trouver le plus petit nombre dans un tableau

Déclare un tableau `$valeurs` contenant les nombres suivants :
```php
$valeurs = [8, 3, 5, 1, 9];
```

Écris un script qui **trouve et affiche le plus petit nombre** dans ce tableau, sans utiliser de fonctions PHP comme `min()`.

---

💡 **Concepts utiles** :
- Boucle `foreach` ou `for` pour parcourir les éléments du tableau
- Variable pour stocker temporairement la plus petite valeur trouvée
- Comparaison avec chaque élément pour mettre à jour cette variable

---

🎯 Exemple de résultat attendu :
```
Le plus petit nombre est : 1
```

---

## Exercice 16 : Jeu du nombre mystère automatisé avec tirages aléatoires

Déclare un tableau `$mysteres` contenant plusieurs nombres mystères, par exemple :
```php
$mysteres = [38, 72, 15];
```

Pour chaque nombre mystère dans `$mysteres`, écris un script qui simule des propositions aléatoires entre 1 et 100 (avec `rand(1, 100)`) jusqu’à trouver la bonne valeur.

Pour chaque nombre mystère, compte et affiche le nombre d’essais nécessaires pour deviner correctement.

---

💡 **Concepts utiles** :
- Boucle `foreach` pour parcourir les nombres mystères
- Boucle `while` pour répéter les essais aléatoires
- Fonction `rand(1, 100)` pour générer un nombre aléatoire
- Compteur d’essais
- Conditions `if` pour vérifier la proposition

---

🎯 Exemple de résultat attendu (les nombres d’essais varient à chaque exécution) :
```
Nombre mystère 38 trouvé en 12 essais  
Nombre mystère 72 trouvé en 8 essais  
Nombre mystère 15 trouvé en 25 essais  
```

---

## Exercice 17 : Deviner une lettre dans un mot

Déclare une chaîne `$mot = 'ordinateur';` et une lettre `$lettre = 'r';`.
Affiche les positions où la lettre apparaît dans le mot ou un message si elle est absente.

💡 **Fonctions utiles** : `strlen()`, `substr()`, boucle `for`, `strtolower()`

---

## Exercice 18 : Jeu de dés (simulation)

Simule deux dés avec `$de1 = rand(1, 6);` et `$de2 = rand(1, 6);`.
Affiche les deux résultats et leur somme.
Si la somme vaut 7 ou 11, affiche "Gagné !", sinon "Perdu".

💡 **Fonctions utiles** : `rand()`, `echo`, `if`

---

## Exercice 19 : Calculs successifs avec tableau d’opérations

Déclare deux nombres `$a = 12;` et `$b = 4;` et un tableau `$operations` contenant plusieurs opérations, par exemple :
```php
$operations = ['+', '-', '*', '/'];
```

Écris un script qui parcourt le tableau `$operations` et effectue le calcul correspondant à chaque opération entre `$a` et `$b`.  
Affiche à chaque fois l’opération et le résultat, par exemple :
```
12 + 4 = 16  
12 - 4 = 8  
12 * 4 = 48  
12 / 4 = 3
```

---

💡 **Concepts utiles** :
- Boucle `foreach`
- `switch` ou `if` pour gérer les opérations
- Opérateurs arithmétiques `+`, `-`, `*`, `/`
- Attention à la division par zéro (ici `$b` est non nul, mais c’est un bon point à mentionner)

---

## Exercice 20 : Morpion en console (grille fixe)

Crée une grille 3x3 sous forme de tableau :
`$grille = [['X','O','X'],[' ','X',' '],['O',' ','O']];`
````
// Exemple de grille 3x3
$grille = [
    ['X', 'O', 'X'],
    [' ', 'X', ' '],
    ['O', 'O', 'O']
];
````
Affiche la grille, puis vérifie s’il y a un gagnant (même symbole dans une ligne, colonne ou diagonale).

💡 **Concepts utiles** : tableaux multidimensionnels, boucles, conditions, logique de jeu

---


Bonne chance ! 🚀
