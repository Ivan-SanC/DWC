document.addEventListener("DOMContentLoaded", function(event) {
    let parrafoNuevo = prompt('Introduce el texto para el nuevo párrafo: ');
    while (parrafoNuevo == null || parrafoNuevo == ""){
        parrafoNuevo = prompt('Introduce el texto para el nuevo párrafo: ');
    }

    let posicionParrafoNuevo = parseInt(prompt('Indica la posición dónde desee introducir el nuevo párrafo.' + 
            ' Debe ser un número del 1 al 10: '));
    while (isNaN(posicionParrafoNuevo) || posicionParrafoNuevo < 1 || posicionParrafoNuevo > 10 ) {
        posicionParrafoNuevo = parseInt(prompt('Indica la posición dónde desee introducir el nuevo párrafo.' + 
            ' Debe ser un número del 1 al 10: '));
    }
    
    let nodoOl = document.getElementsByTagName('ol');
    let listaParrafos = document.getElementsByTagName('li');
    let nuevoElementoLista = document.createElement('li');
    nuevoElementoLista.textContent = parrafoNuevo;

    let siguienteElementoLista = listaParrafos[posicionParrafoNuevo - 1];

    nodoOl[0].insertBefore(nuevoElementoLista, siguienteElementoLista);
});