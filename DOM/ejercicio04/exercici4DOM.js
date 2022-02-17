function habilitarSelect(selectId) {
    let elementoSelect = document.getElementById(selectId);

    if (elementoSelect.disabled){
        elementoSelect.disabled = false;
    } else {
        elementoSelect.disabled = true;
    }
}

const elementosFunciones = {'text':'text',
    'textarea': 'text',
    'checkbox': 'check',
    'radio':'check',
    'select-one':'select-one',
    'select-multiple': 'select-multiple'
    };

const funcionesRetornar = {
    'text': function(elementoFormulario) {
        return elementoFormulario.value;
    },
    'check': function(elementoFormulario) {
        let valor = '';
        if (elementoFormulario.checked){
            valor =  elementoFormulario.value;
        }
        return valor;
    },
    'select-one': function(elementoFormulario) {
        let valor = '';
        let indiceSeleccionado = elementoFormulario.selectedIndex;
        valor = elementoFormulario.options[indiceSeleccionado].value;
        return valor;
         
    },
    'select-multiple': function(elementoFormulario) {
        let arraySelecciones = new Array();
        for (let opcion of elementoFormulario.options){
            if (opcion.selected) {
                arraySelecciones.push(opcion.value);
            }
        }
        return arraySelecciones;
    }
};

function retornaValor(elementoFormulario){
    let tipo = elementoFormulario.type;

    return funcionesRetornar[elementosFunciones[tipo]](elementoFormulario);

    //funcionesRetornar.elementosFunciones.tipo()

    /*
    if (tipo == 'text' || tipo == 'textarea') {
        valor = elementoFormulario.value;
    } else if (tipo == 'checkbox' || tipo == 'radio'){
        if (elementoFormulario.checked){
            valor = elementoFormulario.value;
        }
    } else if (tipo == 'select-one') {
        let indiceSeleccionado = elementoFormulario.selectedIndex;
        valor = elementoFormulario.options[indiceSeleccionado].value
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
*/
}


function validarFormulario(formularioId){
    let formulario = document.getElementById(formularioId);
    let muestraPantalla = "Resultado de la validación: ";
    for (let elemento of formulario) {
        if (elemento.type != 'button') {
            muestraPantalla += ` ${retornaValor(elemento)}`;
        }
    }

    let salidaPantalla = document.createElement('p');
    let textoSalida = document.createTextNode(muestraPantalla);

    salidaPantalla.appendChild(textoSalida);
    formulario.appendChild(salidaPantalla);

    
}