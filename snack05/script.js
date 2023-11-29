// Crea una funzione che accetta due elementi del dom,
//  uno e' il parent e l'altro e' un elemento che voglio sia aggiunto al parent come figlio.
function addChild(parent, child) {
    parent.appendChild(child);
}



const button = document.createElement('button');
const parent = document.querySelector('#parent');



// Invoca funzione
const crea = addChild(parent, button) 

