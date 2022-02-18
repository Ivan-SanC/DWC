function ocultarMostra(paragraf, enlace) {
    let idParrafo = document.getElementById(paragraf);
    let idEnlace = document.getElementById(enlace);

    if (idParrafo.className == 'visible') {
        idEnlace.innerHTML = 'Mostrar';
        idParrafo.className = 'ocult';
    } else {
        idEnlace.innerHTML = 'Ocultar';
        idParrafo.className = 'visible';
    }



}