
var userLast = prompt("qual'è il tuo cognome?");

var arrLast = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];


arrLast.push(userLast);
console.log(arrLast);

arrLast.sort();

console.log(arrLast);

var userPosition = arrLast.indexOf(userLast);
console.log(userPosition + 1);