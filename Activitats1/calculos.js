var nom;
var apellido1;
var apellido2;
var sueldo;
var edad;

function introducirDatos(){
    nom=prompt("Nombre: ");
    apellido1=prompt("Primer apellido: ");
    apellido2=prompt("Segundo apellido: ");
    edad=prompt("Introduce edad: ")
    sueldo= prompt("Sueldo: ");
}

function devuelveDatos(){
    if(sueldo>=1000 && sueldo<=2000){
        if(edad>45){
        document.write("Nombre: "+ nom+"</br>Apellidos: "+ apellido1+" &nbsp"+apellido2+"</br>Edad: "+edad+" </br>Sueldo: "+sueldo*1.03);  
        }else{
        document.write("Nombre: "+ nom+"</br>Apellidos: "+ apellido1+" &nbsp"+apellido2+"</br>Edad: "+edad+" </br>Sueldo: "+sueldo*1.1);    
        }
    }else if(sueldo<1000){
        if(edad<30){
       var sueldo2=1100;
        document.write("Nombre: "+ nom+"</br>Apellidos: "+ apellido1+" &nbsp"+apellido2+"</br>Edad: "+edad+" </br>Sueldo: "+sueldo2);
        }else if(edad>=30 && edad<=45){
        document.write("Nombre: "+ nom+"</br>Apellidos: "+ apellido1+" &nbsp"+apellido2+"</br>Edad: "+edad+" </br>Sueldo: "+sueldo*1.03);    
        }else{
            document.write("Nombre: "+ nom+"</br>Apellidos: "+ apellido1+" &nbsp"+apellido2+"</br>Edad: "+edad+" </br>Sueldo: "+sueldo*1.15);
        }
    }else{
        document.write("Nombre: "+ nom+"</br>Apellidos: "+ apellido1+" &nbsp"+apellido2+"</br>Edad: "+edad+" </br>Sueldo: "+sueldo);
    }
}

introducirDatos();
devuelveDatos();