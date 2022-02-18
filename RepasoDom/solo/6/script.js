let max = 10;
let min = 1;
function random(max, min) {
    let numero = parseInt(Math.random() * (max + 1 - min) + min);
    return numero;
}

function generarDecimo(divContenedor) {
    let contenedor = document.getElementById(divContenedor).children;




    for (let i = 0; i < contenedor.length; i++) {

        let numero = document.createTextNode(random(max, min));
        let p = document.createElement('p');
        p.appendChild(numero);


        if (contenedor[i].children.length == 0) {
            contenedor[i].appendChild(p);
        } else {
            //Si tiene un hijo lo cambia por otro
            contenedor[i].replaceChild(p, contenedor[i].children[0]);
        }

    }

    document.getElementById('realizarSorteo').disabled = false;



}


function realizarSorteo() {

    let sorteo = document.getElementById('numeroSorteo');
    let p = document.createElement('p');

    let numero = random(max, min);
    let contenido = document.createTextNode(numero);
    p.appendChild(contenido);


    if (sorteo.children.length == 0) {
        sorteo.appendChild(p);

    } else {
        sorteo.replaceChild(p, sorteo.children[0])
    }

    let divContenedor = document.getElementById('divContenedor').children;
    for (let i = 0; i < divContenedor.length; i++) {

        divContenedor[i].style.color = 'red';

        if (divContenedor[i].children[0].innerHTML == numero) {

            divContenedor[i].style.color = 'green';
        }


    }





}