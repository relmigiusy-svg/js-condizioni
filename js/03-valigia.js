// Traccia 03 · La valigia
// La consegna è nel README, alla voce "03 · La valigia".

/*
  STEPS
  1 - So che il biglietto costa 36 euro.
  2 - Chiedo quanto pesa la valigia
  3 - Se supera i 23 kg si paga 20 euro.
  4 - Calcolo il prezzo finale del biglietto
  5 - Stampo in console il prezzo finale
*/

// # Fase di preparazione
let prezzoBiglietto = 36;

// # Fase di raccolta dati

const pesoValigia = parseInt(prompt("Quanto pesa la valigia?"));

// # Fase di elaborazione
if (pesoValigia > 23) {
  prezzoBiglietto = prezzoBiglietto + 20;
}

// # Fase di output
console.log(`Prezzo del biglietto: ` + prezzoBiglietto + `euro`);
