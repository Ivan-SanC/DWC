/* Declaración de variables */
var respuesta;


do {
    respuesta = prompt("Escribe el número de asteriscos que deseas " +
    "(debe ser un número entero positivo)");

} while (isNaN(Number(respuesta)) || respuesta < 0);

for (let i=1; i<=respuesta; i++) {
    for (let j=i; j<=respuesta-1; j++) {
        document.write("&nbsp;");
    }
    for (let j=1; j<=i; j++) {
        document.write("* ");
    }  
    document.write("<br>");
}