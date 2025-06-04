let form = document.querySelector(".form");
let containerCard = document.querySelector("#container");


let collection  = localStorage.getItem("collection");

if (collection === null) {

    let newCollection = document.createElement("p");
    newCollection.innerHTML = "Aucune carte dans la collection";
    div.append(newCollection);
    collection = [];
} else {
    collection = JSON.parse(collection);
}

// on appel la fonction pour affichier les cards déjà existantes
 displayAllCard();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    containerCard.innerHTML = ""
//  on construit l'objet card 
    const card = {
        name : "",
        type : "",
        power : "",
    }

    let cardInput = document.querySelector("#name");   
    card.name = cardInput.value;  
    let cardType = document.querySelector("#type");  
    card.type = cardType.value;  
     let cardPower = document.querySelector("#pouvoir");
    card.power = cardPower.value;
   
// push la card dans la collecton 
    collection.push(card);

//  on stock la collection (tableau) dans le local storage
    localStorage.setItem("collection", JSON.stringify(collection));

// on appelle la fonction pour créer une nouvelle card à chaque submit 
displayAllCard();    

})

// la fonction permet d'ajouter chaque élément de la collection dans une div pour créer la card

function displayAllCard() {
    for (let i = 0; i < collection.length; i++) {

        let div = document.createElement("div");
        div.classList.add("new-card");
      
        let cardName = document.createElement("p");
        cardName.innerHTML = collection[i].name;
        div.append(cardName);
        
        
        let typeOptions = document.createElement("p");
        typeOptions.innerHTML = collection[i].type;
        div.append(typeOptions);

        
        let powerName = document.createElement("p");
        powerName.innerHTML = collection[i].power;
        div.append(powerName);  

        containerCard.append(div);
    }
}