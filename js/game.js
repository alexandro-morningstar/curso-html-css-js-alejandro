/*
 ___________________________________________________________
|                                                            |
| JS para el juego.                                          |
| ___________________________________________________________|
 
*/

//Capturamos los datos del usuario
getUserData();

//Comprobamos los datos capturados
if (checkUsersData() == false) { 
    alert("No se han enviado datos de usuario.");
    location="index.html"; //Si no es true (Si no se envían datos), envía a "index.html"
};