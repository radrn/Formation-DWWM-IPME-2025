console.log("n'importe quoi");

let mysuperH1 = document.getElementsByTagName("h1");
console.log(mysuperH1);

let mysuperH1ById = document.getElementById("blop");
console.log(mysuperH1ById);

let mysuperH1ByClassName = document.getElementsByClassName("oui");
console.log(mysuperH1ByClassName);

let para1  = document.querySelector(".test-p");
console.log(para1);

let para2  = document.querySelector("[data-test]");
console.log(para2);

let para3  = document.querySelector("#hello");
console.log(para3);

let para4  = document.querySelectorAll("p");
console.log(para4[3]);

let paraTest = document.querySelector("[data-test]");
paraTest.innerHTML = "Nouveau Hola";

let span = document.querySelector("span");
if (span.innerHTML.length > 2){
    span.remove();
}

let info = document.querySelector("#info");
info.innerHTML = "Bonjour, ceci est un nouveau texte.";

let chapitres = document.querySelectorAll("h2");
for (let i = 0; i< chapitres.length; i++){
    chapitres[i].innerHTML += "- Important";
}
console.log(chapitres);

let brocoli = document.querySelector("#a-supprimer");
brocoli.remove();

// let myps = document.querySelectorAll("p");
// for (let i = 0; i < myps.length; i++){
//     myps[i].remove();
// }

let fruits = document.querySelectorAll("#fruits li");
fruits[0].innerHTML = "fraise";
fruits[1].innerHTML = "kiwi";
console.log(fruits);

let message = document.querySelector("#message");
message.innerHTML = "Bienvenue sur la page !";

let contenu = document.querySelector("#contenu");
contenu.innerHTML = "<h3> nouveau titre </h3> <p>nouveau paragraphe</p>";

let jacques = document.querySelectorAll("li");
jacques[jacques.length -1].remove();
console.log(jacques);

let div = document.querySelector("[data-super-div]");
let paragraphes = div.querySelectorAll("p");
for (let i = 0; i < paragraphes.length; i++) {
    if (paragraphes[i].innerHTML.includes("pokemon")){
        paragraphes[i].remove();
    }
}