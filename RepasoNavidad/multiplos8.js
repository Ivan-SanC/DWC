

do{
    var x= prompt("Introduce valor 1");
    if(isNaN(x)){
        alert("No se ha introducido un numero.");
    }
}while(isNaN(x));

do{

var y= prompt("Introduce valor 2");
    if(isNaN(y)){
        alert("No se ha introducido un numero.")
    }
}while(isNaN(y));

const array = [x,y];
array.sort();
let mayor=array[1];
let menor=array[0];

document.write("Los numeros multiplos de 8 entre "+ menor+" y "+mayor+" son: ");
while(mayor>menor){

    if(mayor%8==0){
        document.write(mayor+" ");
    }
    mayor--;
}