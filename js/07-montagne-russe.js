// Traccia 07 · Le montagne russe
// La consegna è nel README, alla voce "07 · Le montagne russe".

/*
  STEPS
  1 - ho la costante di altezza e la costante di età
  2 - chiedo l'altezza in cm e l'età
  3 - se uno dei due dati non è un numero mostro dati non validi
  4 - se altezza maggiore uguale di 140 cm e età maggiore uguale di 14
  5 - mostro alert con Puoi salire
  6 - altrimenti mostro Mi dispiace, non puoi salire.

*/

// # Fase di preparazione
const altezzaMinima = 140;
const etaMinima = 14;

// # Fase di raccolta dati

const altezza = parseInt(prompt('Quanto sei alto?'));
const eta = parseInt(prompt('Quanti anni hai'));

// # Fase di elaborazione
let messaggio;
if (isNaN(altezza) || isNaN(eta)) {
  messaggio = 'Dati non validi';
}
else if (altezza >= altezzaMinima && eta >= etaMinima) {
  messaggio = 'Puoi salire'
}
else { messaggio = 'Mi dispiace non puoi salire' };

// # Fase di output
alert(messaggio);
