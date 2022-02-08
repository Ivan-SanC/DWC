function crearTablaColores(tablaColores,numColores){
    let tabla=document.getElementById(tablaColores);
    let numColumna=tabla.getElementsByTagName('th').length;
    let numFila=document.getElementById(numColores).value;
    
    //limitar numeros
    if(numFila>=1&&numFila<=20){
        crearTabla(numFila,numColumna);
        console.log(tabla);
            let datos=generarNumero(numFila);
            //añadir funcion datos
            introducirDatosTabla(tabla,datos);
        
    }
    //deshabilitar input text al hacer click en crear Tabla
    

}

//se llama en creartablaColores
//introduce valor de las filas
//legth para columnas
//filas<1 || filas>20
//filas=tr columnas=td
//opcion insertCells insertRows
function crearTabla(numFila,numColumna){
   // let cont=0;
    var tblBody=document.getElementsByTagName('tbody')[0];
    for(let i=1;i<=numFila;i++){
        var fila=document.createElement('tr');
        //cont++;
        let columna="";
        for(let i=1;i<=numColumna;i++){
            
             columna=document.createElement('td');
            fila.appendChild(columna);
        }
        tblBody.appendChild(fila);
    }
        return tblBody;
}



function generarNumero(numFila){
    let map=new Map();
    
    for(let n=1;n<=numFila;n++){
        let arrayColor=Array();
        for(let i=0; i<3;i++){
            let num=parseInt(Math.random()*256);
            arrayColor.push(num);
        }
        
        map.set(n,arrayColor);
    }   
    console.log(map);
    return map;
}

//se llama en crearTablaColores
function introducirDatosTabla(tabla,datos){

    //let numFilas=tabla.getElementsByTagName('tr').length;
    
        for (let[posicion,color]of datos){

    //bucle cells? generar num randoms todas las veces
    tabla.tBodies[0].rows[posicion].cells[0].innerHTML =color[0];
    tabla.tBodies[0].rows[posicion].cells[1].innerHTML =color[1];
    tabla.tBodies[0].rows[posicion].cells[2].innerHTML =color[2];
    tabla.tBodies[0].rows[posicion].cells[3].style.backgroundColor =  "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
    
    }
    
}

//intencianvian la posicionde las filas 
function permutarFilas(tablaColores,fila1,fila2){
    let tabla=document.getElementById(tablaColores);
    let copia=document.getElementById(fila2).value;
    let pos1=document.getElementsByTagName('tr')[document.getElementById(fila1).value];
    let pos2=document.getElementsByTagName('tr')[document.getElementById(fila2).value];
    let aux=document.getElementsByTagName('tr')[parseInt(copia)+1];
   

    if(tabla.getElementsByTagName('td').length>0){
    
        tabla.tBodies[0].insertBefore(pos2,pos1);

        tabla.tBodies[0].insertBefore(pos1,aux);

    }
    //usar el before y 3 variables

}


function cambiarFondo(tablaColores,filaFondo){
    //copiar el value de la ultima cell y modificar el style de la pagina
}

//deshabilitar cuadro de texto primer boton
//añadir filas y columnas a la tabla ya existente
