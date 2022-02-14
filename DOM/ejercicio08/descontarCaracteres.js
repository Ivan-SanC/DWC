document.addEventListener("DOMContentLoaded", function(event) {
    let textarea = document.getElementById('areatexto');
    let nodoParrafo = document.createElement('p');
    nodoParrafo.id = 'parrafoCaracteres'
    let nodoTextoParrafo = document.createTextNode(`Pots escriure ${textarea.maxLength} caràcters`)

    nodoParrafo.appendChild(nodoTextoParrafo);
    document.getElementById('areaFormulario').appendChild(nodoParrafo);

});

function insertarNumeroCaracteres(parrafoCaracteres,textarea){
    let idText= document.getElementById(textarea);
    console.log(idText.maxLength);

    let valorText=idText.value.length;
    console.log(valorText);
    
    let idParrafo=document.getElementById(parrafoCaracteres);
    idParrafo.innerHTML=`Pots escriure ${idText.maxLength - valorText} caràcters`

}
