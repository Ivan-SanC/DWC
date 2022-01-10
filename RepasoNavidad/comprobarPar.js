let numero;

function isBlank(cadena) {
    return (/^\s*$/.test(cadena));
}

do{
numero=prompt("Introduce un numero.")

if(isNaN(Number(numero))||isBlank(numero)==true){
    alert("No es un número!")
}

}while(isNaN(Number(numero)) && numero!=null||isBlank(numero)==true);

if(numero!=null){
if(numero%2==0){
    document.write(`El número ${numero} es par.`)
}else{
    document.write(`El número ${numero} es impar.`)
}
}