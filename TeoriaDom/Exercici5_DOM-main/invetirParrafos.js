function invertirParrafos(){
    let listaParrafos = [...document.getElementsByTagName('p')].reverse();

    for (let parrafo of listaParrafos){
        document.body.appendChild(parrafo);
    };
}