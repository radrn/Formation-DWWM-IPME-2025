//récupérer un formulaire
let form = document.querySelector('#formulaire');
let div = document.querySelector('.content');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    let nameInput = document.querySelector("#name");
    console.log(nameInput.value);
    let nomParagraphe = document.createElement("p");
    nomParagraphe.innerHTML = nameInput.value;
    div.append(nomParagraphe);
    
    let firstNameInput = document.querySelector("#firstName");
    let prenomParagraphe = document.createElement("p");
    prenomParagraphe.innerHTML = firstNameInput.value;
    div.append(prenomParagraphe);

    let ageInput = document.querySelector("#age");
    let ageParagraphe = document.createElement("p");
    ageParagraphe.innerHTML = ageInput.value + " ans";
    div.append(ageParagraphe);

    let professionInput = document.querySelector("#profession");
    let professionOptions = document.createElement("p");
    professionOptions.innerHTML = professionInput.value;
    div.append(professionOptions);

    
});