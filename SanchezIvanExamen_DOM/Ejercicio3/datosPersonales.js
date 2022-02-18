function validarDatos(idformulario) {
    let formulario = document.getElementById(idformulario);
    let validaTexto = /^[a-zA-Záéíóúü]+( ?[a-zA-Záéíóúü])*$/;

    let resultado = "";
    for (let elemento of formulario) {
        if (elemento.type == 'text') {
            if (validaTexto.test(elemento.value) == false) {
                elemento.style.backgroundColor = 'red';
                let error = 'Rellena los campos';
            } else {
                resultado += ` ${elemento.value}`;
            }
            let salidaPantalla = document.createElement('p');
            let textoSalida = document.createTextNode(resultado);
            salidaPantalla.appendChild(textoSalida);
            formulario.appendChild(salidaPantalla);

        }

        if (elemento.type == 'radio') {
            if (elemento.checked) {
               let valor = `Te encuentras en el rango de edad ${elemento.value}`;
               let salida = document.createElement('p');
                let radio = document.createTextNode(valor);
                salida.appendChild(radio);
                formulario.appendChild(salida);
            }else{
                let idEdad=document.getElementById('divRangoEdad')
                idEdad.style.style.backgroundColor='red';

            }

        }

    }
    l

    
}