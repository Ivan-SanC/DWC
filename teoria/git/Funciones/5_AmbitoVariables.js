/* --------------- ÁMBITO DE LAS VARIABLES Y PARÁMETROS -------------------*/
// Las variables tienen una duración en el código dependiendo de cómo se han
// declarado.
// Las variables definidas en una función tanto como const, let o var, no se
// pueden usar fuera de la función en la que se declaran

function f() {
    const a=9;
    let b=9;
    var c=9;
    console.log('Soy la función f');
}

f(); // Salida: Soy la función f
console.log(a) // Salida: ERROR
console.log(b) // Salida: ERROR
console.log(c) // Salida: ERROR


// Otro ejemplo
function f() {
    if (true) {
        const a=9;
        let b=9;
        var c=9;
    }
    console.log(a); // Salida: ERROR
    console.log(b); // Salida: ERROR
    console.log(c); // Salida: 9
}

f();

// Los parámetros tampoco pueden usarse fuera de la función en la que se 
// definen
function g(x) {
    x=19;
}
g(8);
console.log(x); // Salida: ERROR

// El ámbito de los parámetros es el mismo que el de las variables declaradas
// mediante la palabra var