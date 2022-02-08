function crearTablaColores(tablaColores,numColores){
    let tabla=document.getElementById(tablaColores);
    //numero de columnas
    let numColumna=tabla.tBodies[0].rows[0].cells.length;
    //let numColumna=tabla.getElementsByTagName('th').length;
    let numFila=document.getElementById(numColores).value;
    
    //limitar numeros entre 1-20
    if(numFila>=1&&numFila<=20){

        crearTabla(numFila,numColumna);
        console.log(tabla);
            //generar un mapa con Array con 3 numeros rgb
            let datos=generarNumero(numFila);

            introducirDatosTabla(tabla,datos);
            //deshabilita el textbox y lo limpia
            document.getElementById(numColores).disabled=true;
            document.getElementById(numColores).value="";   
    }
}

//se llama en creartablaColores
//introduce valor de las filas
//legth para columnas
//filas<1 || filas>20
//filas=tr columnas=td
//opcion insertCells insertRows
function crearTabla(numFila,numColumna){
    let tblBody=document.getElementsByTagName('tbody')[0];

    //for para crear las filas
    for(let i=1;i<=numFila;i++){
        let fila=document.createElement('tr');
        let columna="";

        //for para crear columnas
        for(let i=1;i<=numColumna;i++){
            columna=document.createElement('td');
            fila.appendChild(columna);

        }
        tblBody.appendChild(fila);

    }
        return tblBody;

}


//función para crear un map la key será la fila
//el array contendra 3 numeros aleatorios para el rgb que son las columnas
function generarNumero(numFila){
    let map=new Map();
    
    //bucle para generar las filas
    for(let n=1;n<=numFila;n++){
        let arrayColor=Array();

        //bucle para generar las columnas con el rgb
        for(let i=0; i<3;i++){
            let num=parseInt(Math.random()*256);
            arrayColor.push(num);
        }
        //se inserta en el map 
        map.set(n,arrayColor);
    }   
    console.log(map);
    return map;
}


//se llama en crearTablaColores
function introducirDatosTabla(tabla,datos){

    //for of para sacar la posición de la row y el color
     for (let[posicion,color]of datos){

    tabla.tBodies[0].rows[posicion].cells[0].innerHTML =color[0];
    tabla.tBodies[0].rows[posicion].cells[1].innerHTML =color[1];
    tabla.tBodies[0].rows[posicion].cells[2].innerHTML =color[2];
    tabla.tBodies[0].rows[posicion].cells[3].style.backgroundColor =  "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
    
    }
    
}

//intenciambian la posicion de las filas 
function permutarFilas(tablaColores,fila1,fila2){
    let tabla=document.getElementById(tablaColores);
    let valor1=document.getElementById(fila1).value;
    let copia=document.getElementById(fila2).value;

    let pos1=document.getElementsByTagName('tr')[document.getElementById(fila1).value];
    let pos2=document.getElementsByTagName('tr')[document.getElementById(fila2).value];
    let aux=document.getElementsByTagName('tr')[parseInt(copia)+1];

   
    //solo cambia posiciones si se han creado columnas y si la posición para cambiar no es 0
    if(tabla.getElementsByTagName('td').length>0 && copia!=0 && valor1!=0){
    
        tabla.tBodies[0].insertBefore(pos2,pos1);
        tabla.tBodies[0].insertBefore(pos1,aux);
    }
}


function cambiarFondo(tablaColores,filaFondo){
    
    let tabla=document.getElementById(tablaColores);
    let elemento=document.getElementById(filaFondo).value;
    let numColumna=tabla.tBodies[0].rows[0].cells.length;
    
    
    let color=tabla.tBodies[0].rows[elemento].cells[numColumna-1].style.backgroundColor;
    console.log(color);
    document.body.style.background =color;

    
}
