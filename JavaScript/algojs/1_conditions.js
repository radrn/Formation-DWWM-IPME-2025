// Exo 6
// Nous allons simuler les actions d'un bus !
// Quand le bus s'arrête, il doit dire "On s'arrete !";
// Sinon, il ne dit rien de particulier.
// Un bus détermine si il doit s'arreter selon 2 facteurs
// - le nombre de personne qui attendent à l'arrêt de bus => si 1 personne 
// - il regarde aussi si un passager souhaite descendre au prochain arrêt
// Ecrivez un programme qui simule ce comportement !

let quimonte = 2;
let quidescend = false;
if (quimonte > 0 || quidescend) {
    console.log("On s'arrête !");
} else {
    console.log("Le bus avance");
}


// Exo 7
// Selon une température donnée, affichez l'état (Solide, Liquide, Gazeux) de l'eau à cette température
// Exemple: si l'eau est à -15 degrès, le programme doit dire "SOLIDE".

let temperature = -1;
if (temperature < 0) {
    console.log("SOLIDE");
} else if (temperature >= 0 && temperature <= 100) {
    console.log("LIQUIDE");
} else if (temperature > 100 ) {
    console.log("GAZEUX");
}

//AUTRE FACON DE FAIRE plus simple aussi 
// let temperature = 20;
//if (temperature < 0) {
//    console.log('Solide !!');
//} else if (temperature >= 100) {
//    console.log('Gazeux !!');
//} else {
//    console.log('Liquide !');
//}

// Exo 8
// Affichez "PAIR" ou "IMPAIR" selon un nombre donné
let number = 3 
if (number % 2 ==0) {
    console.log("PAIR")
} else {
    console.log("IMPAIR")
}