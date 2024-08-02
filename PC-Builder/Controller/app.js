// --------- DOM variable & objects initialization ---------
var components;
var imgSelector;
var nameSelector;
var classComponent;
var imgComponent;
var nameComponent;
var imgSlot;
var nameSlot;
var classSlot;
var trashCan;

// --------- Event Functions ---------
/**
 * Obtiene la información de un componente seleccionado (detonado por un evento dragstart)
 * Siempre traeremos un div que puede contener <img>, <p> y/o <input>
 */
function getComponentInfo() {
    imgSelector = this.querySelector("img"); //Guardamos la etiqueta <img> (de la sección componentes)
    nameSelector = this.querySelector("p"); //Guardamos la etiqueta <p> (de la sección componentes)
    if (imgSelector && nameSelector) { // Verificamos que sí exista información dentro de nuestras variables (que si exista etiqueta guardada).
        classComponent = imgSelector.className; //Guardamos el valor (nombre) del atributo class=""
        imgComponent = imgSelector.src; //Guardamos le valor del atributo src=""
        nameComponent = nameSelector.innerText; //Guardamos el valor (texto) contenido en la etiqueta <p>
    }
}

/**
 * Asigna los valores correspondientes de un componente seleccionado (con info obtenida después de un evento dragstart)
 * a su espacio en la sección de carrito, comparando con los classname que sea del tipo correcto de componente para evitar repeticiones
 */
function setComponentInfo() {
    imgSlot = this.querySelector("img"); //Guardamos la etiqueta <img> (de la sección carrito)
    nameSlot = this.querySelector("p"); //Guardamos la etiqueta <p> (de la sección carrito)
    if (imgSlot && nameSlot) { //Comprobamos que si existan
        classSlot = imgSlot.className; //Guardamos el nombre de la clase del slot para saber si es el slot del componente a guardar
        if (classComponent == classSlot) { //Si el classname del componente es el mismo que el del slot, entonces se guarda (setea/asigna) la nueva información
            imgSlot.src=imgComponent; //El valor del atributo src de la etiqueta <img> en el slot, se sustituye por la traida por el componente
            nameSlot.innerText=nameComponent; //El valor (texto) de la etiqueta <p> en el slot, se sustituye por la traida por el componente.
        } else { //Si no coinciden los classname, no deja guardar
            window.alert("Solamente puedes poner componentes en su respectiva caja.");
            return false;
        }
    }
}

/**
 * dropComponent, más que eliminar, reasigna los slots a sus valores por defecto
 * asignando el nombre de la clase al valor de la etiqueta <p> que coincide es el mismo texto del componente
 * y "borrando" el nombre del src="" de la imagen del slot, para que de nuevo esté vacía.
 */
function dropComponent() {
    /* Recuperamos el elemento e info actual del elemento HTML que deseamos eliminar
    El nombre del ID es lo que en ese momento trae la variable classComponent (se ejecuta durante el dragstart del item en el cart) */
    let toDrop = document.getElementById(classComponent);
    
    //Obtenemos los elementos a los que setearemos sus valores (manualmente) que tenían por defecto
    let resetImgElement = toDrop.querySelector("img"); //Seleccionamos la etiqueta <img> del elemento contenido en toDrop
    let resetPElement = toDrop.querySelector("p"); //Seleccionamos la etiqueta <p> del elemento contenido en toDrop
    let getClassNameElement = resetImgElement.className; //El nombre de la clase coincide con el texto que debería tener por defecto

    //Seteamos ("Reseteamos") los valores.
    resetImgElement.src=""; //El source de la imagen lo dejamos vacío, para que ya no tenga imagen.
    resetPElement.innerText=getClassNameElement; //El texto de <p> se setea con el classname, que da la casualidad que es el mismo que debería tener por defecto
}

// --------- DOM objects loading ---------
/**
 * Eventos de Drag&Drop
 * @date 2024-08-01
 * @param { EventObject } e
 */
function init(e) {
    // ------ HTML elements capture ------
    components = document.getElementsByClassName("component"); //Seleccionamos todos los elementos HTML con class='component'
    SelectedComponents = document.getElementsByClassName("componentInCart"); //Seleccionamos todos los elementos HTML con class="componentInCart"
    trashCan = document.getElementById("trash"); //Elemento HTML que servirá como "bote de basura" al realizar un drop dentro de él.

    // ------ Drag and Drop Events ------

    //Agregar componentes al carrito
    for (let component of components) { //Recorremos todos los elementos HTML con class="component"
        component.addEventListener("dragstart", getComponentInfo); //Si ocurre un evento "dragstart", llamamos a la función que obtiene la información del objeto que empezamos a mover
    }

    for (let slot of SelectedComponents) { //Recorremos todos los elementos HTML con class="componentInCart"
        slot.addEventListener("dragover", e => { e.preventDefault(); }); //Agregamos listener de evento "dragover" y le asignamos la función de preventDefault() para que permita el drop
        slot.addEventListener("drop", setComponentInfo); //Al soltar (evento "drop") se llama la función setComponentInfo
        /*Sí iniciamos un evento "dragstart" desde un elemento HTML perteneciente a la zona de carrito
        llamamos de nuevo a getComponentInfo para actualizar la info de las variables con el componente actual
        esta información recupara de nuevo nos sirve como referencia para eliminar un componente*/
        slot.addEventListener("dragstart", getComponentInfo);
    }

    //Eliminar componentes del carrito
    trashCan.addEventListener("dragover", e => { e.preventDefault(); });
    trashCan.addEventListener("drop", dropComponent); //Cuando soltamos un componente del carrito al "bote de basura", llamamos a dropComponent
}

// --------------- DOM Listener ---------------
document.addEventListener("DOMContentLoaded", init);
