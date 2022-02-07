/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

const arrayNumeriCasuali = [];
let i = 5;
while (arrayNumeriCasuali.length < i) {
    let numeri = generatoreNumeriCasuali(1, 100);
    // Se non è incluso viene pushato
    if(!arrayNumeriCasuali.includes(numeri)) { 
        arrayNumeriCasuali.push(" " + numeri);
    }
}
const numeriCasuali = document.getElementById('random-numbers');
document.getElementById('random-numbers').innerHTML = arrayNumeriCasuali;

function generatoreNumeriCasuali(numMin, numMax) { 
    return (Math.floor(Math.random() * (numMax - numMin)) + numMin);
};