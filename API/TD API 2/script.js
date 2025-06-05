let search = document.querySelector('#search');
let random = document.querySelector('#random');
let form = document.querySelector('form');
let divCard = document.querySelector('#divCard');

search.addEventListener('submit', (e) =>{
    e.preventDefault();
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito').then((response) => {
    return response.json();
    console.log(response);
})
});