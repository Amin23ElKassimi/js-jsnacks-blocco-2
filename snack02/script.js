
// Generatore di "nomi cognomi" casuali:
//  il Grande Gatsby ha una lista di nomi e una lista di cognomi,
//   e da questi due array distinti vuole generare una falsa lista di invitati con nome e cognome.

const arrayCognomi = ['amin','Gino','Nome','Luigi'];
const arrayNomi = ['Elka','Cognome','Magliulo','Ginetto'];
const arrayInvitati = [];
// e da questi due array distinti vuole generare a random una falsa lista di invitati con nome e cognome.
 




for (let i = 0; i < arrayCognomi.length; i++) {

const randomCognome = arrayCognomi[Math.floor(Math.random() * arrayCognomi.length)];
console.log(randomCognome);

const randomNome = arrayNomi[Math.floor(Math.random() * arrayNomi.length)];
console.log(randomNome);

arrayInvitati.push(randomCognome + " " + randomNome);


}

console.log(arrayInvitati);










