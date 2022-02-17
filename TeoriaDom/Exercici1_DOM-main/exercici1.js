// EXERCICI1 (SOLUCIÓ)
document.addEventListener("DOMContentLoaded", function(event) {
    
    //--------------------------OBTENEMOS INFORMACIÓN DEL DOCUMENTO--------------------//
    // Obtenemos el número de párrafos
    let parrafosDocumento;
    let numeroParrafos;

    parrafosDocumento = document.getElementsByTagName("p");
    numeroParrafos = parrafosDocumento.length;
    
    // Obtenemos el número de enlaces
    let enlacesDocumento;
    let numeroTotalEnlaces;

    enlacesDocumento = document.getElementsByTagName("a");
    numeroTotalEnlaces = enlacesDocumento.length;

    // Obtenemos la dirección que enlaza el penúltimo enlace
    let direccionPenultimoEnlace;
    direccionPenultimoEnlace = enlacesDocumento[numeroTotalEnlaces - 2].href;

    // Obtenemos la direccion que enlaza el último enlace
    let direccionUltimoEnlace;
    direccionUltimoEnlace = enlacesDocumento[numeroTotalEnlaces - 1].href;

    // Obtenemos el número de enlaces a http://prueba
    let contadorEnlacesPrueba = 0;
    for (let enlace of enlacesDocumento){
        if (enlace.href == "http://prueba/") {
            contadorEnlacesPrueba++;
        }
    }

    // Obtenemos el número de enlaces por párrafo
    let mapaEnlacesPorParrafo = new Map();
    let contadorParrafos = 0;

    for (let parrafo of parrafosDocumento){
        contadorParrafos++;
        mapaEnlacesPorParrafo.set(contadorParrafos, parrafo.getElementsByTagName("a").length);
    }

    //--------------------------- MOSTRAMOS EN EL DOCUMENTO--------------------------//
    // Creamos una variable salida con la información a mostrar del documento
    let salida = `Nombre d'enllaços de la pàgina = ${numeroTotalEnlaces}<br>` +
        `Nombre de paràgrafs = ${numeroParrafos}<br>` +
        `El penúltim enllaç apunta a = ${direccionPenultimoEnlace}<br>` +
        `L'últim enllaç apunta a = ${direccionUltimoEnlace}<br>` +
        `${contadorEnlacesPrueba} enllaços apunten a http://prueba`;

    // Añadimos la información de los párrafos a la variable salida
    for (let [numParrafo, numEnlaces] of mapaEnlacesPorParrafo) {
        salida = salida + `<br>Nombre d'enllaços del paràgraf ${numParrafo} = ${numEnlaces}`;
    }

    // Añadimos información al nodo
    let divInfo = document.getElementById("info");
    divInfo.innerHTML = `${salida}`;

});



