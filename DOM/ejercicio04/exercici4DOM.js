
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
    let valor=elemento.value;
    
    if(elemento.type=="checkbox"||elemento.type=="radio"){
        if(elemento.checked==true){
            valor;
            
        }
    }else if(elemento.type=="text"||elemento.type=="textearea"){
            valor;
        

    }else  if(elemento.type=="select-multiple"){
        if(elemento.checked==true){
            for(let a of elemento.options)
            a.value;
           
        }
    }else if(elemento.type=="select-one"){
        if(elemento.checked==true){
            valor;
            
        }
    }
    
    return valor;
    
}

function validarFormulario(form){
    let formulario=document.getElementById(form);
    
    for(let element of formulario.elements){
        let resultado=retornaValor(element)
        let contenido=document.createTextNode(resultado+" ");
        document.body.appendChild(contenido);

    }
    
}