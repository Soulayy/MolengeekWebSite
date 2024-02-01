import data from './../json/molengeek.json' assert { type: "json" };

let textDeFormation = document.querySelectorAll(".botMid")[0].querySelectorAll("ul")[0]

let formationL = Object.values(data.formations.formationsLongues.aws)
let formationL2 = Object.values(data.formations.formationsLongues.codingSchool)
let formationL3 = Object.values(data.formations.formationsLongues.marketingDigital)
let formationL4 = Object.values(data.formations.formationsLongues.salesforceAdmin)

// let newFL = formationL

let formationC = Object.values(data.formations.formationsCourtes)
let selectionC = formationC.slice(0, 5)
let selectionCFinal = Array.from(selectionC)

let ltableau = [formationL, formationL2, formationL3, formationL4]



let btnL = document.querySelectorAll("button")[1]
let btnC = document.querySelectorAll("button")[2]


btnL.addEventListener("click", () => {
    textDeFormation.innerHTML = ""

    ltableau.forEach(element => {
        let list = document.createElement("li")
        list.innerHTML = element
        textDeFormation.appendChild(list)
    });
})

btnC.addEventListener("click", () => {
    textDeFormation.innerHTML = ""
    selectionCFinal.forEach(element => {
        let list = document.createElement("li")
        list.innerHTML = element.nom
        let liste = document.createElement("li")
        liste.innerHTML = element.pack
        liste.style.color = "purple"
        textDeFormation.appendChild(list)
        textDeFormation.appendChild(liste)
    });
})