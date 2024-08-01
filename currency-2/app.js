/**
 * @author Alexandros Estrella de la Mañana <alejandro.gh98@outlook.com>
 * @link https://github.com/alexandro-morningstar GitHub
 *  _________
 * |         |
 * | app.js  |
 * | ________|
 * Script principal, aquí se comprueba la carga del DOM de Index.html
 * Se comprueban los datos de entrada y realizan conversiones de la moneda ingresada.
 */

// --------------- Declaración de variables / constantes globales ---------------
const regexNoLetters = /[^0-9]/g; //Excluye todo lo que no sean numeros, en todas las coincidencias.
const eurBase = 0.051;
const usdBase = 0.055;
const jpyBase = 8.88;
let currencyIn; //La moneda de entrada es el peso mexicano
let errorAdvertisement;
let eur;
let usd;
let jpy;

// --------------- Funciones de eventos ---------------
/**
 * Función que inicializa las variables eur,usd,jpy con el valor de su respectiva moneda y guarda los datos en SessionStorage
 */
function convertCurrency() {
    eur = currencyIn.value * eurBase;    
    usd = currencyIn.value * usdBase;
    jpy =  currencyIn.value * jpyBase;

    //Llamamos a la función (en currency-data.js) que guarda las monedas de salida y entrada en el Session Storage
    currencyData(currencyIn.value,eur,usd,jpy);
};

/**
 * Función que comprueba el dato de entrada (moneda mxn)
 * @param { event object } event
 */
function checkEntry(event) {
    if (currencyIn.value.length == 0) { //Si está vacío, retorna falso
        currencyIn.focus();
        errorAdvertisement.innerText="Debes introducir una cantidad a convertir";
        event.preventDefault();
        return false;
    } else if (regexNoLetters.test(currencyIn.value)) { //"regexNoLetters.test" retorna false si NO hay letras
        currencyIn.focus();
        errorAdvertisement.innerText="Este campo solo acepta números";
        event.preventDefault();
        return false;
    } else if (parseInt(currencyIn.value) <= 0) { //La moneda de entrada no puede ser un número negativo
        currencyIn.focus();
        errorAdvertisement.innerText="Este campo no acepta números negativos";
        event.preventDefault();
        return false;
    } else {
        /*Si llegamos hasta aquí, significa que pasó todos los filtros.
        llamamos a la función que convierte la modena a las diferentes salidas*/
        convertCurrency();
    };
};

/**
 * loadedDom se encarga de la captura de elementos HTML, comprobar si el DOM viene con algún item de error...
 * ... e inicia comprobaciones en la entrada de datos del formulario
 */
function loadedDom() {
    //Inicialización de variables - Captura de elementos HTML
    currencyConversor = document.getElementById("form-conversor");
    currencyIn = document.getElementById("mxn-In"); //La moneda de entrada es el peso mexicano
    errorAdvertisement = document.getElementById("error");

    //Comprobar si existe algún error durante la carga del DOM (generado en otra pagina)
    if (sessionStorage.getItem("null-data") != null) {
        errorAdvertisement.innerText=sessionStorage.getItem("null-data"); //A errorAdvertisement le asignamos el valor del item "null-data" dentro del Session Storage
        sessionStorage.removeItem("null-data"); //Elimina el item "null-data" para que no exista en el siguiente envío.
    }

    /*Cuando currencyConversor, que contiene el elemento HTML con ID "form-conversor"
    detone un evento de tipo submit, ejecutará la función "checkEntry"*/
    currencyConversor.addEventListener("submit", checkEntry);
}

// --------------- Inicio de carga de eventos ---------------
/* Cuando se complete la carga del DOM, llamaremos la función loadedDom */
document.addEventListener("DOMContentLoaded", loadedDom);
