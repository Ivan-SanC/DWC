function cambiarColor(){
    let verde=document.getElementById('verd');
    let ambar=document.getElementById('ambre');
    let rojo=document.getElementById('vermell');
    
    let encendido=document.getElementsByClassName('ences')[0].id;
    
    if(encendido=="verd"){
        verde.setAttribute('class','apagat');
        ambar.setAttribute('class','ences');
    }else if(encendido=="ambre"){
        ambar.setAttribute('class','apagat');
        rojo.setAttribute('class','ences');
    }else{
        rojo.setAttribute('class','apagat');
        verde.setAttribute('class','ences');
    }
}