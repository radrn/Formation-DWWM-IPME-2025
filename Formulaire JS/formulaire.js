//récupérer un formulaire
let form = document.querySelector('#formulaire');
let div = document.querySelector('.content');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    let nameInput = document.querySelector("#name");
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

    let gender = document.querySelector("#man")

    let professionInput = document.querySelector("#profession");
    let professionOptions = document.createElement("p");
    professionOptions.innerHTML = professionInput.value;
    div.append(professionOptions);

    let regionInput = document.querySelector("#region");
    let regionOptions = document.createElement("p");
    regionOptions.innerHTML = regionInput.value;
    div.append(regionOptions);

    let checkboxInputs = document.querySelectorAll(".checkbox:checked");
    let str = '';
    for (let i = 0; i < checkboxInputs.length; i++) {
        str += " " + checkboxInputs[i].value;
    }
    div.append(str);

    let linkInput = document.querySelector("#link");
    let linkPara = document.createElement("p");
    linkPara.innerHTML = linkInput.value;
    div.append(linkPara);
});