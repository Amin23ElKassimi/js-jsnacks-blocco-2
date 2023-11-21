// Crea una funzione che accetta due numeri, 
// se il primo e' divisibile per il secondo, 
// allora ritorna vero, altrimenti ritorna falso. 
// Micro bonus: se sono uguali ritorna il numero.

let num1 = parseInt(prompt("Inserisci il primo numero"));
let num2 = parseInt(prompt("Inserisci il secondo numero"));

function isDivisible(num1, num2) {
    if (num1 % num2 === 0) {
        return true;
    } else {
        return false;
    }
}

let verifiDivisibilita = isDivisible (num1, num2);
console.log(verifiDivisibilita);
