// Traccia 09 · Come mi vesto?
// La consegna è nel README, alla voce "09 · Come mi vesto?".

/*
  STEPS
  1 - Chiedo la temperatura esterna.
  2- se la temperatura non è un numero, il messaggio è scrivi la temperatura
  2 - Se la temperatura esterna è minore di 15, chiedo anche se piove.
  3 -le risposte accettare sono si o mo
  4 -se piove esce messaggio 'metti impermeabile' altrimenti 'Metti la giacca'
  5 -se la temperatura è maggioe di 15 esce messaggio 'Vai leggero'.
  6- Mostro il passaggio con alert
*/

// # Fase di preparazione


// # Fase di raccolta dati

const temperatura = parseInt(prompt('Scrivi la temperatura'));

// # Fase di elaborazione
let messaggio;
if (isNaN(temperatura)) {
  messaggio = 'scrivi la temperatura';
}
else if (temperatura < 15) {
  const piove = prompt('Piove?')
  if (piove === 'si') { messaggio = "metti l'impermeabile" }
  else { messaggio = 'Metti la giacca' }
}

else { messaggio = 'vai leggero' };


// # Fase di output
alert(messaggio);

