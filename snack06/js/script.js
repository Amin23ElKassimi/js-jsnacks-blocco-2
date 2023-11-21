
// Chiedo all'utente un numero e genero attraverso una funzione un numero di quadrati equivalente al numero inserito dall'utente nel DOM, in qualsiasi forma. 



// Create Cards




const wrapperElement = document.querySelector('div.wrapper');

function generateCards(numberCards) {

for ( let i = 1; i <= numberCards ; i++){
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    const headingCardElement = document.createElement('span');
    cardElement.appendChild(headingCardElement);
    wrapperElement.appendChild(cardElement);
    cardElement.className += ' bg-danger';
}
}



const umberCardsUser = parseInt(prompt('Inserisci il numero di carte da generare'));

generateCards(umberCardsUser);







