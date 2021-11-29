let url;
let http= new RegExp('^[http:][/]{0,3}$');
let user= new RegExp('^[A-Za-z0-9.-]*$');
let siPass= new RegExp('^:{1}.+$');
//@ al final de la pass si no hay al final del user
let host= new RegExp('^[A-za-z0-9]([.][A-za-z0-9])+$[:]?[0-9]');
let valiadacionUrl= new RegExp('');


url=prompt("Introduce una URL");

function validarUrl(variable){

}
