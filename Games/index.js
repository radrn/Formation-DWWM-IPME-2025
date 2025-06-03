let form = document.querySelector("#game");
let div = document.querySelector(".duel");
// let player1Name = "";
// let player2Name = "";
// player1pv = 200;
// player2pv = 200;


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
    while (player1pv > 0 && player2pv > 0) {
        let dammage = Math.floor(Math.random() * (15 - 5) ) + 5;
        player2Objet.pv -= dammage;
       
        let history = document.createElement("p");
        history.innerHTML = player1Objet.name + " attaque " + player2Objet.name + " pour " + dammage + " dégats. " + " Il reste " + player2Objet.pv + " PV à " + player2Name;
        div.append(history);
        
        dammage = Math.floor(Math.random() * (15 - 5) ) + 5;
        player1Objet.pv -= dammage;

        let history2 = document.createElement("p");
        history2.innerHTML = player2Name + " attaque " + player1Name + " pour " + dammage + " dégats. " + " Il reste " + player1pv + " PV à " + player1Name;
        div.append(history2);
    } 
    
})




function displayName() {
let player1 = document.querySelector("#player1");
let p1Name = document.createElement("p");
    p1Name.innerHTML = player1.value;
    div.append(p1Name);
    player1Name = player1.value
    player1Objet.name = player1.value;
    
let player2 = document.querySelector("#player2");
let p2Name = document.createElement("p");
    p2Name.innerHTML = player2.value;
    div.append(p2Name);    
    player2Name = player2.value
    player2Objet.name = player2.value;
};

function displayHouse(){
let house1 = document.querySelector("#p1house");
let house1Name = document.createElement("p");
    house1Name.innerHTML = house1.value;
    div.append(house1Name);

let house2 = document.querySelector("#p2house");
let house2Name = document.createElement("p");
    house2Name.innerHTML = house2.value;
    div.append(house2Name); 
};


//tour = 1

//ecrire dans l'html
//tour ++