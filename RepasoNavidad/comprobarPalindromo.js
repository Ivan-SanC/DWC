let str;
let newStr;
let reversedStr;


//mira que no haya solo espacios en blanco
function isBlank(cadena) {
    return (/^\s*$/.test(cadena));
}


//introducimos cadena
do{
str=prompt("Introduce una cadena de texto.");

}while(isBlank(str));


//mostramos cadena
document.write("<strong>La cadena de texto es:</strong> "+str+".</br>")


//limpiar cadena
function limpiarCadena(cadena){

    //quitamos espacios
    newStr=cadena.replace(/\s/g,"").toLocaleLowerCase();

    //quitamos tildes
	const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','ü':'u'};
	return newStr.split('').map( letra => acentos[letra]||letra).join('');	
}

newStr=limpiarCadena(str);
document.write(`<strong>Cadena limpia para comprobación:</strong> ${newStr} </br>`);


//Comprobar Palindromo
function comprobarCadena(cadena){
    reversedStr=cadena.split('').reverse().join('');

    if(cadena===reversedStr){
        return document.write("Es palíndromo");
    }else{
        return document.write("No es palíndromo");
    }

}
comprobarCadena(newStr);
