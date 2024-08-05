let checkData;

function setTest(mobo) {
    sessionStorage.setItem("mobo", mobo);
}

function getTest() {
    sessionStorage.getItem("mobo");
}

//----------------------------------------------------------------------------------------------------------------
/**  ___________________
 * |                    |
 * |  currency-data.js  |
 * | ___________________|
 * Aqui se guardan y obtienen datos de Session y Local Storage.
 * Así como funciones de control o comprobación que retornan valores a otros scripts.
 * Por ejemplo, currencyExist() revisa si existe el valor de la moneda de entrada es llamada por output.js durante...
 * ... la carga del DOM de la página de resultados, evitando que se acceda a ella sin haber pasado valores.
 */

// Inicializar variables globales
//var getIn;

// --------------- Session Storage ---------------
/**
 * Función que guarda el valor de la monedas convertidas en el Session Storage.
 * En general se encarga de guardar datos (en forma de items) en el Session Storage
 * sessionStorage.setItem("item-key", parametro.value)
 * @param { Int: Moneda de entrada en pesos mexicanos } mxn
 * @param { Int: Valor calculado en euros } eur
 * @param { Int: Valor calculado en dolares } usd
 * @param { Int: Valor calculado en yen japonés } jpy
 */
// function currencyData(mxn, eur, usd, jpy) {
//     sessionStorage.setItem("currency-in", mxn); //Para comprobar si se mandó-recibió el valor de entrada.
//     sessionStorage.setItem("eur-out", eur);
//     sessionStorage.setItem("usd-out", usd);
//     sessionStorage.setItem("jpy-out", jpy);
// };

/**
 * Función para comprobar que existe un valor en la moneda de entrada.
 * Si no existe, genera un item en el Session Storage para asignarle un valor al elemento HTML con id="error" desde app.js
 * después retorna falso para la comprobación en la llamada de la función desde output.js
 */
// function currencyExist() {
//     getIn = sessionStorage.getItem("currency-in"); //Para comprobar si se mandó-recibió el valor de entrada.
//     if (getIn == null) {
//         sessionStorage.setItem("null-data", "No se han enviado datos para convertir.");
//         return false;
//     } else {
//         return true;
//     };
// };
