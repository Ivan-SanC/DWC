function crearTablaColores(tablaColores,numColores){
    let tabla=document.getElementById(tablaColores);
    //numero de columnas
    let numColumna=tabla.tBodies[0].rows[0].cells.length;
    //let numColumna=tabla.getElementsByTagName('th').length;
    let numFila=document.getElementById(numColores).value;
    
    //limitar numeros entre 1-20
    if(numFila>=1&&numFila<=20&&!isNaN(numFila)){

        crearTabla(numFila,numColumna);
        console.log(tabla);
            //generar un mapa con Array con 3 numeros rgb
            let datos=generarNumero(numFila);

            introducirDatosTabla(tabla,datos);
    }
    //deshabilita el textbox y lo limpia
    document.getElementById(numColores).disabled=true;
    limpiarTextbox();
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

        //insertrows?
        //tblBody.insertRow[i];
        //console.log(tblBody.insertRow[i]);
        let fila=document.createElement('tr');
        let columna="";

        //for para crear columnas
        for(let j=1;j<=numColumna;j++){
            
            //insertcells?
            //tblBody.rows[i].insertCells(j);
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
    tabla.tBodies[0].rows[posicion].cells[3].style.backgroundColor ="rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
    }
    
}

//intenciambian la posicion de las filas 
function permutarFilas(tablaColores,fila1,fila2){
    let tabla=document.getElementById(tablaColores);
    let valor1=document.getElementById(fila1).value;
    let valor2=document.getElementById(fila2).value;

    let pos1=tabla.tBodies[0].rows[valor1];
    let pos2=tabla.tBodies[0].rows[valor2];
    let aux=tabla.tBodies[0].rows[parseInt(valor2)+1];
    //let pos1=document.getElementsByTagName('tr')[document.getElementById(fila1).value];
    //let pos2=document.getElementsByTagName('tr')[document.getElementById(fila2).value];
    //let aux=document.getElementsByTagName('tr')[parseInt(valor2)+1];

   
    //Cambia la posicion si es number, si no es 0 o si valores no son mayores a la fila
    //y si la tabla se ha creado
    if(!isNaN(valor1)&&!isNaN(valor2)){
        if(tabla.getElementsByTagName('td').length>0 && valor2!=0 && valor1!=0){
            if(valor2<=tabla.tBodies[0].rows.length&&valor1<=tabla.tBodies[0].rows.length){
                //filas seguidas no cambian 1-2 , 2-3
            tabla.tBodies[0].insertBefore(pos2,pos1);
            tabla.tBodies[0].insertBefore(pos1,aux);
            }
        }
    }
    limpiarTextbox(); 
}


function cambiarFondo(tablaColores,filaFondo){
    
    let tabla=document.getElementById(tablaColores);
    let elemento=document.getElementById(filaFondo);
    let numFila=tabla.tBodies[0].rows.length;
    let numColumna=tabla.tBodies[0].rows[0].cells.length;
    
    if(!isNaN(elemento.value)&&numFila>1&&elemento.value<=numFila&&elemento.value>0){
    let color=tabla.tBodies[0].rows[elemento.value].cells[numColumna-1].style.backgroundColor;
    console.log(color);
    document.body.style.background =color;
    }
    limpiarTextbox();
    
}

function limpiarTextbox(){
    document.getElementById("numColores").value="";
    document.getElementById("fila1").value="";
    document.getElementById("fila2").value="";
    document.getElementById("filaFondo").value="";
}
