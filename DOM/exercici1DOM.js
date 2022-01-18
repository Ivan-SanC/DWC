document.addEventListener("DOMContentLoaded", function(event) { 

let enlacesTotal;
let pTotal;
let plastenlace;
let lastenlance;
let pruebahttp=0;
let valorEnlace;
let map=new Map();
let cont=1;

function obtenerDatos(){
   enlacesTotal=document.getElementsByTagName("a");
   pTotal=document.getElementsByTagName("p");
   plastenlace=enlacesTotal[enlacesTotal.length-2];
   lastenlance=enlacesTotal[enlacesTotal.length-1];

   for(elemento of enlacesTotal){
      if (elemento=="http://prueba/"){
         pruebahttp++;
      }
   }

   for(let elemento of pTotal ){
      map.set(cont,elemento.getElementsByTagName("a"));
      cont++;
   }

}

function imprimirDatos(){
   let info=document.getElementById("info");
   info.innerHTML=`<h3>Nombre d'enllaços de la pàgina = ${enlacesTotal.length}</h3>`;
   info.innerHTML+=`<h3>Nombre de paràgrafs= ${pTotal.length}</h3>`;
   info.innerHTML+=`<h3>El penúltim enllaç apunta a= ${plastenlace}</h3>`;
   info.innerHTML+=`<h3>L'últim enllaç apunta a= ${lastenlance}</h3>`;
   info.innerHTML+=`<h3>${pruebahttp} enllaços apunten a http://prueba</h3>`;
   
   for(let [clave,valor] of map){
      info.innerHTML+=`<h3>Nombre d'enllaços del paràgraf= ${clave}=${valor.length}</h3>`;
   }

}

obtenerDatos();
imprimirDatos();

});