

// Crea un array vuoto
//  e chiedi all'utente un numero da inserire nell'array.
//   Continua a chiedere i numeri all'utente e a inserirli nell'array 
//   fino a quando la somma degli elementi è minore di 50


const array = [];
let summ = 0;
let number1 = 0;

while (summ < 50) {
    number1 = parseInt(prompt('Inserisci un numero'));
    array.push(number1);
    summ += number1;
}

console.log(number1);
console.log(summ);




















