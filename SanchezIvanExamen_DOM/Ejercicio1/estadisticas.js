document.addEventListener("DOMContentLoaded", function(event) {
    let cabecera = ['LETRA','NºVECES','%APARICIONES'];

    // INTRODUCIR CÓDIGO AQUÍ

    //id del div padre
    let div=document.getElementById('divTabla');
    //tabla que contendra las  filas y columnas
    let table=document.createElement('table');
    let tHead=document.createElement('thead');


    let fila=document.createElement('tr');
    let columna="";

    for(let i=0;i<3;i++){
        columna=document.createElement('th');
        let contenido=document.createTextNode(cabecera[i]);

        columna.appendChild(contenido);
        fila.appendChild(columna);

        //estilos
        columna.style.textAlign = "center";
        columna.style.width='250px';
    }

    tHead.appendChild(fila);
    table.appendChild(tHead);
    div.appendChild(table);
    

 });




