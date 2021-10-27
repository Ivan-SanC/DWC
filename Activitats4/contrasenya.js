var nom,pass;
var mayus="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var minus=mayus.toLowerCase();
var numeros="0123456789";
var validar=false;
var validaNum=false;
var validaMayus=false;
var validaMinus=false;
var validaSimbolo=false;
var salir=false;

do{

    validaNum=false;
    validaMayus=false;
    
    nom=prompt("Introduce el usuario");

        if(nom==null){
            
            alert("Cancelado")
            salir=true;
        
        }else{
            for(i=0;i<nom.length;i++){
                if(numeros.indexOf(nom.charAt(i))!=-1){
                validaNum=true;
                    
                }else if(mayus.indexOf(nom.charAt(i))!=-1){
                    validaMayus=true;
                    
                }
            }
            if(nom!=nom.toLowerCase() || validaNum==false|| validaMayus==true){
                validar=false;
                alert("El nombre debe tener letras y numeros solo")
           
            }else{
                validar=true;
                alert("usuario correcto")
            }
        }


        if(salir==false&&validar==true){
        do{
             validaNum=false;
             validaMayus=false;
             validaMinus=false;
             validaSimbolo=false;
             
            pass=prompt("Introduce la pass");
            
            
            if(pass==null){
                alert("Cancelado");
                salir=true;
            
            }else{
                for(i=0;i<pass.length;i++){
                   
                    if(numeros.indexOf(pass.charAt(i))!=-1){
                        validaNum=true;
                        
                    }else if(mayus.indexOf(pass.charAt(i))!=-1){
                        validaMayus=true;
                        
                    }else if(minus.indexOf(pass.charAt(i))!=-1){
                        validaMinus=true;
                        
                    }else{
                        validaSimbolo=true;
                    }
                    //simbolos?
                    
                }
                if( validaMayus==false||validaMinus==false||validaNum==false||validaSimbolo==false){
                    alert("La pass debe tener minimo 1 minus, 1 mayus, un numero y un simbolo")
                    validar=false;
               
                }else{
                    validar=true;
                }
            }
            
            }while(validar==false && salir!=true);
        }

}while(validar==false && salir==false);
if(salir==true){
    document.write("Se ha cancelado la introduccion de datos.");
}else{
document.write("Informacion guardada correctamente.");
}