import data from './../json/molengeek.json' assert { type: "json" }

let molengeek = data.molengeekLogo

let firstimg = document.querySelectorAll("img")[0]

firstimg.src = molengeek

