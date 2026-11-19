// Traccia 06 · Il login
// La consegna è nel README, alla voce "06 · Il login".

/*
  STEPS
  1 - Chiedo username
  2 - chiedo password
  3 - se username è uguale a admin e password uguale a 1234
  4 - Mostro con alert Login effettuato
  5 - altrimenti credenziali errate sempre con alert
*/

// # Fase di preparazione


// # Fase di raccolta dati

const username = prompt('Scrivi username');
const password = prompt('Scrivi password');

// # Fase di elaborazione

let messaggio;
if (username === 'admin' && password === '1234') {
  messaggio = 'Login effettuato'
} else { messaggio = 'Credenziali errate' };

// # Fase di output
alert(messaggio);
