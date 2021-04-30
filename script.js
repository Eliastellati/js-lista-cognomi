
var userLast = prompt("qual'è il tuo cognome?");

var arrLast = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];


arrLast.push(userLast);
console.log(arrLast);

arrLast.sort();

for (var i= 0; i < arrLast.length ; i++) {
    document.getElementById('list').innerHTML += arrLast[i] + "<br>"
}


console.log(arrLast);

var userPosition = arrLast.indexOf(userLast);
console.log(userPosition + 1);

document.getElementById("position").innerHTML= userPosition + 1 ;