// let firstname = "Charlotte"; // Texte (string)
// let age = 25; //nombre mettre entre "" quand c'est des numéros de tel, adresse, code postal...
// let isAdult = false; //oui ou non, vrai ou faux
// // Cette ligne permet d'afficher quelque chose


// Exo 1 !!
// CREER 3 variables (nom, prenom, age)

let lastName = "Dupond";
let firstName ="Jacques";
let age = 43;
// AFFICHER le contenu de ces trois variables
console.log(lastName, firstName, age);

// Exo 2 !!
// AFFICHER les 3 informations ci-dessus mais de façon plus élégante
// Par exemple ("Je m'appelle Jean Michel et j'ai 30 ans");
// Aide: on peut "additionner" du texte !
console.log("Je m'appelle " + lastName + " " + firstName + " et j'ai " + age +" ans");


// Exo 3 !!
// Créer une variable a qui contient "Alice"
let a = "Alice";
// Créer une variable b qui contient "Bob"
let b = "Bob"; //dans le ""="" ça va dans ce sens <-- donc b écrase a 
let c = a;
console.log(a, b);
// Faites en sorte d'inverser le contenu des 2 variables
// et prouvez le avec des AFFICHAGES
// a doit contenir Bob
// b doit contenir Alice
a = b;
b = c;
console.log(a, b);