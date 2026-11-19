// Traccia 04 · Testa o croce
// La consegna è nel README, alla voce "04 · Testa o croce".

/*
  STEPS
  1 - devo tirare una moneta per decidere chi inizia
  2 - il programma pesca un numero a caso
  3 - Stampo il numero esttratto in console
  5 - se il numero è minore di 0-5 esce con un alert Testa
  6 - se il numero è maggiore di 0.5 esce con un alert croce
*/

// # Fase di preparazione



// # Fase di raccolta dati
const numeroEstratto = Math.random();

// # Fase di elaborazione
let risultato;
if (numeroEstratto < 0.5) {
  risultato = "Testa"
} else { risultato = "Croce" };

// # Fase di output
console.log(numeroEstratto);
alert(risultato);
