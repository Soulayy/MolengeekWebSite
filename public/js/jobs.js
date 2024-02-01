import data from './../json/molengeek.json' assert { type: "json" };


let jobPoste = document.querySelectorAll(".notititle")
let jobdDetail = document.querySelectorAll(".notibody")

let jobData = data.jobs

let z = 0

jobPoste.forEach(element => {

    element.innerText = jobData[z].poste

    z++

});

let m = 0

jobdDetail.forEach(element => {

    element.innerText = jobData[m].description

    m++

});