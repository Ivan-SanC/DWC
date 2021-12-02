var text;
var clau;
var textXifrat;

text=prompt("Escribe el texto que quieres cifrar.");
do{
clau=prompt("Esccribe la clave (solo numeros)");
if(isNaN(Number(clau))){
    alert("No es un numero")
}

}while(isNaN(Number(clau)));

for(i=0;i<text.length;i++){
    for(j=0;j<=i;j++){
        textXifrat=text.charCodeAt(i)+Number(clau.charAt(j));

    }
    document.write(String.fromCharCode(textXifrat));

}