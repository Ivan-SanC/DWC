let expresion= new RegExp('^([XIZ]|[0-9]){1}[0-9]{7}[A-Z]{1}$');
let documento="X8633259V";
let tabla=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

function modificarLetra(nif){
    if(nif.charAt(0)=="X"){
        nif=nif.replace("X","1");

    }else if(nif.charAt(0)=="I"){
        nif=nif.replace("I","1");

    }else if(nif.charAt(0)=="Z"){
        nif=nif.replace("Z","2");
    
    }
    return nif;
}

if (expresion.test(documento)==true){

nif=modificarLetra(documento);
console.log(nif);

let numero=parseInt(nif.slice(0,nif.length-1))%23;
console.log(numero);
console.log(tabla[numero]);

    if(tabla[numero]!=nif.charAt(nif.length-1)){
        console.log(nif.charAt(nif.length-1));
        console.log("Letra incorrecta");
    }else{
        console.log("nif valido");
    }
}else{
    console.log("Documento Incorrecto")
}
