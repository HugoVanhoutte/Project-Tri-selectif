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

let getRandomTrash = (array) => {
    return array[Math.floor(Math.random()*array.length)];
}

const listDisplay = document.getElementById("list");

//TODO drag and drop and check
for (let i = 0; i <= 10; i++) {
    let listElement = document.createElement("li");
    listElement.innerText = getRandomTrash(JSON.parse(trashList));
    listDisplay.append(listElement);

    listElement.addEventListener("drop", )
}

