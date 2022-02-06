// HABILITAR LOS SELECT CUANDO EL CHECKBOX CORRESPONDIENTE ESTÁ SELECCIONADO
function habilitarSelect(selectId){
    let nodoSelect = document.getElementById(selectId);

    if (nodoSelect.disabled) {
        nodoSelect.disabled = false;
    } else {
        nodoSelect.disabled = true;
    }
};


// Mapeo del tipo de elemento con la función que se necesita utilizar para devolver el valor
const mapeadoTipoElementoFuncion = {
    'text': 'text',
    'textarea': 'text',
    'checkbox': 'check',
    'radio': 'check',
    'select-multiple': 'select',
    'select-one': 'select-one',
    'select-multiple': 'select-multiple'
};

// Funciones para devolver los valores en función del tipo de elemento del formulario
const funcionesParaRetornarValores = {
    'text': function (textbox) {
        return textbox.value
    },
    'check': function(checkbox) {
        let valor = "";
        if (checkbox.checked){
            valor = checkbox.value;
        }
        return valor;
    },
    'select-one': function(select) {
        let valor = "";
        if (!select.disabled) {
            let indiceSeleccionado = select.selectedIndex;
            let opcionSeleccionada = select.options[indiceSeleccionado];
            valor =  opcionSeleccionada.value;
        }
        return valor;
    },
    'select-multiple': function(select) {
        let valor = [];
        if (!select.disabled) {
            for (let indice of select.options) {
                if (indice.selected) {
                    valor.push(indice.value);
                }
            }
        }
        return valor;
    }
}

function retornarValor(elementoFormulario) {

    return funcionesParaRetornarValores[mapeadoTipoElementoFuncion[elementoFormulario.type]](elementoFormulario); 
}

// AL CLICAR EL BOTÓN VALIDAR SE RECORREN TODOS LOS ELEMENTOS DEL FORMULARIO
// Y DEVUELVE LOS VALORES EN UN STRING
function validarFormulario(formularioId) {
    let form = document.getElementById(formularioId);
    let salidaValidacion = "";

    for(let elemento of form.elements){
        if (elemento.type != 'button') {
            salidaValidacion = salidaValidacion + " " + retornarValor(elemento);
        }
    }

    let nodoSalida = document.createElement('p');
    let nodoTextoSalida = document.createTextNode('Resultado de la validación: ' + salidaValidacion);

    nodoSalida.appendChild(nodoTextoSalida);
    document.body.appendChild(nodoSalida);

    
    
}