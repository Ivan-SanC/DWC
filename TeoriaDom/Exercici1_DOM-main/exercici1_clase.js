document.addEventListener("DOMContentLoaded", function(event) {
    // Obtenemos el número de enlaces de la página
    let listaEnlacesPagina = document.getElementsByTagName('a');
    let numeroEnlacesPagina = listaEnlacesPagina.length;

    // Obtenemos el número de párrafos de la página
    let listaParrafosPagina = document.getElementsByTagName('p');
    let numeroParrafosPagina = listaParrafosPagina.length

    // Obtenemos la dirección a la que enlaza el penúltimo enlace
    let penultimoEnlacePagina = listaEnlacesPagina[numeroEnlacesPagina - 2].href;
    
    // Obtenemos la dirección del último enlace de la página
    let ultimoEnlacePagina = listaEnlacesPagina[numeroEnlacesPagina - 1].href;
    
    // Obtenemos el número de enlaces a http://prueba
    let numeroEnlacesPruebaEnPagina = 0;
    
    for (let enlace of listaEnlacesPagina) {
        if (enlace.href == 'http://prueba/') {
            numeroEnlacesPruebaEnPagina++;
        }
    }
    
    /*
    for (let cont in listaEnlacesPagina) {
        if (listaEnlacesPagina[cont] == 'http://prueba/'){
            numeroEnlacesPruebaEnPagina++;
        }
    }
    */

    // Obtenemos el número de enlaces de cada párrafo
    /*
    let numeroEnlacesParrafo = new Array();

    for (let parrafo of listaParrafosPagina) {
        numeroEnlacesParrafo.push(parrafo.getElementsByTagName('a').length);
    }

    console.log(numeroEnlacesParrafo);
    */

    let numeroEnlacesParrafo = new Map();
    contador = 1;
    for (let parrafo of listaParrafosPagina) {
        numeroEnlacesParrafo.set(contador, parrafo.getElementsByTagName('a').length);
        contador++;
    }

    let divInfo = document.getElementById('info');
    
    let texto = `Nombre d'enllaços de la pàgina = ${numeroEnlacesPagina} <br>` +
        `Nombre de paràgrafs = ${numeroParrafosPagina}<br>` + 
        `El penúltim enllaç apunta a = ${penultimoEnlacePagina}<br>` +
        `L'últim enllaç apunta a = ${ultimoEnlacePagina}<br>` +
        `${numeroEnlacesPruebaEnPagina} enllaços apunten a http://prueba<br>`;

    for (let [numeroParrafo, numeroEnlaces] of numeroEnlacesParrafo) {
        texto = texto + `Nombre d'enllaços del paràgraf ${numeroParrafo} = ${numeroEnlaces}<br>`;
    }

    divInfo.innerHTML = texto;    
    
});