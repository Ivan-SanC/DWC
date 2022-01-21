let idParrafo;
let idEnlace;

function ocultarMostra(parrafo,enlace){

    idParrafo=document.getElementById(parrafo);
    idEnlace=document.getElementById(enlace);

    if(idParrafo.className=='visible'){
        idParrafo.className='ocult';
        idEnlace.innerHTML='Mostrar';
    }else{
        idParrafo.className='visible';
        idEnlace.innerHTML='Ocultar';
    }

    

}
