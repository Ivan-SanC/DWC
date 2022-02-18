function cambiarColor(){
    //obtener los ids
    let rojo=document.getElementById('vermell');
    let ambar=document.getElementById('ambre');
    let verde=document.getElementById('verd');

    //comprobar que color tiene el objeto que esta encendido
    //es una collection se comprueba con posiciones
    let encendido=document.getElementsByClassName('ences')[0].id;
    console.log(encendido);

    if(encendido=='verd'){
        //setAttribute para cambiar la clave y luego el valor
        verde.setAttribute('class','apagat');
        ambar.setAttribute('class','ences');
    }else if(encendido=='ambre'){
        ambar.setAttribute('class','apagat');
        rojo.setAttribute('class','ences');
    }else{
        rojo.setAttribute('class','apagat');
        verde.setAttribute('class','ences');
    }


}