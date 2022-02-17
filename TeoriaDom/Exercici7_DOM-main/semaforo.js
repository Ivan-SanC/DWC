function cambiarColor(){
    let coloresApagados = document.querySelectorAll('.apagat');
    let colorEncendido = document.querySelectorAll('.ences')[0];

    colorEncendido.className = 'apagat';
    if (colorEncendido.id == 'verd' || colorEncendido.id == 'vermell'){
        coloresApagados[0].className = 'ences';
    } else {
        coloresApagados[1].className = 'ences';
    }  
}