alert("Alerta desde JS")

// Capturar valor de elemento input con id="nicka"
let nickInput = document.getElementById("nicka");
console.log(`Es de tipo ${nickInput.nodeType}`);
console.log(`Valor de elemento con Id="nicka": ${nickInput.value}`); // Va a retornar el "@" que contiene en el value

// Capturar valor de elemento input con id="nick"
nickInput = document.getElementById("nick");
nickInput.value = "Alexandros Morningstar";
console.log(`Valor modificado desde el backend: ${nickInput.value}`);

// Capturar valor de elemento en la etiqueta select
let selectInput = document.getElementById("sizeGame");
console.log(`Retorno de valor en id="sizeGame" (etiqueta Select): ${selectInput.value}`); // Retorna 0 (es el value)
console.log(`Retorno de el texto en id="sizeGame" (etiqueta Select) (del elemento seleccionado):
    ${selectInput.options[selectInput.selectedIndex].text}`
); // retorna --Elige un tamaño-- (texto del campo, con el index seleccionado (value))

let test = () => { console.log("Esto es un evento on click desde el front!! "); }


/*
 ____________________________________________________________
|                                                            |
| JS para la comprobación de datos del forumario de entrada. |
| ___________________________________________________________|
*/

// Inicialización de var, objetos, DOM
let playButton = document.getElementById("play"); // Variable que contiene el ID de un elemento
let testButton = document.getElementById("test");

// Funciones de evento
function formCheck() { // Función que le daremos a un evento especifico capturado por un listener asociado a un elemento (en este caso, ubicado por ID)
    console.log("Retorno desde una función de evento con un listener!")
}

// Listeners

// variableElemento.addEventListener('evento', función);
playButton.addEventListener('click', formCheck);

// variableElemento.addEventListener('evento', (event) => {logica;});
testButton.addEventListener('click', (e) => {console.log('Retorno desde un eventlistener con arrow function');});
