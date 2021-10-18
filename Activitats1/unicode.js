
//Creamos los elementos del interior de la tabla
document.write("<tr> <th>Posición</th> <th>Unicode</th> </tr>");

//Bluce que ira dando el valor de i que usaremos para el codigo
for(var i=0;i<10000;i++){
    document.write("<tr><td>");

    //Nos idídca la posición
    document.write(i);
    document.write("</td><td>")

    //Nos muestra el valor en unicóde
    document.write("&#"+i);
    document.write("</td></tr>");
    
}