let patronNumeroRegistro= new RegExp('^[A-Z]{3}[0-9]{3}$'); // Contiene el patrón para comprobar el número de registro
let patronNombreCompleto=new RegExp('^[A-Z]{1}[a-záéíóúü]*\\s[A-Z]{1,2}\\.$'); // Contiene el patrón para comprobar el nombre
let patronNumeroSS= new RegExp('^[0-9]{9}$'); // Contiene el patrón para comprobar el número de la seguridad social
let patronDireccion=new RegExp('^(C\/||Av\.)[A-Z]{1}[a-záéíóúü]+( [a-záéíóúü]*)*, [0-9]+$'); // Contiene el patrón para comprobar la dirección

let prueba="C/Almirane";
console.log(patronDireccion.test(prueba));