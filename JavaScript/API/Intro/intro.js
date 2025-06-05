let body = document.querySelector("body");
fetch ("https://api.adviceslip.com/advice").then ((reponse) => { // demande requete API (then = "alors" pour faire une action)
return reponse.json();
}) .then((data) => {
    console.log(data);
    //data.slip.advice
});

let para = document.createElement("tagName");
para.innerHTML = data.slip.advice;
console.log(para);