var nom,pass;
var mayus="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var minus=mayus.toLowerCase;
var numeros="0123456789";
var validar=false;
var validaNum=false;
var validaMayus=false;
var validaMinus=false;
var salir=false;


do{
    nom=prompt("Introduce nombre de usuario");

        if(nom==null){
            alert("Cancelado");
            salir=true;
        
        }else{
            for(i=0;i<nom.length;i++){
                if(numeros.indexOf(nom.charAt(i))!=-1){
                validaNum=true;
                    break;
                }
            }
            if(nom!=nom.toLowerCase || validaNum==false){
                alert("El nombre debe tener letras y numeros solo")
                validar=false;
           
            }else{
                validar=true;
            }
        }

        if(salir==false){
        do{
            pass=prompt("Introduce una contrasenya");
            
            
            if(pass==null){
                alert("Cancelado");
                salir=true;
            
            }else{
                for(i=0;i<pass.length;i++){
                    if(numeros.indexOf(pass.charAt(i))!=-1){
                        validaNum=true;
                        break;
                    }
            
                    if(mayus.indexOf(pass.charAt(i))!=-1){
                        validaMayus=true;
                        break;
                    }
            
                    if(minus.indexOf(pass.charAt(i))!=-1){
                        validaMinus=true;
                        break;
                    }
                    //simbolos?
                }
                if( validaMayus==false||validaMinus==false||validaNum==false){
                    alert("La pass debe tener minimo 1 minus, 1 mayus, un numero y un simbolo")
                    validar=false;
               
                }else{
                    validar=true;
                }
            }
            
            }while(validar==false||salir!=true);
        }

}while(validar==false||salir!=true);

document.write("Informacion guardada correctamente.")