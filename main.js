var km = parseInt(prompt("Inserisci il numero di chilometri che vuoi percorrere: "));
var eta = parseInt(prompt("Inserisci la tua età: "));

console.log(km);
console.log(eta);

var prezzo = km * 0.21;

if(eta < 18){
    var sconto = (prezzo / 100) * 20;
    console.log(prezzo - sconto);
}
else if (eta > 64){
    var sconto = (prezzo / 100) * 40;
    console.log(prezzo - sconto);
}
else{
    console.log(prezzo);
}
