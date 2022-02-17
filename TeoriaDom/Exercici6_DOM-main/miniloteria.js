function generarDecimo(divId){
    let listaDiv = document.getElementById(divId).children;
    let nodoP;

    for (let i=0; i<3; i++){
        nodoP = document.createElement('p');
        nodoTexto =  document.createTextNode(Math.floor(Math.random()*2 + 1));
        nodoP.appendChild(nodoTexto);
        if (listaDiv[i].children.length == 0) {
            listaDiv[i].appendChild(nodoP);
        } else {
            listaDiv[i].replaceChild(nodoP,listaDiv[i].children[0]);
        }
        
    } 

    document.getElementById('realizarSorteo').disabled = false;
}

function realizarSorteo() {
    let nodoDiv = document.getElementById('numeroSorteo');
    let nodoP = document.createElement('p');
    let numeroSorteo = Math.floor(Math.random()*2 + 1);

    let nodoTexto = document.createTextNode(numeroSorteo);
    nodoP.appendChild(nodoTexto);

    if (nodoDiv.children.length == 0) {
        nodoDiv.appendChild(nodoP);
    } else {
        nodoDiv.replaceChild(nodoP,nodoDiv.children[0]);
    }
    

    let listaDiv = document.getElementById('divContenedor').children;
    for (let i=0; i<3; i++){
        listaDiv[i].style.color = 'red';

        if (listaDiv[i].children[0].innerHTML == numeroSorteo) {
            listaDiv[i].style.color = 'green';
        }
    }
}