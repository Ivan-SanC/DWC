class ColorAleatorioRGB {
    constructor(){
        this.rojo = parseInt(Math.random()*256);
        this.verde = parseInt(Math.random()*256);
        this.azul = parseInt(Math.random()*256);
    }
}

function crearDatos(numeroFilas) {
    let arrayDatos = new Array();
    for (let i = 0; i<numeroFilas; i++){
        arrayDatos.push(new ColorAleatorioRGB);
    }
    return arrayDatos;
}

function borrarTextBoxes() {
    let formulario = document.forms[0];

    for (let elemento of formulario) {
        if (elemento.type == 'text') {
            elemento.value = "";
        }
    }
}

function crearTablaColores(tablaId, textoId) {
    let tabla = document.getElementById(tablaId);
    let numeroFilas = document.getElementById(textoId).value;
    let numeroColumnas = tabla.rows[0].cells.length
    let patronNumero = /^(0|1?[0-9]|20)$/;

    borrarTextBoxes();
    
    document.getElementById(textoId).disabled=true;

    let arrayColores = crearDatos(numeroFilas);

    if (patronNumero.test(numeroFilas)) {
        let tBody = crearTabla(numeroFilas, numeroColumnas);
        tabla.appendChild(tBody);

        introducirDatosTabla(tabla, arrayColores);
    }
}

function crearTabla(numeroFilas, numeroColumnas){
    let tBody = document.createElement('tbody');

    for (let i=0; i<numeroFilas; i++) {
        // let elementoFila = document.createElement('tr');
        tBody.insertRow(i);
        for (let j=0; j<numeroColumnas; j++) {
            tBody.rows[i].insertCell(j);
        }
    }

    return tBody;
}

    function introducirDatosTabla(elementoTabla, datosTabla) {
        let tbody = elementoTabla.tBodies[0];
        let thead = elementoTabla.tHead;
        let numFilas = tbody.rows.length;
        let numColumnas = thead.rows[0].cells.length;
        
        let componenteColor;

        for (let i=0; i<numFilas; i++) {
            for (let j=0; j<numColumnas-1; j++) {
                componenteColor = thead.rows[0].cells[j].innerHTML;
                tbody.rows[i].cells[j].innerHTML = datosTabla[i][componenteColor.toLowerCase()];
            }

            tbody.rows[i].cells[numColumnas-1].style.backgroundColor = `rgb(${datosTabla[i].rojo}, ${datosTabla[i].verde}, ${datosTabla[i].azul})`;
        }   
    }

function permutarFilas(tablaId, textoFila1Id, textoFila2Id) {
    let tabla = document.getElementById(tablaId);
    let posicionFila1 = parseInt(document.getElementById(textoFila1Id).value);
    let posicionFila2 = parseInt(document.getElementById(textoFila2Id).value);

    borrarTextBoxes();

    nodoPadre = tabla.tBodies[0];

    if (nodoPadre.rows.length > 0) {
        if (posicionFila1 > 0 && posicionFila2 > 0 && posicionFila1 <= 20 && posicionFila2 <= 20) {
            let fila1 = nodoPadre.rows[posicionFila1-1];
            let clonFila1 = fila1.cloneNode(true);
            let fila2 = nodoPadre.rows[posicionFila2-1];
            let clonFila2 = fila2.cloneNode(true);

            nodoPadre.replaceChild(clonFila1, fila2);
            nodoPadre.replaceChild(clonFila2, fila1);
        } 
    }
}

function cambiarFondo(tablaId,textoFilaId) {
    let tabla = document.getElementById(tablaId);
    let posicionColor = parseInt(document.getElementById(textoFilaId).value);
    
    borrarTextBoxes();

    if (tabla.rows.length > 0) {
        let fila = tabla.rows[posicionColor];
        let rojo = fila.children[0].childNodes[0].textContent;
        let verde = fila.children[1].childNodes[0].textContent;
        let azul = fila.children[2].childNodes[0].textContent;
        document.body.style.backgroundColor = `rgb(${rojo},${verde},${azul})`;
    };
}