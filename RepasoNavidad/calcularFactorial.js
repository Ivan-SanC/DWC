// Pedir introducir el número
var x = y = Number(prompt("Introduce el numero"));

/// Comprobar si es válido lo introducido y calcular
if (isNaN(x)) {
    alert('No es un numero, no se hace nada');
    document.write("<H2>Adivina quien ha introducido un valor inválido</H2>");
} else {
    while (x>1) {
        y = y * (x-1);
        x--;
    }

    document.write("<BR/><BR/><H2 style='color:red'>El factorial es → " + y + "</H2>");
}