const conteoLetras = new Map();

function mostrarEstadisticas(textareaId) {
    // INTRODUCIR CÓDIGO AQUÍ

    //rellenar tabla con el textarea
    //contar letras texto
    let textoIntroducido = document.getElementById(textareaId);
    console.log(textoIntroducido.value);

    let letrasContadas = contarLetras(textoIntroducido.value);
    console.log(letrasContadas);

    let estadistica = crearDatosEstadisticas(letrasContadas);
    console.log(estadistica);

    let tabla = document.getElementsByTagName('table');
    let tBody = document.createElement('tbody');

    for (let elemento of estadistica) {
        //crear filas
        let fila = document.createElement('tr');

        for (let x of elemento) {
            //crear columnas
            let columna = document.createElement('td');
            let contenido = document.createTextNode(x);
            columna.appendChild(contenido)
            fila.appendChild(columna);
        }

        tBody.appendChild(fila);

    }
    

        tabla[0].appendChild(tBody);
        
   
      
}

function contarLetras(texto) {
    let numLetrasTotal = 0;
    let patron = /^[a-zA-Z]$/

    for (let letra of texto.toLowerCase()) {
        if (patron.test(letra)) {
            if (!conteoLetras.has(letra)) {
                conteoLetras.set(letra, 1);
            } else {
                conteoLetras.set(letra, conteoLetras.get(letra) + 1);
            }
            numLetrasTotal++;
        }
    }

    return numLetrasTotal;
}

function crearDatosEstadisticas(numLetrasTotal) {
    let arrayDatos = new Array();
    for (let [letra, conteo] of conteoLetras) {
        arrayDatos.push([letra, conteo, (conteo / numLetrasTotal).toFixed(2)]);
    }

    return arrayDatos;
}
