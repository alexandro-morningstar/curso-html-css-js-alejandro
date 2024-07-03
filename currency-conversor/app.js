// Inicialización de variables, objetos y DOM
let currencyConversor = document.getElementById("form-conversor");
let currencyIn = document.getElementById("mxn-In");
let eurOut = document.getElementById("eur-out");
let usdOut = document.getElementById("usd-out");
let jpyOut = document.getElementById("jpy-out");
let errorAdvertisement = document.getElementById("error");

// Funciones de eventos
function checkEntry(e){
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
    }; // Agregar validación para que no se ingresen letras (pista: expresiones regulares)
    // Tratar de que una vez que se valide la entrada, que llame a otra función donde ahora si realizará los calculos
    // Tratar de que cada conversión sea una función diferente (o no?)
};



// Inicio de carga de eventos (listeners)
currencyConversor.addEventListener("submit", checkEntry);


// COLOR PARA EL BACKGROUND #FFEDDA