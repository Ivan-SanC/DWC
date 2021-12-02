/* -----------------NÚMERO VARIABLE DE PARÁMETROS ------------------------*/

function media(x,y) {
    return (x+y)/2;
}

console.log(media(10,20)); // Salida: 15
console.log(media(10,20,30)); // Salida: 15

// Se pueden pasar tantos valores como se desee, lo que permite crear 
// funciones con un número variable de parámetros.
// El operador de propagación utilizado en los parámetros de una función,
// permite almacenar una serie indefinida de parámetros en un array.

function f(x,y,...mas) {
    console.log(`x=${x} y=${y} mas=${mas}`);
}

f(10,20); // Salida: x=10 y=20 mas=
f(10,20,30); // Salida: x=10 y=20 mas=30
f(10,20,30,40); // salida: x=10 y=20 mas=30,40

// El operador de propagación en este contecto convierte una lista de 
// parámetros en un array.

// Ejemplo 2. Cálculo de la media para usar cualquier número de parámetros
function media(...numeros) {
    let acu=0;
    for (let n of numeros) {
        acu+=n;
    }
    return acu/numeros.length
}

console.log(media(10,20)); // Salida: 15
console.log(media(10,20,30)); // Salida: 20
console.log(media(10,20,30,40)); // Salida: 25
console.log(media(10,20,30,40,50)); // Salida: 30

// No podremos enviar un array a esta función
console.log(media([10,20,30,40,50])); // Salida: NaN

