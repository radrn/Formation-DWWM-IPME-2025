"use strict"
// CONDITIONS
/**
 * Prend un age en paramètre et détermine
 * si la personne est adulte ou non.
 *
 * @param age {number}
 * @returns {boolean}
 */
export function isAdult(age) {
    return age >= 18;
}

/**
 * Détermine si la partie est terminée.
 * Le jeu se termine si le héros,
 * la princesse ou le dragon sont morts.
 *
 * @param heroLife {number}
 * @param princessLife {number}
 * @param dragonLife {number}
 * @returns {boolean}
 */
export function isGameOver(heroLife, princessLife, dragonLife) {
    return heroLife <= 0 || princessLife <= 0 || dragonLife <= 0;
}

// Strings

/**
 * Prend un texte en parametre et le transforme en CRI
 * Majuscules + "!!!" à la fin.
 * Exemple: "Bonjour ça va ?" --> "BONJOUR ÇA VA ?!!!"
 *
 * @param string {string}
 * @returns string
 */
export function hurlement(string) {
    return string.toUpperCase() + "!!!";
}

let testHurlement = "Bonjour ça va ?"; // --> "BONJOUR ÇA VA ?!!!"

/**
 * Prend un texte en paramètre.
 * Si le texte fais plus de 10 caractères, on retourne un extrait de ce texte
 * contenant uniquement les 10 premiers caractères suivi de "...";
 *
 * Par exemple: "Je suis trop long !!!" devient "Je suis tr..."
 *
 * @param string {string}
 * @return {string}
 */
export function extrait(string) {
    if (string.length <= 10) {
        return string;
    }
    return string.slice(0, 10) + "...";
}

let testExtrait = "Je suis un texte beaucoup trop long et je devrais être coupé !" // Résultat: "Je suis un..."

/**
 * Met la première lettre d'un mot en majuscule.
 *
 * @param {string} string La string a traiter
 * @returns string
 */
export function capitalize(string) {
    return string.replace(string[0], string[0].toUpperCase());
}

let testCapitalize = "je suis un test"; // devra devenir "Je suis un test"

/**
 * Met la première lettre d'un mot en minuscule.
 *
 * @param string {string}
 * @return {string}
 */
export function lowerize(string) {
    return string.replace(string[0], string[0].toLowerCase());
}

let testLowerize = "JE SUIS UN TEST"; // devra devenir "jE SUIS UN TEST"

/**
 * Transforme une chaine de caractères en PascalCase
 * (pas d'espace, premières lettres en majuscule)
 * Exemple : Je suis un exemple -> JeSuisUnExemple
 *
 * @param string {string}
 * @return {string}
 */
export function toPascalCase(string) {
    return string
        .toLowerCase()
        .split(' ')
        .map(word => capitalize(word))
        .join('');
}

/**
 * Transforme une chaine de caractères en camelCase
 * Exemple : Je suis un exemple -> jeSuisUnExemple
 *
 * @param string {string}
 * @return {string}
 */
export function toCamelCase(string) {
    return string
        .toLowerCase()
        .split(' ')
        .map((word, i) => i > 0 ? capitalize(word) : word)
        .join('');
}

/**
 * Prend un texte en entrée et doit le traduire
 * en polonais.
 * C'est à dire qu'on ENLEVE toutes les voyelles ^^ !!!
 * Exemple: "J'adore le polonais" -> "J' dr l plns"
 *
 * @param string {string}
 * @return {string}
 */
export function traducteurPolonais(string) {
    return string.replace(/[aeiouy]/gi, "");

    // Version sans regex
    // let versionPolonaise = "";
    // let voyelles = ["a", "e", "i", "o", "u", "y"];
    //
    // for (let char of string) {
    //     if (voyelles.includes(char)) {
    //         versionPolonaise += "";
    //     } else {
    //         versionPolonaise += char;
    //     }
    // }
    // return versionPolonaise;
}

// Numbers
/**
 * Prend un prix et une hausse/baisse (+20%, -20%...)
 * Retourne le nouveau prix après modification
 *
 * Exemple :
 * Si le prix initial est de 10 euros, et l'augmentation de 20%
 *
 * let newPrice = getNewPrice(10, 20);
 * newPrice --> 12euros
 *
 * @param price {number}
 * @param modif {number}
 * @return {number}
 */
export function getNewPrice(price, modif){
    return price * (1 + (modif / 100));
}

