function domLoad () {

    // Captura de objetos
    const objeto = document.getElementById("objeto");
    const contenedor = document.getElementById("contenedor");

    // Eventos de objetos (movimiento)
    objeto.addEventListener("dragstart", event => {
        console.log("El objeto ha comenzado a moverse");
    })

    objeto.addEventListener("drag", event => {
        console.log("El objeto está en movimiento");
    })

    objeto.addEventListener("dragend", event => {
        console.log("El objeto ha dejado de moverse");
    })

    // Evento de contenedor (interacción)
    contenedor.addEventListener("dragenter", event => {
        console.log("El objeto entró en la zona del contenedor")
    })

    contenedor.addEventListener("dragover", event => {
        event.preventDefault(); //Para que permita entrar al evento drop
        console.log("El objeto está sobre la zona del contenedor");
    })

    contenedor.addEventListener("dragleave", event => {
        console.log("El objeto dejó la zona del contenedor");
    })

    contenedor.addEventListener("drop", event => {
        console.log("El objeto fue depositado dentro del contenedor")
    })

}

// Eventos generales
document.addEventListener("DOMContentLoaded", domLoad); //Hasta que se cargue todo el DOM, inciamos nuestra captura de datos y acciones