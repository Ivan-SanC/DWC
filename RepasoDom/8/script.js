document.addEventListener("DOMContentLoaded", function(event) {
    let textarea = document.getElementById('areatexto');
    let nodoParrafo = document.createElement('p');
    nodoParrafo.id = 'parrafoCaracteres'
    let nodoTextoParrafo = document.createTextNode(`Pots escriure ${textarea.maxLength - textarea.value.length} caràcters`)

    nodoParrafo.appendChild(nodoTextoParrafo);
    document.getElementById('areaFormulario').appendChild(nodoParrafo);
});


function insertarNumeroCaracteres(parrafoCaracteres,areatexto){
    let parrafo=document.getElementById(parrafoCaracteres);
    let textarea=document.getElementById(areatexto);

    //muestra la medida de lo que estamos metiendo en el text area
    console.log(textarea.value.length);
    parrafo.innerHTML=`Pots escriure ${textarea.maxLength - textarea.value.length} caràcters`;

}