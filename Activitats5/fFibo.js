//No recursiva
var valor;


do{
    var esValido=true;
    valor=prompt("Introduce un valor.");
    if(isNaN(Number(valor))){
        alert("No es un numero");
        esValido=false;
    }

}while(esValido==false);



//Funcion
function fibonacci(num){
    let num1=0;
    let num2=1;
    let suma=0;

    for(let i=2; i<=num;i++){
        document.write(`${num1}<br>`)
        suma=num1+num2;
        num1=num2;
        num2=suma;
        
    }
    return num1;
}
document.write(`El valor de ${valor} es: ${fibonacci(valor)}`);