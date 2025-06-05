//setItem
// localStorage.setItem("first_name", "Radia");
// localStorage.setItem("last_name", "Drine");

// getItem
// let firstName = localStorage.getItem("first_name");
// console.log(firstName);

// supprimer un item
// localStorage.clear("first_name");

//essayer de stocker un tableau en entier dans le localStorage
// let array = ["toto", "tata"];
// console.log(array);

//utiliser JSON.stringify(ce qu'on veut encoder) permet de transformer le tableau en string
// let jsonArray = JSON.stringify(array)
// console.log(jsonArray);
// localStorage.setItem("array", jsonArray);

//décoder du JSON : on récupère l'élément du local pour pouvoir le décoder
// let arrayFromStorage = localStorage.getItem("array");
// on utilise JSON.parse
// let arrayDecoded = JSON.parse(arrayFromStorage);
// console.log(arrayDecoded);

let form = document.querySelector("#form");
let div = document.querySelector(".card");


let animalName = localStorage.getItem("name");
let animalRace = localStorage.getItem("race");
if (animalName !== null && animalRace !== null) {
    div.append(animalName);
    div.append(animalRace);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let nameInput = document.querySelector("#name");
    let nomAnimal = document.createElement("p");
    nomAnimal.innerHTML = nameInput.value;
    nomAnimal.classList.add("animal-name");
    div.append(nomAnimal);

    let raceInput = document.querySelector("#race");
    let raceOptions = document.createElement("p");
    raceOptions.innerHTML = raceInput.value;
    raceOptions.classList.add("animal-race");
    div.append(raceOptions);

    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("race", raceInput.value);

}); 