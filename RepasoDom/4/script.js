function habilitarSelect(marca){
    let idselect=document.getElementById(marca);
    
    if(idselect.disabled){
        idselect.disabled=false;
    }else{
        idselect.disabled=true;
    }

}

//elementosFunciones se le pasa la variable tipo para indicar que valor tomara
const elementosFunciones = {
    'text':'text',
    'textarea': 'text',
    'checkbox': 'check',
    'radio':'check',
    'select-one':'select-one',
    'select-multiple': 'select-multiple'
    };

    //el primer valor compara que elementos Funciones sea igual si es igual hara la funcion correspondiente
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
    let tipo=elementoFormulario.type;
    
    //entramos en la funcion a retornar y comparamos los elementosFunciones que tendra el valor del tipo
    //
    return funcionesRetornar[elementosFunciones[tipo]](elementoFormulario);

}

function validarFormulario(form){
    let formulario = document.getElementById(form);
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