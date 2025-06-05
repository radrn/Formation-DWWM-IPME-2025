let search = document.querySelector("#search");
let random = document.querySelector("#random");
let form = document.querySelector("form");
let divCards = document.querySelector("#divCards");
// console.log(divCards);

let userInput = document.querySelector("#input");
form.addEventListener("submit", (e) => {
    console.log(userInput);
    e.preventDefault();
    divCards.innerHTML = "";
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userInput.value)
        .then((response) => {
            // console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
            for (let i = 0; i < data.drinks.length; i++) {
                creatDrink(data.drinks[i]);
            }
        });
});

random.addEventListener("click", (e) => {
    e.preventDefault();
    divCards.innerHTML = "";
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => {
            // console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
            for (let i = 0; i < data.drinks.length; i++) {
                creatDrink(data.drinks[i]);
            }
        });
})

function creatDrink(drink) {
    let card = document.createElement("div");
    card.classList.add("card");

    let thumbnail = document.createElement("img");
    thumbnail.src = drink.strDrinkThumb;
    card.append(thumbnail);

    let drinkName = document.createElement("h2");
    drinkName.innerHTML = drink.strDrink;
    card.append(drinkName);

    let ingredientArray = [];
    for (let i = 1; i <= 15; i++) {
        let ingredientString = "strIngredient" + i;
        if (drink[ingredientString] !== null) {
            ingredientArray.push(drink[ingredientString]);
        }
    }

    let ulIngredients = document.createElement("ul");
    for (let i = 1; i <= 15; i++) {
        if (ingredientArray[i] !== undefined) {
            let ingredient = document.createElement("li");
            ingredient.innerHTML = ingredientArray[i];
            ulIngredients.append(ingredient);
        }
    }
    card.append(ulIngredients);

    let instructions = document.createElement("p");
    instructions.innerHTML = drink.strInstructions;
    card.append(instructions);

    divCards.append(card);
}
