


// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.Calcola quanto pesano tutte le zucchine.



const zucchine = [
    { variety : 'rossa', peso : 5, length : 10 },
    { variety : 'Romana', peso : 12, length : 10 },
    { variety : 'strigliata', peso : 34, length : 10 },
    { variety : 'cagata', peso : 2, length : 10 },
    { variety : 'argentina', peso : 26, length : 10 },
]

let sommaVar = 0  ;

zucchine.forEach(function(element){ 
    // la somma e uguale al peso di ogni Elemento 
    sommaVar += element.peso
});
console.log(sommaVar)


// const zucchiniList = [
//     {kind: 'Kind 1', weight: 10, length: 4},
//     {kind: 'Kind 6', weight: 13, length: 16},
//     {kind: 'Kind 2', weight: 4, length: 23},
//     {kind: 'Kind 6', weight: 11, length: 6},
//     {kind: 'Kind 1', weight: 2, length: 17},
//     {kind: 'Kind 3', weight: 5, length: 10},
//     {kind: 'Kind 3', weight: 7, length: 9},
//     {kind: 'Kind 4', weight: 3, length: 8},
//     {kind: 'Kind 5', weight: 6, length: 27},
//     {kind: 'Kind 5', weight: 14, length: 4},
//     {kind: 'Kind 5', weight: 20, length: 20},

// ];

// let totalSum = 0;

// for (let i = 0 ; i < zucchiniList.length ; i++){

//     totalSum = totalSum + zucchiniList[i].weight;
// }

// console.log(totalSum);