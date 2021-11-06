var palabras;
const lista= new Set();
do{
    palabras=prompt("Introduce palabras");
    if(palabras!=null){
        lista.add(palabras);
    }
}while(palabras!=null);

const array=[...lista];
function ordena(a,b){
    return a.length-b.length;
}

array.sort((a,b)=>a.localeCompare(b,'es'));
const reversed=array.reverse();

document.write(`<strong>Palabras ordenadas en orden inverso: </strong>`+reversed);