//generar 3 numeros randoms y meter en cada p color azul
//boton generar activa boton sorteo
//boton generar 1 numero random lo mete en p div
//comparar numero result con decimos cambiar color rojo o verde
//divContenedor
let max=5;
let min=1;

function numeroRandom(max,min){
    return parseInt(Math.random() * (max+1 - min)+min);
}

function generarDecimo(divContenedor){
    //idcontenedor
    //esto seria ya dentro del contenedor serian los hijos (hijos)
    let contenedor=document.getElementById(divContenedor).children;
    //muestra los hijos de un nodo es una collection necesita un for
    console.log(contenedor);


    for(let i=0;i<3;i++){
        let numero=numeroRandom(max,min);

        let p=document.createElement('p');
        let contenido=document.createTextNode(numero);
     
        p.appendChild(contenido);
        //si los hijos del contenedor tiene hijos (nietos)
        if(contenedor[i].children.length==0){
            //crea la p con todo
        contenedor[i].appendChild(p);
        }else{
            //si ya existe la p lo cambia por otro (cambia el hijo)
            contenedor[i].replaceChild(p,contenedor[i].children[0]);
        }
        

    }
    let sorteo=document.getElementById('realizarSorteo');
    sorteo.disabled=false;
    
}



function realizarSorteo(){
    let numero=numeroRandom(max,min);


    let div=document.getElementById('numeroSorteo');
    let contenedor=document.getElementById('divContenedor').children;

    let p=document.createElement('p');
    let contenido=document.createTextNode(numero);
    p.appendChild(contenido);

    if(div.children.length==0){
    div.appendChild(p);
    }else{
        div.replaceChild(p,div.children[0]);
    }

    
    for(let i=0;i<3;i++){
        contenedor[i].style.color='red';

        if(contenedor[i].children[0].innerHTML==numero){
            contenedor[i].style.color='green';
        }

    }

}