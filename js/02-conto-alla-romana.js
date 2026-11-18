// Traccia 02 · Il conto alla romana
// La consegna è nel README, alla voce "02 · Il conto alla romana".

/*
  STEPS
  1 - Devo pagare il conto e dare 10 euro di mancia
  2 - Chiedo il totale del conto
  3 - Chiedo quante persone siamo
  4 - Aggiungo la mancia al totale
  5 - Divido iltotale per numero di persona per conoscere la quota
  6 - Mostro con un alert la quota di ognuno, con i decimali.
*/

// # Fase di preparazione
const mancia = 10;

// # Fase di raccolta dati
const contoTotale = parseInt(prompt("Quant'è il conto ?"));
const numeroPersone = parseInt(prompt("Quante persone siamo?"));
// # Fase di elaborazione

const quotaPersona = (contoTotale + mancia) / numeroPersone;

// # Fase di output

alert(`La quota è: ${quotaPersona.toFixed(2)} euro`);
