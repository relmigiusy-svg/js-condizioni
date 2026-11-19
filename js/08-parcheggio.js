// Traccia 08 · Il parcheggio
// La consegna è nel README, alla voce "08 · Il parcheggio".

/*
  STEPS
  1 - conosco le tariffe del parcheggio
  2 -chiedo quante ore resta l'auto
  3 - se l'utente non si scrive un numero o un numero minore di 1
  4 -stampo in consolo scrrivi il numero di ore
  5- se l'utente scrive fino a 2 ore
  4 -stampo il risultato in console di 5 euro
  6 - se l'utente scrive fino a 5 ore
  7 - stampo in console 10 euro
  8 - se l'utente scrive oltre 5
  9- stampo in console 15 euro
*/

// # Fase di preparazione

const tariffaBreve = 5;
const tariffaMedia = 10;
const tariffaLunga = 15;

// # Fase di raccolta dati


const oreParcheggio = parseInt(prompt("Quante ore resta l'auto?"));


// # Fase di elaborazione
let messaggio;
if (isNaN(oreParcheggio) || oreParcheggio < 1) {
  messaggio = 'Scrivi il numero di ore'
} else if (oreParcheggio <= 2) {
  messaggio = `Da pagare: ${tariffaBreve} €`;
} else if (oreParcheggio <= 5) {
  messaggio = `Da pagare: ${tariffaMedia} €`;
} else {
  messaggio = `Da pagare: ${tariffaLunga} €`;
}

// # Fase di output
console.log(messaggio);
