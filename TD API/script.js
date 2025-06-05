
let body = document.querySelector('body');
let button = document.querySelector('button');
let card = document.querySelector('#card');

button.addEventListener('click', (e) =>{
    e.preventDefault();
    card.innerHTML = "";
fetch('https://kaamelott.xyz/api/v1/quote/random').then((response) => {
return response.json();
}).then((data) => {

    let character = document.createElement('p');
    character.innerHTML = data.characts;
    card.append(character);
    
    let quote = document.createElement('p');
    quote.innerHTML = data.content;
    card.append(quote);
})
})