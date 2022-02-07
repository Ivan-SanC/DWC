function crearTablaColores(tablaColores,numColores){
    let tabla=document.getElementById(tablaColores);
    let numColumna=tabla.getElementsByTagName('th').length;
    let numFila=document.getElementById(numColores).value;
    crearTabla(numFila,numColumna);

}

//se llama en creartablaColores
//introduce valor de las filas
//legth para columnas
//filas=tr columnas=td
function crearTabla(numFila,numColumna){
    
    for(let i=1;i<=numFila;i++){
        let fila=document.createElement('tr');
        

        for(let i=1;i<=numColumna;i++){
            let filaElemento=tabla.getElementsByTagName('tr');
            let columna=document.createElement('td');
            filaElemento.appendChild(columna);
        }
    }

}
function generarNumero(){
    let arrayColor=Array();
    for(let i=0; i<3;i++){
        let num=parseInt(Math.random()*256);
        arrayColor.push(num);
    }
    return arrayColor;
}

//se llama en crearTablaColores
function introducirDatosTabla(tabla,datos){


}

//intencianvian la posicionde las filas 
function permutarFilas(tablaColores,fila1,fila2){

}


function cambiarFondo(tablaColores,filaFondo){

}

//deshabilitar cuadro de texto primer boton
//añadir filas y columnas a la tabla ya existente
