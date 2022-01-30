
function habilitarSelect(identificador){
    var getId=document.getElementById(identificador);
    
    if(getId.disabled){
        getId.disabled=false;
        
    }else{
        getId.disabled=true
        
    }  
}



function retornaValor(elemento){
    console.log(elemento.value);
    
    let contenido=document.createTextNode(elemento.value+" ");
    document.body.appendChild(contenido);
}

function validarFormulario(form){
    let formulario=document.getElementById(form);

    for(element of formulario){
        retornaValor(element);
    }
    
}