var respuesta;
var factorial=1;


respuesta=prompt("Indica un número(debe ser un numero entero positivo");

if (respuesta<0|| isNaN(Number(respuesta))){
    alert(`el numero introducido no es valido`)
}else{
    for(let i=1;i<=respuesta;i++){
        factorial*=i;
    }
    alert (`el factorial de ${respuesta} es ${factorial}`)
}