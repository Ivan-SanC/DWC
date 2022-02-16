//este event solo necesitamos cuando queremos que carge primero el dom y luego el script
//esta escuchando continuo
//con un boton no es necesario
document.addEventListener("DOMContentLoaded", function(event) {
function invertirParrafos(){
    //devuelve una collection que no podemos trabajar con ella necesita pasar a array
    let p=document.getElementsByTagName('p');
    //lo mete todo en un array con la propagacion
    let listaParrafos=[...document.getElementsByTagName('p')];
    let body=document.body;
    let arrayP=Array();
    
    for (let elemento of p){
        arrayP.push(elemento);
    }

    let invertido=arrayP.reverse();
    console.log(invertido);
    console.log(body);
    
    /*
    for (let parrafo of listaParrafos){
        documen.body.appendchild(parrafo);
    }
    */

    for(let i=0; i<p.length;i++){
       body.appendChild(invertido[i]);
    }
    
}
invertirParrafos();
});
