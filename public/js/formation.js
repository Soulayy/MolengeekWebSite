import data from './../json/molengeek.json' assert { type: "json" }

let textDeFormation = document.querySelector(".botMid").querySelector("ul")

let formationL = Object.keys(data.formations.formationsLongues)
console.log(formationL);



formationL.forEach(element => {
    let list = document.createElement("li")
    list.appendChild(element)
    textDeFormation.appendChild(list)
});