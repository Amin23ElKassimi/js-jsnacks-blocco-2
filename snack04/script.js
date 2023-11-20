// Crea una funzione che accetta due numeri, 
// se il primo e' divisibile per il secondo, 
// allora ritorna vero, altrimenti ritorna falso. 
// Micro bonus: se sono uguali ritorna il numero.



function isDivisible(num1, num2) {
    if (num1 % num2 === 0) {
        return true;
    } else {
        return false;
    }
}


let verifiDivisibilita = isDivisible (parseInt(prompt("Inserisci il primo numero")), parseInt(prompt("Inserisci il Secondo numero")));
console.log(verifiDivisibilita);