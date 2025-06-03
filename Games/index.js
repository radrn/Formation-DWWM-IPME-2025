let form = document.querySelector("#game");
let div = document.querySelector(".duel");
let player1Name = "";
let player2Name = "";
player1pv = 200;
player2pv = 200;


const player1Objet = {
    pv : 200,
    name: ''
}

const player2Objet = {
    pv : 200,
    name: ''
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    displayName();
    displayHouse();
    let tour = 1;
    while (player1Objet.pv > 0 && player2Objet.pv > 0) {
       
        let newTour = document.createElement("p");
        newTour.innerHTML = "Tour " + tour;
        div.append(newTour);
        attack(player1Objet, player2Objet);

        if (player2Objet.pv > 0) {
            attack(player2Objet, player1Objet);
        }

        tour ++;
    } 
    if (player1Objet.pv <= 0) {
        died(player1Objet)
    } else if (player2Objet.pv <= 0) {
        died(player2Objet)
    }
})

function attack(attaquant, defenseur){
        let dammage = Math.floor(Math.random() * (15 - 5) ) + 5;
        defenseur.pv -= dammage;

        let history = document.createElement("p");
        history.innerHTML = attaquant.name + " attaque " + defenseur.name + " pour " + dammage + " dégats. " + " Il reste " + defenseur.pv + " PV à " + defenseur.name;
        div.append(history);
}
 
// let dammage = Math.floor(Math.random() * (15 - 5) ) + 5;
        // player2Objet.pv -= dammage;

        // let history = document.createElement("p");
        // history.innerHTML = player1Objet.name + " attaque " + player2Objet.name + " pour " + dammage + " dégats. " + " Il reste " + player2Objet.pv + " PV à " + player2Objet.name;
        // div.append(history);
        
        // dammage = Math.floor(Math.random() * (15 - 5) ) + 5;
        // player1Objet.pv -= dammage;

        // let history2 = document.createElement("p");
        // history2.innerHTML = player2Objet.name + " attaque " + player1Objet.name + " pour " + dammage + " dégats. " + " Il reste " + player1Objet.pv + " PV à " + player1Objet.name;
        // div.append(history2);

function displayName() {
let player1 = document.querySelector("#player1");
let p1Name = document.createElement("p");
p1Name.classList.add("team1");
    p1Name.innerHTML = player1.value;
    player1Objet.name = player1.value;
    div.append(p1Name);
    
let player2 = document.querySelector("#player2");
let p2Name = document.createElement("p");
p2Name.classList.add("team2");
    p2Name.innerHTML = player2.value;
    player2Objet.name = player2.value;
    div.append(p2Name);    
};

function displayHouse(){
let house1 = document.querySelector("#p1house");
let house1Name = document.createElement("p");
house1Name.classList.add("team1");
    house1Name.innerHTML = house1.value;
    div.append(house1Name);

let house2 = document.querySelector("#p2house");
let house2Name = document.createElement("p");
house2Name.classList.add("team2");
    house2Name.innerHTML = house2.value;
    div.append(house2Name); 
};

function died(loser){
let die = document.createElement("p");
        die.innerHTML = loser.name + " est mort !"
        div.append(die);
}