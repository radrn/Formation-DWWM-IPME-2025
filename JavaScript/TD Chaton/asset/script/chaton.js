//je récupere la div et je lui ajoute un evenement au click
let force = 10
let life = 0
let chat = document.querySelector('#chat');
chat.addEventListener('click', () => { 
    life += force;
let damage = document.querySelector("#life");
damage.innerHTML = life;
if(life >= 100){
    chat.src = "./asset/images/happycat.gif"
    alert("You did it !!!");
    // setTimeout(() => {
    //     chat.remove();
    // }, 2000
    // )
}
});

//je recupere le lien et je lui change son attribut, je peux lui changer tout ces attributs
// // exemple changer un src dans une image !!
// let lien = document.querySelector('#lien');
// lien.href = "https://facebook.fr";