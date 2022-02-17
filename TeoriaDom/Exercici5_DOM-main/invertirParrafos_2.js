function invertirParrafos(){
    let listaParrafos = [...document.getElementsByTagName('p')];
    /* 1a forma
    listaParrafos.reverse();
    
    for (let parrafo of listaParrafos) {
        document.body.appendChild(parrafo);
    }
    */

    /*2a forma
    listaParrafos.reverse();

    for (let i=listaParrafos.length-1; i>=0; i--) {
        document.body.appendChild(listaParrafo[i]);
    }
    */

    /* 3a forma
    listaParrafos.reverse();

    for (let i=0; i<listaParrafos.length; i++) {
        document.body.appendChild(listaParrafos[i]);
    }
    */

    /* 4a forma */
    for (let i=0; i<listaParrafos.length; i++) {
        document.body.appendChild(listaParrafos[listaParrafos.length - 1 - i]);
    }

    
}