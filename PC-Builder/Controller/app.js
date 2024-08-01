// --------- DOM variable & objects initialization ---------
var components;
var componentImg;
var componentImgSrc;

// --------- Event Functions ---------
function getImgSource(e) {
    componentImg = this.querySelector("img");
    if (componentImg) {
        componentImgSrc = componentImg.src;
    }
    console.log(componentImgSrc);
}

// --------- DOM objects loading ---------
function init(e) {
    // ------ HTML elements capture ------
    components = document.getElementsByClassName("component"); //Seleccionamos todos los elementos HTML con class='component'

    // ------ Events loader ------
    // --- Drag and Drop Events ---
    for (let component of components) {
        component.addEventListener('dragstart', getImgSource);
    }
}

// --------- primary event loading (listeners) ---------
document.addEventListener("DOMContentLoaded", init);


// VERSION CON ARROW FUNCTION
// function init(e) {
//     // ------ HTML elements capture ------
//     components = document.getElementsByClassName("component"); //Seleccionamos todos los elementos HTML con class='component'

//     // ------ Events loader ------
//     for (let component of components) {     // --- Drag and Drop Events ---
//         component.addEventListener('dragstart', (e) => {
//             componentImg = this.querySelector("img");

//             if (componentImg) {
//                 componentImgSrc = componentImg.src;
//             }

//             console.log(componentImgSrc);
//         });
//     }
// }