/**
 * Permet de diviser 2 nombres.
 * Attention, la division par 0 est interdite !
 * Dans ce cas, on retourne NaN (Not A Number)
 * pour montrer que l'opération a échouée.
 *
 * @param a {number}
 * @param b {number}
 * @returns {number | NaN}
 */
export function divide(a, b) {
    if (a === 0 || b === 0) {
        return NaN;
    }
    return a / b;
}

/**
 * Indique si le nombre donné est pair (true)
 * ou impaire (false).
 * modif
 *
 * @param number {number}
 * @return {boolean}
 */
export function isEven(number) {
    return number % 2 === 0;
}

/**
 * Simule un lancé de dès.
 * Doit retourner au hasard un nombre compris entre
 * 1 et 6 inclus.
 *
 * @returns {number}
 */
export function dice6() {
    return Math.floor(Math.random() * 6 + 1);
}

/**
 * Simule un lancé de dès.
 * Doit pouvoir choisir la taille de notre dés.
 * Par exemple, si on joue à Donjon et Dragon,
 * nous avons besoin de dés de 20 (donne un résultat
 * compris entre 1 et 20)
 *
 * @param faces {number}
 * @returns {number}
 */
export function diceN(faces) {
    return Math.floor(Math.random() * faces + 1);
}

/**
 * Simule X lancés de dés de N faces.
 * Par exemple, si je lance la fonction avec
 * dices(6, 20)
 * Je veux lancer 6 dés à 20 faces.
 *
 * Les résultats devront être retournés sous forme de tableau.
 *
 * @param nb {number}
 * @param faces {number}
 * @return {number[]}
 */
export function dices(nb, faces) {
    const resultats = [];

    for (let i = 0; i < nb; i++) {
        resultats.push(diceN(faces));
    }

    return resultats;
}

/**
 * Simule X lancés de dés de N faces.
 * Par exemple, si je lance la fonction avec
 * dices(6, 20)
 * Je veux lancer 6 dés à 20 faces.
 *
 * Les résultats devront être retournés sous forme de tableau.
 *
 * @param nb {number}
 * @param faces {number}
 * @return {number[]}
 */
export function dicesAlt(nb, faces) {
    return [...Array(nb).keys()].map(() => diceN(faces));
}

// Array
/**
 * Trouve le plus grand nombre parmis une liste.
 * @param numbers {array}
 * @return {number}
 */
export function biggest(numbers) {
    return Math.max(...numbers);
}

/**
 * Prend un tableau de nombres en argument
 * et retourne un tableau contenant les mêmes valeurs
 * auxquelles ont a jouté 1
 *
 * Exemple : [1, 2, 3] => [2, 3, 4]
 *
 * @param numbers {number[]}
 * @returns {array}
 */
export function plusOne(numbers) {
    let nouveauTablo = [];
    for (let n of numbers) {
        nouveauTablo.push(n + 1);
    }
    return nouveauTablo;

    // Ou bien...
    // return numbers.map(n => n + 1);
}

/**
 * Supprime les doublons dans un tableau
 *
 * @param tablo {array}
 * @returns {array}
 */
export function deleteDuplicate(tablo){
    const sansDoublons = [];
    tablo.forEach(el => {
        if (!sansDoublons.includes(el)) {
            sansDoublons.push(el);
        }
    });

    return sansDoublons;

    // ou bien tout simplement... ^^
    // return [...new Set(tablo)];
}

/**
 * Cette fonction doit retourner un paquet de carte neuf.
 * Une carte est une string au format "Valeur-Couleur"
 * Par exemple :
 * le 2 de Coeur est : "2-Coeur"
 * le Roi de Pique est :"Roi-Pique"
 *
 * Liste des couleurs : "Coeur", "Carreau", "Trêfle", "Pique"
 * Liste des valeurs : As, 2, 3, 4, 5, 6, 7, 8, 9, 10, Valet, Dame, Roi
 *
 * @returns {array}
 */
export function generateDeck() {
    const COLORS = ["Coeur", "Carreau", "Trêfle", "Pique"];
    const VALUES = ["As", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Valet", "Dame", "Roi"];

    let deck = [];

    // Pour chaque couleur...
    for (let i = 0; i < COLORS.length; i++) {
        // Et on créé une carte de chaque valeur
        for (let y = 0; y < VALUES.length; y++) {
            // On Ajoute la carte au paquet
            deck.push(VALUES[y] + "-" + COLORS[i]);
        }
    }

    return deck;
}
