// Crea 10 oggetti che rappresentano una zucchina, 
// indicandone per ognuno varietà,
// peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.



const zucchiniList = [
  {kind: 'Kind 1', weight: 10, length: 4},  // Oggetto 1
  {kind: 'Kind 6', weight: 13, length: 16}, // Oggetto 2
  {kind: 'Kind 2', weight: 4, length: 23},  // Oggetto 3
  {kind: 'Kind 6', weight: 11, length: 6},  // Oggetto 4
  {kind: 'Kind 1', weight: 2, length: 17},  // Oggetto 5
  {kind: 'Kind 3', weight: 5, length: 10},  // Oggetto 6
  {kind: 'Kind 3', weight: 7, length: 9},   // Oggetto 7
  {kind: 'Kind 4', weight: 3, length: 8},   // Oggetto 8
  {kind: 'Kind 5', weight: 6, length: 27},  // Oggetto 9
  {kind: 'Kind 5', weight: 14, length: 4},  // Oggetto 10
  {kind: 'Kind 5', weight: 20, length: 20}, // Oggetto 11
];

let totalSum = 0;

for (let i = 0 ; i < zucchiniList.length ; i++){
  
    const currentZucchini = zucchiniList[i];

    totalSum = totalSum + zucchiniList[i].weight;

}

console.log(totalSum);


