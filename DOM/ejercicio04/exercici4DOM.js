
function habilitarSelect(identificador){
    var selectId=document.getElementById(identificador);
    
    if(selectId.disabled){
        selectId.disabled=false;
        
    }else{
        selectId.disabled=true
        
    }  
}



function retornaValor(elemento){
    console.log(elemento.value);
    let valor=elemento.value;
    
    if(elemento.type=="checkbox"||elemento.type=="radio"){
        if(elemento.checked){
            valor;
            
        }
    }else if(elemento.type=="text"||elemento.type=="textearea"){
            valor; 

    }else  if(elemento.type=="select-multiple"){
        let arraySelect=new Array();
        for(let opcion of elemento.options){
            if(opcion.selected){
                valor=arraySelect.push(opcion.value);
            }
        }

    }else if(elemento.type=="select-one"){
        let indiceselect=elemento.selectIndex
        valor=elemento.options[indiceselect].value
            
        
    }else{
        valor="";
    }
    
    return valor;
    
}

function validarFormulario(form){
    let formulario=document.getElementById(form);
    
    for(let element of formulario.elements){
        let resultado=retornaValor(element);
        let contenido=document.createTextNode(resultado+" ");
        document.body.appendChild(contenido);

    }
    
}