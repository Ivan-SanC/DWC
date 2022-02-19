const conteoLetras = new Map();
console.log(conteoLetras);

function mostrarEstadisticas(textareaId) {
    // INTRODUCIR CÓDIGO AQUÍ

    //id textarea
    let textoIntroducido = document.getElementById(textareaId);
    console.log(textoIntroducido.value);

    //crea el mapa
    let letrasContadas = contarLetras(textoIntroducido.value);
    console.log(letrasContadas);

    //saco los datos que se introducen en la tabla
    let estadistica = crearDatosEstadisticas(letrasContadas);
    console.log(estadistica);

    //tabla
    let tabla = document.getElementsByTagName('table');

    //creo el body
    let tBody = document.createElement('tbody');
    //introduzco el tbody en la tabla
    tabla[0].appendChild(tBody);

    //Recorro el array
    for (let elemento of estadistica) {
        //crear filas
        let fila = document.createElement('tr');

        for (let x of elemento) {
            //crear columnas e inserta valor
            let columna = document.createElement('td');
            let contenido = document.createTextNode(x);
            columna.appendChild(contenido)
            fila.appendChild(columna);
        }

        tBody.appendChild(fila);
    }

    //remplazo el tbody antiguo por le nuevo
    tabla[0].replaceChild(tBody, tabla[0].children[1]);
    console.log(tBody.children);

    //elimino los valores del mapa
    for (let [clave] of conteoLetras) {
        conteoLetras.delete(clave);
    }


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
