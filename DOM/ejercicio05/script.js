document.addEventListener("DOMContentLoaded", function(event) {
function invertirParrafos(){
    let p=document.getElementsByTagName('p');
    let body=document.body;
    let arrayP=Array();
    
    for (let elemento of p){
        arrayP.push(elemento);
    }

    let invertido=arrayP.reverse();
    console.log(invertido);
    console.log(body);

    for(let i=0; i<p.length;i++){
       body.appendChild(invertido[i]);
    }
    
}
invertirParrafos();
});
