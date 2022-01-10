
let hora;
let validar= new RegExp('^[0-9]{2}\\:[0-9]{2}(\\:[0-9]{2})?$');


do{
    hora=prompt("Introduce la hora formato hh:mm(:ss)");

}while(!validar.test(hora) && hora!=null);

if(hora!=null){
    document.write("La hora es: "+hora);
}else{
    document.write("Se cancelo la introduccion de hora");
}