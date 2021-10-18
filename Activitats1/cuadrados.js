//Creo la variable que guarda el id        


//Bucle que creara la posicion y los cuadrados
for(var i=0;i<2000;i++){

    //Generea color random
    var x = parseInt(Math.random() * 256);
    var y = parseInt(Math.random() * 256);
    var z = parseInt(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    //Genera posicion random
    var top=parseInt(Math.random() *100);
    var left=parseInt(Math.random()*100);
        //Se le añade el color
        //Se le añade posicion, altura y ancho  
          
        document.write(' <div  style="width:50px; height:50px; background:'+bgColor+';top:'+
        top+';left:'+left+'"></div>');
        
}