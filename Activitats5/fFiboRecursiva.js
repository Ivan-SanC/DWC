function fibonacci(num) {
    if(num < 2) {
        return num;

    }else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

do{
    var esValido=true;
    valor=prompt("Introduce un valor.");
    if(isNaN(Number(valor))){
        alert("No es un numero");
        esValido=false;
    }

}while(esValido==false);

for(let i = 0; i < valor; i++) {
    document.write(`${fibonacci(i)} `);
}
