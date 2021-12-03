const comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
    let patronNumeroRegistro= new RegExp('^[A-Z]{3}[0-9]{3}$'); // Contiene el patrón para comprobar el número de registro
    let patronNombreCompleto=new RegExp('^([A-Z]{1}[a-z]+)\\s[A-Z]{1-2}\\.$'); // Contiene el patrón para comprobar el nombre
    let patronNumeroSS=new RegExp('^[0-9]{9}$'); // Contiene el patrón para comprobar el número de la seguridad social
    let patronDireccion=new RegExp('^(C\\/|Av\\.)([A-Z]([a-z]+|([a-z]+\\s[a-z]+))),[0-9]+'); // Contiene el patrón para comprobar la dirección

    let patrones = new Map([
        ['numeroRegistro', patronNumeroRegistro],
        ['nombre', patronNombreCompleto],
        ['numeroSS', patronNumeroSS],
        ['direccion', patronDireccion]
    ]);
    //variable que guarda el boleano
    let validar;
    //for of para buscar la clave y hacer la validacion
    for (let [clave,valor] of patrones) {
        if(clave==tipoComprobacion){
            validar=valor.test(elementoAComprobar);
        }
    }
    
    return validar;//Devolver el valor true si se cumple el patrón y false si no se cumple
}
let elemento="Castillo JL.";
let tipo="nombre";
let prueba1= comprobarPatrones(elemento,tipo);
console.log(prueba1);