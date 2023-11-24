// Crea 10 oggetti che rappresentano una zucchina, 
// indicandone per ognuno varietà,
// peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.





const zucchina = {
    varieta : '',
    peso: 0,
    length: 0,
  };

const zucchinaRossa = Object.create(zucchina);
zucchinaRossa.varieta = 'rossa';
zucchinaRossa.peso = 0.5;
zucchinaRossa.length = 25; 

const zucchinaVerde = Object.create(zucchina);
zucchinaRossa.varieta = 'verde';
zucchinaRossa.peso = 0.7;
zucchinaRossa.length = 35; 

const zucchinaGialla = Object.create(zucchina);
zucchinaRossa.varieta = 'gialla';
zucchinaRossa.peso = 0.9;
zucchinaRossa.length = 20; 


const summZucchine = zucchinaRossa.peso + zucchinaVerde.peso + zucchinaGialla.pes
console.log(summZucchine);
