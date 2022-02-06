
function borrarCamposTexto() {
    document.getElementById('text').value = '';
    document.getElementById('fila').value = '';
    document.getElementById('columna').value = '';
}

function agregarColumna(tablaId, numColumnaId, textoId){
    let tbodyTabla = document.getElementById(tablaId).tBodies[0];
    let posicionColumnaInsertar = document.getElementById(numColumnaId).value - 1;
    let textoCeldaInsertar = document.getElementById(textoId).value;

    // Reiniciar campos texto
    borrarCamposTexto();
    
    let numeroFilasIniciales = tbodyTabla.rows.length;
    let numeroColumnasIniciales = tbodyTabla.rows[0].cells.length;

    if ((posicionColumnaInsertar >= 0) && (posicionColumnaInsertar <= numeroColumnasIniciales)) {
        for (let i=0; i<numeroFilasIniciales; i++){
            tbodyTabla.rows[i].insertCell(posicionColumnaInsertar);
            tbodyTabla.rows[i].cells[posicionColumnaInsertar].innerHTML = textoCeldaInsertar;
        }
    }
}

function agregarFila(tablaId, numFilaId, textoId){
    let tbodyTabla = document.getElementById(tablaId).tBodies[0];
    let posicionFilaInsertar = document.getElementById(numFilaId).value - 1;
    let textoCeldaInsertar = document.getElementById(textoId).value;

    // Reiniciar campos texto
    borrarCamposTexto();
    
    // Número de filas y columnas iniciales de la tabla
    let numeroFilasIniciales = tbodyTabla.rows.length;
    let numeroColumnasIniciales = tbodyTabla.rows[0].cells.length;

    if ((posicionFilaInsertar >= 0) && (posicionFilaInsertar <= numeroFilasIniciales)) {
        // Insertar la fila en la posición indicada
        tbodyTabla.insertRow(posicionFilaInsertar);
    
        let filaNueva = tabla.tBodies[0].rows[posicionFilaInsertar];
        // Insertar las columnas para la fila nueva
        for (let i=0; i<numeroColumnasIniciales; i++){
            filaNueva.insertCell(i);
            filaNueva.cells[i].innerHTML = textoCeldaInsertar
        }
    }
    
}

function cambiarValorCelda(tablaId, numFilaId, numColumnaId, textoId){
    let tbodyTabla = document.getElementById(tablaId);
    let posicionFilaInsertar = document.getElementById(numFilaId).value - 1;
    let posicionColumnaInsertar = document.getElementById(numColumnaId).value - 1;
    let textoCeldaInsertar = document.getElementById(textoId).value;

    // Número de filas y columnas iniciales de la tabla
    let numeroFilasIniciales = tbodyTabla.rows.length;
    let numeroColumnasIniciales = tbodyTabla.rows[0].cells.length;

    // Reiniciar campos texto
    borrarCamposTexto();

    if ((posicionColumnaInsertar >= 0) && (posicionColumnaInsertar <= numeroColumnasIniciales) && (posicionFilaInsertar >= 0) && (posicionFilaInsertar <= numeroFilasIniciales)) {
        tbodyTabla.rows[posicionFilaInsertar].cells[posicionColumnaInsertar].innerHTML = textoCeldaInsertar;
    }
}

function borrarColumna(tablaId, numColumnaId){
    let tbodyTabla = document.getElementById(tablaId);
    let posicionColumnaBorrar = document.getElementById(numColumnaId).value - 1;

    let numeroFilasIniciales = tbodyTabla.rows.length;
    let numeroColumnasIniciales = tbodyTabla.rows[0].cells.length;

    // Reiniciar campos texto
    borrarCamposTexto();

    if ((posicionColumnaBorrar >= 0) && (posicionColumnaBorrar <= numeroColumnasIniciales)) {
        for (let i=0; i<numeroFilasIniciales; i++){
            tbodyTabla.rows[i].deleteCell(posicionColumnaBorrar);
        }
    }
}

function borrarFila(tablaId, numFilaId) {
    let tbodyTabla = document.getElementById(tablaId).tBodies[0];
    let posicionFilaBorrar = document.getElementById(numFilaId).value - 1;

    let numeroFilasIniciales = tbodyTabla.rows.length;

    // Reiniciar campos texto
    borrarCamposTexto();

    if ((posicionFilaBorrar >= 0) && (posicionFilaBorrar <= numeroFilasIniciales)) {
        tbodyTabla.deleteRow(posicionFilaBorrar);
    }
}

function cambiarValorTodasCeldas(tablaId, textoId){
    let tbodyTabla = document.getElementById(tablaId);
    let textoCeldaInsertar = document.getElementById(textoId).value;

    let numeroFilasIniciales = tbodyTabla.rows.length;
    let numeroColumnasIniciales =  tbodyTabla.rows[0].cells.length;

    // Reiniciar campos texto
    borrarCamposTexto();

    for (let i=0; i<numeroFilasIniciales; i++){
        for (let j=0; j<numeroColumnasIniciales; j++){
            tbodyTabla.rows[i].cells[j].innerHTML = textoCeldaInsertar;
        }
    }

}