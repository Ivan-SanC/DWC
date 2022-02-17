function ocultarMostra(parrafo, enlace) {
    let parrafoAOcultarMostrar = document.getElementById(parrafo);
    let enlaceSeleccionado = document.getElementById(enlace);
    console.log(enlaceSeleccionado);

    if (parrafoAOcultarMostrar.className == 'ocult'){
        parrafoAOcultarMostrar.className = 'visible';
        enlaceSeleccionado.textContent = 'Ocultar'
    } else {
        parrafoAOcultarMostrar.className = 'ocult';
        enlaceSeleccionado.textContent = 'Mostrar'
    }
        
}