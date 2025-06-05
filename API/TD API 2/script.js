let search = document.querySelector("#search");
let random = document.querySelector("#random");
let form = document.querySelector("form");
let divCards = document.querySelector("#divCards");
// console.log(divCards);

let userInput = document.querySelector('#input');
 search.addEventListener("click", (e) => {
    console.log(userInput);
    e.preventDefault();
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userInput.value)
        .then((response) => {
            // console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
            for (let i = 0; i < data.drinks.length; i++) {
                // console.log(data.drinks[i].strDrink);
                
                let card = document.createElement('div');
                card.classList.add('card');
                
                let thumbnail = document.createElement('img');
                thumbnail.src = data.drinks[i].strDrinkThumb;
                card.append(thumbnail);

                let drinkName = document.createElement('h2');
                drinkName.innerHTML = data.drinks[i].strDrink;
                card.append(drinkName);

                let ingredientArray = [];
                let drink = data.drinks[i];
                for (let i = 1; i <= 15 ;  i++) {
                    let ingredientString = 'strIngredient' + i;
                    if(drink[ingredientString] !== null){
                        ingredientArray.push(drink[ingredientString]);
                    }
                }

                let ulIngredients = document.createElement('ul');
                for (let i = 1; i <= 15 ;  i++) {
                    if (ingredientArray[i] !== undefined) {
                        let ingredient = document.createElement('li');
                        ingredient.innerHTML = ingredientArray[i];
                        ulIngredients.append(ingredient);
                    }
                }
                card.append(ulIngredients);

                let instructions = document.createElement('p');
                instructions.innerHTML = data.drinks[i].strInstructions;
                card.append(instructions);
            
                divCards.append(card);
            }
         });
 });
