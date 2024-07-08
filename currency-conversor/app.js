// Inicialización de variables, objetos y DOM
let currencyConversor = document.getElementById("form-conversor");
let currencyIn = document.getElementById("mxn-In");
let eurOut = document.getElementById("eur-out");
let usdOut = document.getElementById("usd-out");
let jpyOut = document.getElementById("jpy-out");
let errorAdvertisement = document.getElementById("error");
let regexNoLetters = /[^0-9]/g; // Excluye todo lo que no sean numeros, en todas las coincidencias a lo largo de la cadena

// Funciones de eventos
function mxnToJpy(event, mxnIn) {
    const jpyBase = 8.88;
    let jpy = mxnIn * jpyBase;
    jpyOut.value = `¥${jpy.toFixed(2)}`;
    event.preventDefault();
}

function mxnToUsd(event, mxnIn) {
    const usdBase = 0.055;
    let usd = mxnIn * usdBase;
    usdOut.value = `$${usd.toFixed(2)}`;
    event.preventDefault();
};

function mxnToEur(event, mxnIn) {
    const eurBase = 0.051;
    let eur = mxnIn * eurBase;
    eurOut.value = `€${eur.toFixed(2)}`;
    event.preventDefault();
};

function checkEntry(e){ //Funcion que comprueba los datos de entrada
    if (currencyIn.value.length == 0){
        currencyIn.focus();
        errorAdvertisement.innerText="Debes introducir una cantidad a convertir"
        e.preventDefault();
        return false;
    } else if (parseInt(currencyIn.value) <= 0) {
        currencyIn.focus();
        errorAdvertisement.innerText="El la cantidad a convertir no puede ser un número negativo"
        e.preventDefault();
        return false;
    } else if (regexNoLetters.test(currencyIn.value)) { //regexNoLetter.test retorna true si no hay letras
        currencyIn.focus();
        errorAdvertisement.innerText="Este campo solo acepta números";
        e.preventDefault();
        return false;
    } else {
        //Si llega hasta aqui, significa que pasó los filtros. Llamar funciones que realiza los cálculos.
        mxnToEur(e, currencyIn.value);
        mxnToUsd(e, currencyIn.value);
        mxnToJpy(e, currencyIn.value);
    };
};

// Inicio de carga de eventos (listeners)
currencyConversor.addEventListener("submit", checkEntry);
