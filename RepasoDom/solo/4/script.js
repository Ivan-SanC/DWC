
function habilitarSelect(marca) {

    let idselect = document.getElementById(marca);

    if (idselect.disabled) {
        idselect.disabled = false;
    } else {
        idselect.disabled = true;
    }

}


function retornaValor(elementoFormulario) {
    let tipo = elementoFormulario.type;
    let valor = '';

    if (tipo == 'text' || tipo == 'textarea') {
        valor = elementoFormulario.value;
    } else if (tipo == 'checkbox' || tipo == 'radio'){
        if (elementoFormulario.checked){
            valor = elementoFormulario.value;
        }
    } else if (tipo == 'select-one') {
        let indiceSeleccionado = elementoFormulario.selectedIndex;
        if(indiceSeleccionado){
        valor = elementoFormulario.options[indiceSeleccionado].value
        }
    } else if (tipo == 'select-multiple') {
        let arraySelecciones = new Array();
        for (let opcion of elementoFormulario.options){
            if (opcion.selected) {
                arraySelecciones.push(opcion.value);
            }
            valor = arraySelecciones;
        }
    }

    return valor;
}

function validarFormulario(idFormulario) {

    let formulario = document.getElementById(idFormulario);
    let mostrar = "Resultado de la validacion: ";

    for (let elemento of formulario.elements) {
        console.log(elemento.type);
        if (elemento.type !='button') {
            mostrar += ` ${retornaValor(elemento)}`;
        }
    }

    let p=document.createElement('p');
    let contenido=document.createTextNode(mostrar);

    p.appendChild(contenido);
    formulario.appendChild(p);


}