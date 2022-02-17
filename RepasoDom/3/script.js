document.addEventListener("DOMContentLoaded", function(event) { 
//pedir texto y numero del 1 al 10;
//nuevo texto en negrita insert en posicion
//avisa error
//cancela aplicacion
let texto;
let posicion;

let validaTexto=/^[a-zA-Záéíóúü]+( ?[a-zA-Záéíóúü])*$/;

    do{
        texto=prompt('Introduce el texto que vas a tener el nuevo parrafo');
    }while(!validaTexto.test(texto)&&texto!=null);

    do{
    posicion=parseInt(prompt('introduce la posición donde quieres el texto.')); 
    }while(posicion<1||10<posicion&&posicion!=null);


    let padre=document.getElementsByTagName('ol');
    let li=document.createElement('li');
    let negrita=document.createElement('strong');
    let contenido=document.createTextNode(texto);

    negrita.appendChild(contenido);
    li.appendChild(negrita);
    padre[0].appendChild(li);

    padre[0].insertBefore(li,document.getElementsByTagName('li')[posicion-1]);










});