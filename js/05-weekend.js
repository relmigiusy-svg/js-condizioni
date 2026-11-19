// Traccia 05 · Che giorno è?
// La consegna è nel README, alla voce "05 · Che giorno è?".

/*
  STEPS
  1 - Devo chiedere che giorno è oggi
  2 - L'utente risponde
  3 - se risponde sabato o domenica mostro con alert Buon weekend
  4 - altrimenti Buon lavoro
*/

// # Fase di preparazione


// # Fase di raccolta dati
const giorno = prompt('Che giorno è oggi');

// # Fase di elaborazione
let messaggio;
if (giorno === 'sabato' || giorno === 'domenica') {
  messaggio = 'Buon weekend!'
} else { messaggio = 'Buon lavoro' };


// # Fase di output
alert(messaggio);
