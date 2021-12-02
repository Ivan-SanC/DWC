/*let url=prompt("Introduce una URL");

let expresion= new RegExp('^((http:)(\\/){0,3}){1}([A-Za-z0-9.-]*((\\:{1}.+\\@){1}|\\@{1}))?(([A-Za-z0-9]+((\\.)[A-Za-z0-9]+)){1}(\\:[0-9]*)?)(\\/[A-za-z0-9\\/\\.]+)((\\?).+)$');

//let expresion=new RegExp('^((http:)(\\/){0,3}){1}$');

if(expresion.test(url)==true){
    alert("URL Válida.")
    document.write(`URL: ${url} Valida`);
}else{
    alert("URL Incorrecta")
    document.write(`URL: ${url} Incorrecta`);
}
*/

// Obtención de la URL a comprobar
var url = prompt('Indica la URL que quieres comprobar');

// Partes del patrón de la expresión regular
patronProtocolo = `^(ftp|http|https):\\/{0,3}`;
patronUsuarioPassword = `(([A-Za-z0-9\\-_\\.]*:.+|[A-Za-z0-9\\-_\\.]*)@+)*`;
patronNombreMaquina = `([A-Za-z0-9\\-_]*\.[A-Za-z0-9\\-_]+(\.[A-Za-z0-9\\-_]+)*)`;
patronPuerto = `(:[0-9]{1,5})?`
patronRuta = `(\\/([A-Za-z\\.]+\\/?)*)?`
patronBusqueda = `(\\?.+)?`

// Patrón completo de la URL
var patronURL = new RegExp(patronProtocolo + 
    patronUsuarioPassword +
    patronNombreMaquina + 
    patronPuerto + 
    patronRuta + 
    patronBusqueda);

// Comprobación de la URL de entrada con el patrón indicado
document.write(patronURL.test(url));