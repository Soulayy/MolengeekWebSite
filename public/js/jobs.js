import data from './../json/molengeek.json' assert { type: "json" };


let poste = document.querySelectorAll(".notititle")
let detail = document.querySelectorAll(".notibody")

let datajobs = data.jobs

let z = 0

poste.forEach(element => {

    element.innerText = datajobs[z].poste

    z++

});

let m = 0

detail.forEach(element => {

    element.innerText = datajobs[m].description

    m++

});