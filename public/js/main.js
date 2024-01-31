import data from './../json/molengeek.json' assert { type: "json" }

let molengeek = data.molengeekLogo

let firstimg = document.querySelectorAll("img")[0]
let secondimg = document.querySelectorAll(".fResaux")[0].querySelector("img")
secondimg.src = molengeek
console.log(secondimg);
firstimg.src = molengeek

let bxformationimg = data.partenaires.bxFormation.logo
let pwsnimg = data.partenaires.pwc.logo
let awsimg = data.partenaires.aws.logo
let Microsoftimg = data.partenaires.Microsoft.logo
let googleimg = data.partenaires.google.logo
let proximusimg = data.partenaires.proximus.logo
let actirisimg = data.partenaires.actiris.logo
let metaimg = data.partenaires.meta.logo

let onecarousel = document.querySelectorAll(".slide")[0].querySelector("img")

onecarousel.src = bxformationimg

let twocarousel = document.querySelectorAll(".slide")[1].querySelector("img")

twocarousel.src = pwsnimg

let treecarousel = document.querySelectorAll(".slide")[2].querySelector("img")

treecarousel.src = awsimg

let fourcarousel = document.querySelectorAll(".slide")[3].querySelector("img")

fourcarousel.src = Microsoftimg

let fivecarousel = document.querySelectorAll(".slide")[4].querySelector("img")

fivecarousel.src = googleimg

let sixcarousel = document.querySelectorAll(".slide")[5].querySelector("img")

sixcarousel.src = proximusimg

let sevencarousel = document.querySelectorAll(".slide")[6].querySelector("img")

sevencarousel.src = actirisimg

let eightcarousel = document.querySelectorAll(".slide")[7].querySelector("img")

eightcarousel.src = metaimg

/* evenement a venir */

let evenement = data.formations.seancesInfos
let futurEvent = evenement.slice(0,4);

let containerEvent = document.querySelector(".containerEvent")

futurEvent.forEach(element => {
    let divContainer = document.createElement("div")
    divContainer.setAttribute("class", "boxinfo")
    containerEvent.appendChild(divContainer)
    let textdate = document.createElement("div")
    textdate.setAttribute("class", "dateinfo")
    textdate.innerText = element.date
    divContainer.appendChild(textdate)
    let titleInfo = document.createElement("div")
    titleInfo.setAttribute("class", "titleinfo")
    titleInfo.innerText = element.nom
    divContainer.appendChild(titleInfo)
});

let molengeekInfoName = data.molengeekInfo.name
let molengeekAdresse = data.molengeekInfo.address
let molengeekPhone = data.molengeekInfo.phone
let molengeekeMail = data.molengeekInfo.email
let molengeektva = data.molengeekInfo.tva

let h1 = document.querySelector(".infolieuText").children[0]
h1.innerHTML = molengeekInfoName
let h12 = document.querySelector(".infolieuText").children[1]
h12.innerHTML = molengeekAdresse
let h13 = document.querySelector(".infolieuText").children[2]
h13.innerHTML = molengeekPhone
let h14 = document.querySelector(".infolieuText").children[3]
h14.innerHTML = molengeekeMail
let h15 = document.querySelector(".infolieuText").children[4]
h15.innerHTML = molengeektva



