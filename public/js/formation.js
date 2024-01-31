import data from './../json/molengeek.json' assert { type: "json" };

let textDeFormation = document.querySelectorAll(".botMid")[0].querySelectorAll("ul")[0]

let formationL = Object.keys(data.formations.formationsLongues)

let formationC = Object.values(data.formations.formationsCourtes)
let selectionC = formationC.slice(0, 6)
let selectionCFinal = Array.from(selectionC)




let btnL = document.querySelectorAll("button")[1]
let btnC = document.querySelectorAll("button")[2]


btnL.addEventListener("click", () => {

    formationL.forEach(element => {
        let list = document.createElement("li")
        list.innerHTML = element
        textDeFormation.appendChild(list)
    });
    textDeFormation = ""
})

btnC.addEventListener("click", () => {
    selectionCFinal.forEach(element => {
        let list = document.createElement("li")
        console.log(element);
        list.innerHTML = element
        textDeFormation.appendChild(list)
    });
    textDeFormation = ""
})
