let search = document.querySelector("#search");
let random = document.querySelector("#random");
let form = document.querySelector("form");
let divCard = document.querySelector("#divCard");


let userInput = document.querySelector('#input');
 search.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userInput)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            for (let index = 0; index < data.length; index++) {
                
            }
        });
 });


