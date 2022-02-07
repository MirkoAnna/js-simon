/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


// Creo array numeri vuoto.
const arrayNumeriCasuali = [];

// Pusho numeri casuali attraverso ciclo while
let i = 5;

while (arrayNumeriCasuali.length < i) {

    // Genero 5 numeri casuali
    let numeri = generatoreNumeriCasuali(1, 100);
    // Imposto condizione per il push di numeri
    if(!arrayNumeriCasuali.includes(numeri)) { 
        arrayNumeriCasuali.push(" " + numeri);

    }
}
// Assegno a una variabile elemento html
const numeriCasuali = document.getElementById('random-numbers');
// Visualizzo su schermo array di numeri casuali
document.getElementById('random-numbers').innerHTML = arrayNumeriCasuali;





// FUNZIONI
function generatoreNumeriCasuali(numMin, numMax) { 
    return (Math.floor(Math.random() * (numMax - numMin)) + numMin);
};