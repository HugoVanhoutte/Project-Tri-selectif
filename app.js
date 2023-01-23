const trashList = `[
    "bouteille en plastique",
    "flacon de gel douche",
    "flacon de produit lave-vitres",
    "flacon de liquide vaisselle",
    "brique de jus de fruit",
    "carton",
    "brique de lait",
    "boite de conserve",
    "désodorisant",
    "déodorant",
    "barquette aluminium",

    "bouteille de vin",
    "bouteille de bière",
    "pot de confiture",
    "bouteille d'huile",
    "papier gras",

    "journal",
    "magazine",
    "papier",

    "reste de repas",
    "couche-culotte",
    "pot de yaourt"

]`
const trashListParsed = JSON.parse(trashList)

const listDisplay = document.getElementById("list");

const yellowTrash = document.getElementById("yellow-trash");
const greenTrash = document.getElementById("green-trash");
const blueTrash = document.getElementById("blue-trash");
const brownTrash = document.getElementById("brown-trash");

let getRandomTrash = (array) => {
    return array[Math.floor(Math.random()*array.length)];
}



for (let i = 0; i <= 10; i++) {
    let listElement = document.createElement("li");
    listElement.innerText = getRandomTrash(trashListParsed);
    listElement.setAttribute("draggable", "true");
    listDisplay.append(listElement);

    listElement.addEventListener("dragstart", (event) => {
        let elementName = listElement.innerText;
        event.dataTransfer.setData("text/plain", elementName);
    })

    //FIXME Finir le systeme de drop
    yellowTrash.addEventListener("drop", (event) => {
        let data = event.dataTransfer.getData("text/plain");
        console.log(data);
        if (data >= trashListParsed[0] && data <= trashListParsed[10]) {
            console.log("test")
        } else {
            console.log("test2")
        }
    })
}



