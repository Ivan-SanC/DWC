document.addEventListener("DOMContentLoaded", function(event) {
function invertirParrafos(){
    let p=document.getElementsByTagName('p');
    let arrayP=Array();
    for (let elemento of p){
        arrayP.push(elemento);
    }
    arrayP.reverse();
    console.log(arrayP);
    for(let i=0; i<p.length;i++){
        p[i].innerHTML=arrayP[i];
    }
    console.log(p);

}
invertirParrafos();
});
