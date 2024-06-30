/*
 ___________________________________________________________
|                                                            |
| JS para la comprobación de datos del forumario de entrada. |
| ___________________________________________________________|
 
*/

// Inicialización de var, objetos, DOM
let formInput = document.getElementById("form-in");
let nicknameInput = document.getElementById("nick");
let emailInput = document.getElementById("e-mail");
let sizeInput = document.getElementById("sizeGame");
let errorAdvertisement = document.getElementById("error");
let userWelcome = document.getElementById("userWelcome");

// Funciones de evento
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
    } else {
        console.log("Ok"); // Esto solo sale desde la consola
        userWelcome.innerText=`Bienvenido ${nicknameInput.value}`
    };
};

// Inicio de carga de eventos (Listeners)
formInput.addEventListener("submit", formChecker);