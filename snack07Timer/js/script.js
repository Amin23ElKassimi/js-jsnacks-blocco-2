


// Cliccando su un pulsante, viene avviato un cronometro.
//  Per fermare il cronometro,
//  bisogna cliccare su un secondo pulsante


const cronometro = document.getElementById('cronometro');


cronometro.addEventListener('click', () => {
    cronometro.classList.toggle('active');
    cronometro.textContent = cronometro.textContent === 'Start'? 'Stop' : 'Start';
    
    let myVar = setInterval(myTimer ,1000);
    function myTimer() {
    const d = new Date();
    document.getElementById("secondi").innerHTML = d.toLocaleTimeString();
    
    if ()

    }

});
