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
    let contenedor=document.getElementById(divContenedor);
    //muestra los hicos de un nodo es una collection necesita un for
    console.log(contenedor.children);


    for(let i=0;i<3;i++){
        const arrayDecimo=Array();

        let numero=numeroRandom(max,min);
        let p=document.createElement('p');
        let contenido=document.createTextNode(numero);
        arrayDecimo.push(numero);
        console.log(arrayDecimo);
        p.appendChild(contenido);
        contenedor.children[i].appendChild(p);
        
        

    }
    let sorteo=document.getElementById('realizarSorteo');
    sorteo.disabled=false;
    
}

function realizarSorteo(){
    let div=document.getElementById('numeroSorteo');

    let numero=numeroRandom(max,min);

    let p=document.createElement('p');
    let contenido=document.createTextNode(numero);

    p.appendChild(contenido);
    div.appendChild(p);




}