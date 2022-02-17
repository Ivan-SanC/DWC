document.addEventListener("DOMContentLoaded", function(event) { 
    let textoParrafoNuevo;
    let posicionParrafoNuevo;

    let patronParrafo = /^.+$/;
    let patronPosicion = /^([1-9]|10)$/

    do {
        textoParrafoNuevo = prompt('Añade el texto para el nuevo párrafo');
    } while (!patronParrafo.test(textoParrafoNuevo));
    
    do {
         posicionParrafoNuevo= parseInt(prompt('Indica la posición a introducir el párrafo nuevo. Debe ser un número del 1 al 10'));
    } while (!patronPosicion.test(posicionParrafoNuevo));
    

    let listaParrafos = document.getElementsByTagName('li');
    
    
    let nodoNuevoParrafo = document.createElement('li');
    nodoNuevoParrafo.setAttribute('style', 'font-weight:bold;');
    // nodoNuevoParrafo.setAttribute('')
    // let nodoNegrita = document.createElement('strong');
    let nodoNegrita = document.createElement('b');
    let nodoTexto = document.createTextNode(textoParrafoNuevo);
    
    /* 1a opción negrita 
    nodoNegrita.appendChild(nodoTexto);
    nodoNuevoParrafo.appendChild(nodoNegrita);
    */

    nodoNuevoParrafo.appendChild(nodoTexto);

    let nodoOl = document.getElementsByTagName('ol')[0];
    let nodoADesplazar = listaParrafos[posicionParrafoNuevo - 1];
    nodoOl.insertBefore(nodoNuevoParrafo,nodoADesplazar);

});