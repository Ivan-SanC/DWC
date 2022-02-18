/*A partir de la pàgina web adjuntada (index.html) i utilitzant les funcions DOM, mostrar per pantalla les
següent informacions (dins el <div id=“info“> que hi ha al començament del body) :
    • Nombre d'enllaços de la pàgina.
    • Nombre de paràgrafs de la pàgina.
    • Adreça a la qual enllaça el penúltim enllaç.
    • Adreça a la qual enllaça el darrer enllaç.
    • Número d'enllaços que enllacen a http://prueba
    • Nombre d'enllaços de tots els paràgrafs
    */
    document.addEventListener("DOMContentLoaded", function(event) { 
    let numeroEnlaces=document.getElementsByTagName('a');
    let numeroParrafos=document.getElementsByTagName('p');

    //muestra el valor del atributo
    let penultimoEnlace=document.getElementsByTagName('a')[numeroEnlaces.length-2].href;
    console.log(penultimoEnlace);
    let ultimoEnlace=document.getElementsByTagName('a')[numeroEnlaces.length-1].href;
    console.log(ultimoEnlace);

    let contador=0;
    for(let enlaces of numeroEnlaces){
        if(enlaces.href=='http://prueba/'){
            contador++;
        }
    }
    console.log(contador);

    let mapa=new Map();
    let parrafo=1;

    for(let enlace of numeroParrafos){
        let numeroEnlacesParrafo=enlace.getElementsByTagName('a').length
        console.log(numeroEnlacesParrafo);
        mapa.set(parrafo,numeroEnlacesParrafo);
        parrafo++;
    }


    let info=document.getElementById('info');

    info.innerHTML+= ` Nombre d'enllaços de la pàgina = ${numeroEnlaces.length}<br>`;
    info.innerHTML+= ` Nombre de paràgrafs= ${numeroParrafos.length}<br>`;
    info.innerHTML+= `El penúltim enllaç apunta a= ${penultimoEnlace}<br>`;
    info.innerHTML+= `L'últim enllaç apunta a= ${ultimoEnlace}<br>`;
    info.innerHTML+= `${contador} enllaços apunten a http://prueba <br>`;

    for(let [clave,valor] of mapa){
        let contenido=`Parrafo=${clave}=${valor} <br>`;
        info.innerHTML+=contenido;
    }

    
    

    });