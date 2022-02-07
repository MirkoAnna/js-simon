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
        arrayNumeriCasuali.push(numeri);

    }
}
// Assegno a una variabile elemento html
const numeriCasuali = document.getElementById('random-numbers');
// Visualizzo su schermo array di numeri casuali
document.getElementById('random-numbers').innerHTML = arrayNumeriCasuali;
// const text = document.getElementById('text');


// Creo arrey dove andranno i valori dei numeri inseriti, numeri indovinati e la quantità dei numeri trovati
let numeriInseriti = []
let numeriIndovinati = [];
let quantitaNumeriIndovinati = [];

// Da qui partirà il gioco (dopo i 30 secondi)
setTimeout(avvioGioco, 30000);







// FUNZIONI

// Creo funzione numeri casuali
function generatoreNumeriCasuali(numMin, numMax) { 
    return (Math.floor(Math.random() * (numMax - numMin)) + numMin);
};

// Definisco la funzione che sarà il motore del gioco
function avvioGioco() {

    // Scomparsa dei numri generati e del testo
    document.getElementById('random-numbers').classList.add('hidden');
    document.getElementById('text').classList.add('hidden')
    // Creo un ciclo dove si svolgeranno tutte le azioni esterne ed interne
    for(let i = 0; i < 5; i++) {
        // Chiedo al giocatore di inserire i numeri visti precedentemente uno ad uno
        let numeriScelti = parseInt(prompt('Inserisci il ' + (i + 1) + '° numero'));

        // Tengo traccia dei numeri inseriti
        numeriInseriti.push(numeriScelti);

        // Ciclo while, applico condizioni per i numeri inseriti
        while(numeriScelti.length === 0 || Number.isNaN(numeriScelti)) { 
            numeriScelti = parseInt(prompt('Inserisci il ' + (i+1) + '° numero'));
        }
        // Eseguo push nei corrispondenti arrey
        if (arrayNumeriCasuali.includes(numeriScelti)) {
            numeriIndovinati.push(numeriScelti);
        } else if (!arrayNumeriCasuali.includes(numeriScelti)) {
            quantitaNumeriIndovinati.push(numeriScelti);
        }
    }

    document.getElementById('text-result').innerHTML = 'Risultati...';
    // Faccio apparire tex-result ('Risultati...')
    document.getElementById('text-result').classList.remove('hidden');

    // Visualizzo su pagina quanti e quali numeri indovinati
    document.getElementById('numbers-guessed').innerHTML = "Numeri indovinati: " + numeriIndovinati;
    document.getElementById('amount-numbers-guessed').innerHTML = 'Quantità numeri indovinati: ' + numeriIndovinati.length;
}