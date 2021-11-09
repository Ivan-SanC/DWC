//Variables
const array=[];
var palabras;
const map= new Map();
var existe;

//introduce palabras en el array
do{

palabras=prompt("Introduce palabras.")

if(palabras!=null && palabras!=""){
    array.push(palabras);
}

}while(palabras!=null && palabras!="");


//Crea el mapa
function contador(arrayPalabras){
    let valor=1;

    for(let i=0;i<arrayPalabras.length;i++){

        //mira que exista la palabra en el map
        if(map.has(arrayPalabras[i])==true){
            map.set(arrayPalabras[i],valor+1);
        
        //Si no existe lo crea
        }else{
            map.set(arrayPalabras[i],valor);
        }
        
    }

    return map;
}

//Muestra la clave y el valor del mapa
for (let [clave,valor] of contador(array)) {
    document.write(`Clave: ${clave}, Valor: ${valor} <br>`);
}
