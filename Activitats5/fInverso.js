var palabras;
const lista= new Set();
do{
    palabras=prompt("Introduce palabras");
    lista.add(palabras);

}while(palabras!=null||palabras=="");

const array=[...lista];
function ordenPersonal(a,b){
    return a.length-b.length;
}

array.sort((a,b)=>a.localeCompare(b,'es'));
const reversed=array.reverse();
document.write(reversed);