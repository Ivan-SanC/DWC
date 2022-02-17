document.addEventListener("DOMContentLoaded", function(event) {

    let info= document.getElementById('info');
    let numeroEnlacesPagina=document.getElementsByTagName('a');
    let numeroParrafosPagina=document.getElementsByTagName('p');
    let penultimoEnlace=numeroEnlacesPagina[numeroEnlacesPagina.length-2].href;
    let ultimoEnlace=numeroEnlacesPagina[numeroEnlacesPagina.length-1].href;
    let countePrueba=0;
    let map=new Map();
    let cont=1;

    for(let elemento of numeroEnlacesPagina){
        if(elemento.href=='http://prueba/'){
            countePrueba++;
        }
    }

    console.log(countePrueba);

    for(let elemento of numeroParrafosPagina){
        map.set(cont,elemento.getElementsByTagName('a'));
        cont++;
    }

    info.innerHTML=`Nombre d'enllaços de la pàgina= ${numeroEnlacesPagina.length}<br> `;
    info.innerHTML+=`Nombre de paragrafs= ${numeroParrafosPagina.length}<br>`;
    info.innerHTML+=`El penultim enllanç apunta a= ${penultimoEnlace}<br>`;
    info.innerHTML+=`El ultim enllaç apunta a= ${ultimoEnlace}<br>`;
    info.innerHTML+=`${countePrueba} enllaços apunten a http://prueba<br>`;
    for(let [clave,valor] of map){
        info.innerHTML+=`Nombre d'enllaços del paragraf=${clave}=${valor.length}<br>`;
    }



});