function crearTablaColores(tablaColores,numColores){
    let tabla=document.getElementById(tablaColores);
    //let numColumna=tabla.tBodies[0].rows[0].cells.length;
    let numColumna=tabla.rows[0].cells.length;
    let numFila=document.getElementById(numColores).value;
    
    //limitar numeros entre 1-20
    if(numFila>=1&&numFila<=20&&!isNaN(numFila)){

        //devuelve el cuerpo de la tabla
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

//Se usa en crearTablaColores
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
            
            //cuelgo las columnas de la fila
            fila.appendChild(columna);

        }
        //cuelgo la fila del tbody
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

    //for of para obtener la fila e insertar en las columnas los colores
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
    let numfilas=tabla.tBodies[0].rows.length;


   
    //Cambia la posicion si la tabla esta creada si el valor no es 0
    //y si los valores van de 1 al max de filas
   
        if(tabla.getElementsByTagName('td').length>0 && valor2!=0 && valor1!=0){
            if(valor1<=numfilas&&valor2<numfilas){
                
                //Guardo en las variables toda la informacion de la fila(lo que guarda dentro cells+atributos)
                let pos1=tabla.tBodies[0].rows[valor1].innerHTML;
                let pos2=tabla.tBodies[0].rows[valor2].innerHTML;
                
                //modifica la información que tiene la fila(sobreescribe lo que hay en la fila)
                tabla.rows[valor1].innerHTML = pos2;
                tabla.rows[valor2].innerHTML = pos1;
            }
        }
    limpiarTextbox(); 
}


function cambiarFondo(tablaColores,filaFondo){
    
    //id
    let tabla=document.getElementById(tablaColores);
    let elemento=document.getElementById(filaFondo);


    let numFila=tabla.tBodies[0].rows.length;
    let numColumna=tabla.tBodies[0].rows[0].cells.length;
    
    //if para evitar que no se mueva la cabecera el valor no puede ser 0
    //y que el valor no sea supeiror al numFilas
    if(numFila>=1 && elemento.value<numFila && elemento.value>0){
        
        //variable para obtener la ultima columna
        let color=tabla.tBodies[0].rows[elemento.value].cells[numColumna-1].style.backgroundColor;
        
        //modifico el color del fondo del body
        document.body.style.background =color;
    }
        
    limpiarTextbox();
    
}

//Reset de valores
function limpiarTextbox(){

    let form=document.getElementById("formularioTabla");

    //buscamos en la colección del formulario el elemento
    for (let elemento of form.elements){
        
        //si es tipo textbox limpia su .value
        if(elemento.type=='text'){
            elemento.value="";
        }
    }
    
}
