//Creo la variable que guarda el id        
var ancho = 50;
var alto = 50;

//Bucle que creara la posicion y los cuadrados
for(var i=0;i<2000;i++){

    //Generea color random
    var x = parseInt(Math.random() * 256);
    var y = parseInt(Math.random() * 256);
    var z = parseInt(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    //Genera posicion random
    var arriba=parseInt(Math.random() *100);
    var izq=parseInt(Math.random()*100);
        //Se le añade el color
        //Se le añade posicion, altura y ancho  
          
        document.write(`<div style='background-color:${bgColor};` + 
    `left:${izq}%;top:${arriba}%;width:${ancho}px;height:${alto}px' ` + 
    `></div>`);
        
}