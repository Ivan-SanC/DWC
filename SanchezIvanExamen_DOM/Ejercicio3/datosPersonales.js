function validarDatos(idformulario, boton) {
    let formulario = document.getElementById(idformulario);


    //datos
    let divDatos = document.getElementById('divDatosPersonales');
    let validaTexto = /^[a-zA-Záéíóúü]+( ?[a-zA-Záéíóúü])*$/;
    let resultado = "";

    //edad
    let divEdad = document.getElementById('divRangoEdad');

    for (let elemento of formulario) {

        if (boton == 'datos') {
            if (elemento.type == 'text') {
                if (validaTexto.test(elemento.value) == false) {
                    elemento.style.backgroundColor = 'red';
                    resultado = 'Rellena los campos';
                } else {
                    resultado += ` ${elemento.value}`;
                    elemento.style.backgroundColor = 'white';
                }

            }

        }


        if (boton == 'edad') {

            if (elemento.type == 'radio') {
                let idEdad = document.getElementById('divRangoEdad');

                if (elemento.checked) {
                    resultado = `Te encuentras en el rango de edad de: ${elemento.value}`;
                    idEdad.style.backgroundColor = 'rgba(238, 130, 238, 0.192)';
                    elemento.checked = false;
                    break;

                } else {
                    resultado = `Selecciona la edad.`;
                    idEdad.style.backgroundColor = 'red';

                }

            }
        }

    }

    let salidaPantalla = document.createElement('p');
    let textoSalida = document.createTextNode(resultado);
    if (boton == 'datos') {
        salidaPantalla.appendChild(textoSalida);
        if (divDatos.children.length == 10) {
            divDatos.appendChild(salidaPantalla);
        } else {
            divDatos.replaceChild(salidaPantalla, divDatos.children[divDatos.children.length - 1]);
        }
    }else if(boton=='edad'){
        salidaPantalla.appendChild(textoSalida);
        if (divEdad.children.length == 16) {
            divEdad.appendChild(salidaPantalla);
        } else {
            divEdad.replaceChild(salidaPantalla, divEdad.children[divEdad.children.length - 1]);
        }

    }

    limpiarTextbox();

}

function limpiarTextbox(){

    let form=document.getElementById("formulario");

    //buscamos en la colección del formulario el elemento
    for (let elemento of form.elements){
        
        //si es tipo textbox limpia su .value
        if(elemento.type=='text'){
            elemento.value="";
        }
    }
    
}