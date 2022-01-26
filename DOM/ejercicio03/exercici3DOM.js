document.addEventListener("DOMContentLoaded", function(event) { 
let textoNuevo;
let posiciontexto;


//mira que no haya solo espacios en blanco
function isBlank(cadena) {
    return (/^\S*$/.test(cadena));
}

function obtenerDatos() {
    do{
    textoNuevo=prompt("Introduce el texto del nuevo parrafo.");
    }while(isBlank(textoNuevo)&&textoNuevo!=null);

    do{
        posiciontexto=parseInt(prompt("Introduce la posición del nuevo parrafo (1-10)"));
        if(isNaN(posiciontexto)){
            alert("Solo numeros!")
        }
        if(posiciontexto>10||posiciontexto<1&&textoNuevo!=null){
            alert("Solo se puede el rango del 1 al 10")
        }
    }while(posiciontexto>10||posiciontexto<1&&textoNuevo!=null);
}


function introducirTexto(texto,posicion){

    //Padre del elemento que vamos a crear
    let ol=document.getElementsByTagName("ol")[0];
    //Crear elemento que quieres
    let li=document.createElement("li")
    //Crear nodo donde se insertara el nodo
    let contenido=document.createTextNode(texto);
    //Nodo en el que ira el contenido y se pondra en negrita
    let negrita=document.createElement("strong");

    //Insertar el strong que sera el hijo del li
    li.appendChild(negrita);
    //nodo en el que se introduce el contenido
    negrita.appendChild(contenido);
    //Inserta el li en el ol
    ol.appendChild(li);

    //Buscamos la posicion que queremos
    let anteriorLi=document.getElementsByTagName("li")[posicion-1];

    //se inserta en el lugar
    ol.insertBefore(li,anteriorLi);
    
}

obtenerDatos();
if(textoNuevo!=null){
introducirTexto(textoNuevo,posiciontexto);
}



});