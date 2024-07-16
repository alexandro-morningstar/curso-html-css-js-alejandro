/**
 * @author Alexandros Estrella de la Mañana <jsmith@example.com>
 * @link https://github.com/alexandro-morningstar GitHub
 */

/*
 ___________________________________________________________
|                                                            |
| JS para la comprobación de datos del forumario de entrada. |
| ___________________________________________________________|
 
*/

// --------- Inicialización de var, objetos, DOM ---------
let formInput;
let nicknameInput;
let emailInput;
let sizeInput;
let errorAdvertisement;
let userWelcome;
let avatarItems;
let itemIMG;
let avatarCont;

// --------- Funciones de evento ---------

function imgChange(e) {
    avatarCont.src=itemIMG.src; //la dirección source de la imagen actual, se va a cambiar por la almacenada de la imagen arrastrada, definida en moviendoImg()
}

function moviendoImg(event) {
    itemIMG=event.target;
    console.log(itemIMG.src);
}

/**
 * Todo se maneja con variables globales.
 * Revisa los datos obtenidos del formulario de inicio de sesión como:
 * Nickname: no puede estar vacío, no puede contener números ni caracteres especiales.
 * email: no puede estar vacío.
 * size: se debe elegir un tamaño de tablero.
 * @date 2024-07-15
 * @param { EventObject } e Evento que salta al realizar el submit.
 */
function formChecker(e) { // Función que al realizarse el evento submit (con id="form-in") comienza las comprobaciones de cada campo
    // Comprobar que exista un valor en un elemento (que no sea null)
    if (nicknameInput.value.length == 0) {
        errorAdvertisement.innerText="Por favor, define un nombre para el jugador." // innerText inserta texto en un elemento HTML.
        nicknameInput.focus(); // Coloca el cursor en el elemento
        e.preventDefault();
        return false; // Buena practica retornar falso en comprobaciones
    } else if (nicknameInput.value.match(/(?<!\S)[0-9]/)){
        errorAdvertisement.innerText="El nombre de jugador no puede iniciar con un número.";
        nicknameInput.focus();
        e.preventDefault();
        return false;
    }else if (emailInput.value.length == 0) {
        emailInput.focus();
        errorAdvertisement.innerText="Por favor, introduce un correo electronico."
        e.preventDefault();
        return false;
    }else if (sizeInput.value == "0") { //Si es la primer opción del option (la que es por defecto)...
        sizeInput.focus();
        errorAdvertisement.innerText="Por favor, selecciona un tamaño para la matriz del juego."
        e.preventDefault();
        return false;
    }
    //Si toda la información es correcta, no debería pasar por ningún if
    userData(nicknameInput, emailInput, sizeInput);
    usersHistory(nicknameInput);
    return true;
};

/**
 * Carga de objetos del DOM, comprobaciones y eventos del formulario.
 * @date 2024-07-15
 */
function loadedDom() {
    //Captura de todos los elementos
    formInput = document.getElementById("form-in");
    nicknameInput = document.getElementById("nick");
    emailInput = document.getElementById("e-mail");
    sizeInput = document.getElementById("sizeGame");
    errorAdvertisement = document.getElementById("error");
    userWelcome = document.getElementById("userWelcome");


    // Comprobar si ha ocurrido un error
    if (sessionStorage.getItem('error')!= null) { //Si existe 'error' (definido en userData (capa de datos?)) pero además es diferente de null (porque debió setearse como una string de error)
        errorAdvertisement.innerText=sessionStorage.getItem('error'); //Imprime error en index.html
        sessionStorage.removeItem('error'); //Elimina el error del sessionStorage
    }

    // Carga de evento (listener) para formulario de inicio de sesión
    formInput.addEventListener("submit", formChecker);

    // Eventos del Drag and Drop
    avatarItems = document.getElementsByClassName("avatarImgItem"); //Tecnicamente esto iria en la captura de los elementos despues de la carga del DOM
    for(let item of avatarItems) {
        item.addEventListener("dragstart", moviendoImg)
    }
    avatarCont = document.getElementById("avatarImg"); // Obtenemos el container del avatar
    avatarCont.addEventListener("dragover", e => { e.preventDefault(); }); //prevent en over, para poder ejercutar drop
    avatarCont.addEventListener("drop", imgChange);

}

// --------- Inicio de carga de eventos (Listeners) ---------
document.addEventListener('DOMContentLoaded', loadedDom);

// Geolocalización
geolocationData();