var text;
var clau;

text= prompt("Escribe el texto que vas a cifrar");
do{
clau=prompt("Escribe la clave(solo numeros enteros)");
if(isNaN(Number(clau))){
    alert("No es un numero")
}
}while(isNaN(Number(clau)));

clau=parseInt(clau);

for(i=0;i<text.length;i++){
    xifrat=text.charCodeAt(i)+clau;
    document.write(String.fromCharCode(xifrat));
}