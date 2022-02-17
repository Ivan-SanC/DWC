function ocultarMostra(paragraf,enlace){
    let pSeleccionado=document.getElementById(paragraf);
    let a=document.getElementById(enlace);

    if(pSeleccionado.className=='visible'){
        pSeleccionado.className='ocult';
        a.innerHTML="Mostrar";

    }else{
        pSeleccionado.className='visible';
        a.innerHTML="Ocultar";
    }
}