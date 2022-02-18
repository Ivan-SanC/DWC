let min=1;
let max=10;

function random(min,max){
    let numero= parseInt(Math.random()*(max+1-min)+min);
    
    return numero;
}


function generarDecimo(divContenedor){
    let contenedor=document.getElementById(divContenedor).children;
    let sorteo=document.getElementById('realizarSorteo');

    for(let i=0;i<3;i++){
        
        let p=document.createElement('p');
        let numero=random(min,max);
        let contenido=document.createTextNode(numero);
        p.appendChild(contenido);
        
        if(contenedor[i].children.length==0){
            contenedor[i].appendChild(p);
        }else{
            contenedor[i].replaceChild(contenido,contenedor[i].children[0]);
        }

    }
    
    sorteo.disabled=false;
}


function realizarSorteo(){

    let divSorteo=document.getElementById('numeroSorteo');
    let p=document.createElement('p');
    let numero=random(min,max);

    let contenido=document.createTextNode(numero);
    p.appendChild(contenido);

    if(divSorteo.children.length==0){
        divSorteo.appendChild(p);
    }else{
        divSorteo.replaceChild(p,divSorteo.children[0]);

    }

    let divContenedor=document.getElementById('divContenedor').children;
    for(let i=0;i<3;i++){
        
        divContenedor[i].style.color = 'red';

        if(divContenedor[i].children[0].innerHTML==numero){
            divContenedor[i].style.color='green';
        }

    }

}