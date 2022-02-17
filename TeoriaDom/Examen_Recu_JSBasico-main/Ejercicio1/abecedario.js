const arrayAbecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const mapaAbecedarioUnicode = new Map();

let contador = 0;
for (let i=9398; i<=9423; i++) {
    mapaAbecedarioUnicode.set(`${arrayAbecedario[contador]}`, `&#${i}`);
    contador++;
}


// --------------------------- SOLUCIÓN AL EJERCICIO ------------------------------------ //
function numeroAleatorioEntreDosNum(valorMin, valorMax){
    return Math.floor(Math.random() * ((valorMax + 1) - valorMin)) + valorMin;
}

let cantidadLetrasMostrar = 20;

let numeroAleatorio = 0;
let arrayLetrasSalida = new Array();
let arrayLetrasSalidaOrdenadas = new Array();
let setLetrasSinRepetir = new Set();

for (let i=1; i<=cantidadLetrasMostrar; i++) {
    numeroAleatorio = numeroAleatorioEntreDosNum(0,arrayAbecedario.length-1);
    arrayLetrasSalida.push(arrayAbecedario[numeroAleatorio]);
    setLetrasSinRepetir.add(arrayAbecedario[numeroAleatorio]);
}

arrayLetrasSalidaOrdenadas = arrayLetrasSalida.slice();
arrayLetrasSalidaOrdenadas.sort();

document.write(`<h1>${arrayLetrasSalida.length} lletres aleatòries</h1>`)
document.write(`<p>`);
for (let letra of arrayLetrasSalida) {
    document.write(mapaAbecedarioUnicode.get(letra));
}
document.write(`<\p>`);
document.write(`<h1>Lletres ordenades</h1>`)
for (let letra of arrayLetrasSalidaOrdenadas) {
    document.write(mapaAbecedarioUnicode.get(letra));
}
document.write(`<h1>${setLetrasSinRepetir.size} lletres sense repetir</h1>`);
document.write(`<p>`);
for (let letra of setLetrasSinRepetir) {
    document.write(mapaAbecedarioUnicode.get(letra));
}
document.write(`<\p>`);






