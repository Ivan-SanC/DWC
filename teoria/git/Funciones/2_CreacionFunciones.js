/* ------------------CREACIÓN DE FUNCIONES -----------------------------*/
/* Elementos de una función:
    - Identificador (nombre) de la función: Cumple las mismas reglas que los
        identificadores de las variables. Por convención formal (no obligatoria),
        las funciones se identifican con nombres en minúsculas.
    - Parámetros: Uno o más. Son variables locales a la función que sirven para
        almacenar los datos necesarios para que la función realice su labor. 
        Puede haber funciones que no utilicen parámetros.
    - Resultado: Es un valor (simple o complejo) que se devuelve a través de la
        instrucción return. Es posible que una función no devuelva un resultado,
        sino que, realice una determinada acción. Este tipo de funciones, que no 
        usan la instrucción return, en otros lenguajes se las conoce como
        procedimientos.
    - Instrucciones: Las sentencias que se ejecutan cuando se invoca a la
        función. Es el código en sí de la función. Este código se ejecuta cuando
        invocamos a la función desde cualquier parte del código de la aplicación.
*/

/* DECLARAR FUNCIONES */
// La funciones se deben declarar antes de usarlas.
/* Declaración clásica de función:
    NOTACIÓN DECLARATIVA
        function nombre([listaParametros]) {
            ...cuerpo de la función...
        }
*/


// Función declarativa sin parámetros
function saludo(){
    console.log('Hola');
}

// Invocación de la función declarativa sin parámetros
saludo(); // Salida: Hola


// Función declarativa con parámetros
function saludo(mensaje){
    console.log(mensaje);
}

// Invocación de la función declarativa con parámetros
saludo('Hasta la vista'); // Salida: Hasta la vista

// Función declarativa con parámetros y que devuelve un resultado
function triple(n) {
    return 3*n;
}

// Uso de la función anterior:
let x=6, y=4, z='Hola';
console.log(triple(9)); // Salida: 27
console.log(triple(x)); //Salida: 18
console.log(triple(x+y)); // Salida: 30
console.log(triple(x) + triple(y)); // Salida: 30
console.log(triple(triple(9))); // Salida: 81
console.log(triple(z)); // Salida: NaN

// Función para contar números pares de un array
function pares(array) {
    let nPares = 0;
    if (array instanceof Array) {
        for (n of array) {
            if (n%2 === 0) {
                nPares++;
            }
        }
    }
    return nPares;
}

console.log(pares([1,2,3,4,5,6,7,8,9])); // Salida: 4

// Las funciones se pueden invocar en cualquier parte al indicar los valores
// del array
function triple(n) {
    return 3*n;
}

let array = [triple(1),triple(2),triple(3)];
console.log(array);
