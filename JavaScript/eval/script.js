// récupération des éléments necessaires
let form = document.querySelector("#quote-form");
let container = document.querySelector(".container")
let quoteList = document.querySelector("#quote-list");
let authorInput = document.querySelector("#quote-author");
let quoteInput = document.querySelector("#quote-text");
let typeInput = document.querySelector("#quote-type");

//  création d'un tableau vide pour pouvoir y stocker les objets card
let quotes = localStorage.getItem("citation");
if (quotes === null) {
    quotes = [];
} else {
    quotes = JSON.parse(quotes);
}

//  création d'un événement lorsqu'on submit notre form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    //  on construit l'objet card
    const card = {
        author: "",
        quote: "",
        type: "",
    };
    
    card.author = authorInput.value;
    card.quote = quoteInput.value;
    card.type = typeInput.value;
    
    // push la card dans la collecton de quotes
    quotes.push(card);
    
    //  on stock la collection (tableau) dans le local storage
    localStorage.setItem("citations", JSON.stringify(quotes));

    // validation des champs
    if ((authorInput.value === "" || quoteInput.value === "") && typeInput.value !== "") {
        Swal.fire({
            title: "Tu as oublié une info !",
            text: "Aucune citation ne peut être affichée",
            icon: "error",
        });
    } else {
        // on appelle la fonction pour créer une nouvelle card à chaque submit
        creatCard();
    }
});

// fonction permettant de créer les éléments de la carte
function creatCard() {
    let quoteCard = document.createElement("div");
    quoteCard.classList.add("card");

    let authorPara = document.createElement("h3");
    authorPara.innerHTML = authorInput.value;
    quoteCard.append(authorPara);

    let quotePara = document.createElement("p");
    quotePara.innerHTML = quoteInput.value;
    quoteCard.append(quotePara);

    let typeOptions = document.createElement("span");
    typeOptions.innerHTML = typeInput.value;
    quoteCard.append(typeOptions);

    // création d'un bouton dans la carte
    let resetBtn = document.createElement("button");
    resetBtn.innerHTML = "Supprimer";
    resetBtn.classList.add("delete");
    quoteCard.append(resetBtn);

    // création d'un événement au click pour supprimer la carte
    resetBtn.addEventListener("click", (e) => {
        quoteCard.remove();
    });

    // on affiche tout dans la div qui nous sert de liste de citation
    quoteList.append(quoteCard);
}
