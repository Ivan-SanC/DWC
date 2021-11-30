let url=prompt("Introduce una URL");

let expresion= new RegExp('^((http:)(\\/){0,3}){1}([A-Za-z0-9.-]*((\\:{1}.+\\@){1}|\\@{1}))?(([A-Za-z0-9]+((\\.)[A-Za-z0-9]+)){1}(\\:[0-9]*)?)(\\/[A-za-z0-9\\/\\.]+)((\\?).+)$');

//let expresion=new RegExp('^((http:)(\\/){0,3}){1}$');

if(expresion.test(url)==true){
    alert("URL Válida.")
    document.write(`URL: ${url} Valida`);
}else{
    alert("URL Incorrecta")
    document.write(`URL: ${url} Incorrecta`);
}
