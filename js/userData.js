/**
 * @author Alexandros Estrella de la Mañana <jsmith@example.com>
 * @link https://github.com/alexandro-morningstar GitHub
 */
/*
 ___________________________________________________________
|                                                            |
| JS para la gestión de los datos del usuario              . |
| ___________________________________________________________|
 
*/

var nickname; //Solo inicializamos la variable global
var gameSize;
var email;
var geolocationTxt;

// ------ SESSION STORAGE -------

/**
 * Almacena los datos en el SessionStorage
 * @date 2024-07-15
 * @param { HTMLElement } nickname Contiene el nickname del usuario
 * @param { HTMLElement } email Contiene el correo electronico registrado por el ususario
 * @param { HTMLElement } gameSize Contiene el tamaño de tablero elegido
 */
function userData(nickname, email, gameSize) { //Los datos no vienen directo del DOM, vienen de parametros de función cuando son llamadas
    sessionStorage.setItem('nickname', nickname.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('size', gameSize.value);
    sessionStorage.setItem('location', geolocationTxt);
};

function getUserData() {
    nickname = sessionStorage.getItem('nickname');
    gameSize = sessionStorage.getItem('size');
    email = sessionStorage.getItem('email');
};

function checkUsersData() {
    if (nickname == null) {
        sessionStorage.setItem('error', 'No se han enviado datos del jugador.');
        return false;
    } else {
        return true;
    };
};

function geolocationData() {
    if(!navigator.geolocation) {
        geolocationTxt="Este navegador no permite Geolocalización"
    } else {
        navigator.geolocation.getCurrentPosition(
            //Success
            (position) => {
                geolocationTxt = `Latitud: ${position.coords.latitude}, Longitud: ${position.coords.altitude}`;
            },
            //Error
            () => { //Si no devuelve nada...
                geolocationTxt="No ha sido posible encontrar la ubicación actual.";
            }
        )
    }
}

// ------ LOCAL STORAGE -------

/**
 * Almacena y realiza un registro de los usuarios que han jugado en el LocalStorage
 * @date 2024-07-15
 * @param { HTMLElement } nickname Nombre del usuario
 */
function usersHistory(nickname) {
    let usersRecord = localStorage.getItem('record');
    let record;

    if (usersRecord == null) {
        record = [];
    } else {
        record = JSON.parse(usersRecord);
    }

    let userEntry={
        user:nickname.value,
        date:Date.now() // Registra la hora actual al momento del ejecución (ultima vez jugado)
    };
    
    record.push(userEntry);
    localStorage.setItem('record', JSON.stringify(record));
};