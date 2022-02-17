function habilitarSelect(marca){
    let idselect=document.getElementById(marca);
    
    if(idselect.disabled){
        idselect.disabled=false;
    }else{
        idselect.disabled=true;
    }

}

