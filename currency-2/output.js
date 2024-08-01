/**  ____________
 * |             |
 * |  output.js  |
 * | ____________|
 */

// --------------- Declaración de variables ---------------
// let mxnIn;
let eurOut;
let usdOut;
let jpyOut;

// --------------- Funciones de eventos ---------------
/**
 * Función que asigna los valores del Session Storage a los elementos HTML
 */
function initializePage() {
    //Obtenemos elementos HTML
    eurOut = document.getElementById("eur-out");
    usdOut = document.getElementById("usd-out");
    jpyOut = document.getElementById("jpy-out");

    //Asignamos valores a los elementos HTML
    eurOut.value=sessionStorage.getItem("eur-out");
    usdOut.value=sessionStorage.getItem("usd-out");
    jpyOut.value=sessionStorage.getItem("jpy-out");
};


// --------------- Inicio de carga de eventos ---------------
//Comprobamos que se haya mandado monto a convertir.
if (currencyExist() == false) {
    alert("No se ha enviado monto a convertir"); //Mandamos una alerta en la misma pagina
    location="index.html"; //Redirigimos al inicio (ya se habrá generado el mensaje de error en currencyExist())
} else {
    document.addEventListener("DOMContentLoaded", initializePage);
};