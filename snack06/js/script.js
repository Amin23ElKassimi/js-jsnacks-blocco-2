
// Chiedo all'utente un numero e genero attraverso una funzione un numero di quadrati equivalente al numero inserito dall'utente nel DOM, in qualsiasi forma. 



// Create squares




const wrapperElement = document.querySelector('div.wrapper');

function generatesquares(numbersquares) {

for ( let i = 1; i <= numbersquares ; i++){
    const squareElement = document.createElement('div');
    squareElement.className = 'square';
    const headingsquareElement = document.createElement('span');
    squareElement.appendChild(headingsquareElement);
    wrapperElement.appendChild(squareElement);
    squareElement.className += ' bg-danger';
}
}



const umbersquaresUser = parseInt(prompt('Inserisci il numero di carte da generare'));

generatesquares(umbersquaresUser);







