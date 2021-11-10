var palabras;
var array=[];
const lista= new Set();
do{
    palabras=prompt("Introduce palabras");
    if(palabras!=null){
        lista.add(palabras);
    }
}while(palabras!=null && palabras!="");

array=[...lista];


array.sort((a,b)=>a.localeCompare(b,'es'));
const reversed=array.reverse();

document.write(`<b>Palabras ordenadas en orden inverso: </b>`+reversed);