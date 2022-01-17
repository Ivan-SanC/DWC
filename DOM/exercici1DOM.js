document.addEventListener("DOMContentLoaded", function(event) { 

let enlacesTotal;
let pTotal;
let plastenlace;
let lastenlance;
let pruebahttp;
let valorEnlace;

function obtenerDatos(){
   enlacesTotal=document.getElementsByTagName("a");
   pTotal=document.getElementsByTagName("p");
   plastenlace=enlacesTotal[enlacesTotal.length-2];
   lastenlance=enlacesTotal[enlacesTotal.length-1];
   for()

   
}

function imprimirDatos(){
   let info=document.getElementById("info");
   info.innerHTML=`<p>Nombre d'enllaços de la pàgina = ${enlacesTotal.length}</p>`;
   info.innerHTML+=`<p>Nombre de paràgrafs= ${pTotal.length}</p>`;
   info.innerHTML+=`<p>El penúltim enllaç apunta a= ${plastenlace}</p>`;
   info.innerHTML+=`<p>L'últim enllaç aounta a= ${lastenlance}</p>`;
   info.innerHTML+=`<p>${pruebahttp} enllaços apunten a ${valorEnlace}</p>`

}
obtenerDatos();
imprimirDatos();

});