// Crea una funzione che accetta due elementi del dom,
//  uno e' il parent e l'altro e' un elemento che voglio sia aggiunto al parent come figlio.



function addChild(parent, child) {
    document.createElement(parent);
    document.createElement(child);
    parent.appendChild(child);
}

addChild ('div1', 'div2');







