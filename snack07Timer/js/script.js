


// Cliccando su un pulsante, viene avviato un cronometro.
//  Per fermare il cronometro,
//  bisogna cliccare su un secondo pulsante





let actualTime = 0;
const seconds = document.querySelector('#seconds');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
let clock = 0;

start.addEventListener("click", function(){

     clock = setInterval(function() {
        actualTime = actualTime + 1;
        console.log(actualTime);
        seconds.innerHTML = actualTime; 
    }, 1000);
    
      

});

stop.addEventListener("click", function(){

    clearInterval(clock);

});

