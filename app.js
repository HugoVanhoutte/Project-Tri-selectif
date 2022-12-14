const trashListFile = `[
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
    "pot de yaourt",
    "préservatif (usagé)"
   
]`

let trashList = JSON.parse(trashListFile);

const getRandom = () => {
    let randomizedList = [];
    for (let i = 0; i < 10; i++) {
        randomizedList[i] = trashList[Math.floor(Math.random()*trashList.length)];
    }
    return randomizedList;
}

const list = document.querySelector('ul');

for (let i = 0; i < 10; i++) {
    let listElement = document.createElement("li");
    listElement.innerText = getRandom()[i];
    list.append(listElement);
}
