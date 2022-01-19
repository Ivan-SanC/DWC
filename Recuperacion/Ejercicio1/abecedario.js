const arrayAbecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const mapaAbecedarioUnicode = new Map();
let valorMin=0;
let valorMax=25;
let limite=20;
let sorteoArray=new Array();
let list= new Set();


let contador = 0;
for (let i=9398; i<=9423; i++) {
    mapaAbecedarioUnicode.set(`${arrayAbecedario[contador]}`, `&#${i}`);

    contador++;
}
//console.log(mapaAbecedarioUnicode);

function numeroAleatorioEntreDosNum(valorMin, valorMax){
    return Math.floor(Math.random() * ((valorMax + 1) - valorMin)) + valorMin;
}

for(let i=0;i<limite;i++){
    let letra =numeroAleatorioEntreDosNum(valorMin,valorMax);
    sorteoArray.push(arrayAbecedario[letra]);
    list.add(arrayAbecedario[letra]);
    
}
console.log(sorteoArray);
let sorteoOrdenado=(sorteoArray.sort());
console.log(sorteoArray.sort());
console.log(list);

function imprimir(tipo){
    document.write("<h2>");
    for( let letra of tipo){
       document.write(mapaAbecedarioUnicode.get(letra));
       //console.log(mapaAbecedarioUnicode.get(letra));
    }
    document.write("</h2>");

}

document.write(`<h1>${sorteoArray.length} lletres aleatòries</h1>`);
imprimir(sorteoArray);
document.write(`<h1>Lletres ordenades</h1>`);
imprimir(sorteoOrdenado);
document.write(`<h1>${list.size} lletres sense repetir</h1>`)
document.write(imprimir(list));


