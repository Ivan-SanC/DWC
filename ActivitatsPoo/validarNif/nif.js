let nif= prompt("Introduce un NIF.");
//let nif= "43223947X";
let expresion= new RegExp('^([XIZ]|[0-9]){1}[0-9]{7}[A-Z]{1}$');

function validarNif(valor){

valor=valor.toUpperCase();
let esValido=true;
let validacion=`El documeneto: ${valor} es correcto.`;

    if(expresion.test(valor)==true){
        alert(" Patron correcto, comprobando si existe.")
    
        let letra=valor.charAt(0);
        if(letra=="X"){
            valor=valor.replace("X","0");
        }else if(letra=="I"){
            valor=valor.replace("I","1");
        }else if(letra=="Z"){
            valor=valor.replace("Z","2");
        }
        
        let letrasValidas="TRWAGMYFPDXBNJZSQVHLCKE";
        let numero=parseInt(valor.substr(0,valor.length-1));
        numero=numero%23;
    
        if(letrasValidas.charAt(numero)!=valor.charAt(valor.length-1)){
            alert("La letra no es la correcta para este nif")
            esValido=false;
        }
    
        
    }else{
        alert("nif Incorrecto.")
        esValido=false;
    }

    if(!esValido){
        validacion=`El documento ${valor} no es correcto compruebe que está bien escrito.`
    }

    return validacion;
}

document.write(validarNif(nif));


