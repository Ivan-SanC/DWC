/* -------------------RECURSIVIDAD------------------------*/
// Técnica de resolución de problemas complejos que se basa en la capacidad
// que tienen las funciones de invocarse a sí mismas. 
// Facilita la realización de aplicaciones sencillas para solucionar problemas
// muy complejos.

// Hay que tener cuidad al utilizarla porque puede generar llamadas infinitas
// y propiciar desbordamiento de pila.

// La idea es que cada invocación a la función resuelva una parte del problema
// y se llame a sí misma para resolver la parte que queda del problema, y así
// sucesivamente. En cada llamada, el problema deber ser cada vez más sencillo
// hasta llegar a una llamada, en la que la función devuelve un único valor. Es
// fundamental preparar bien esa última llamada ya que es la que cierra el
// bucle de llamadas y tras ella se irán resolviendo las anteriores hasta 
// liberar la pila y conseguir el resultado final.

// Ejemplo FACTORIAL (CON RECURSIVIDAD)
function factorial(n) {
    if (n<=1) return 1;
    else return n*factorial(n-1);
}

console.log(factorial (8)); // Salida: 24

/* Recorrido:
    1. factorial(4) = 4 * factorial (3) - Añade el código a la pila de factorial(4)
    2. factorial(3) = 3 * factorial (2) - Añade el código a la pila de factorial(3)
    3. factorial(2) = 2 * factorial (1) - Añade el código a la pila de factorial(2)
    4. factorial(1) = 1 - Se añade y retira el código de la pila de factorial(1)
    5. factorial(2) = 2 * 1 = 2 - Se retira el código de la pila de factorial(2)
    6. factorial(3) = 3 * 2 = 6 - Se retira el código de la pila de factorial(3)
    7. factorial(4) = 4 * 6 = 24 - Se retira el código de la pila de factorial(4)

De la 1 a la 4 es el ciclo de llamadas recursivas.
De la 4 a la 7 es el ciclo de devolución de valores.
*/

// Ejemplo FACTORIAL (SIN RECURSIVIDAD)
// Solución utilizando el bucle for (iterativa)
function factorial(n) {
    let res=1;
    while(n>1){
        res*=n;
        n--;
    }
    return res;
}

console.log(factorial(4)); //Salida: 24

// Ambas implican ejecutar sentencias de forma repetitiva hasta llegar a una
// determinada condición que cierra el ciclo de repeticiones. En el caso de la
// solución iterativa es un contador el que permite determinar el final, la
// recursividad lo que hace es ir simplificando el problema hasta conseguir
// una invocación a la función que devuelve un valor sencillo.

// En terminos de rendimiento es más costosa la recusividad, ya que implica
// hacer muchas llamadas a funciones en cada cual se genera una copia del 
// código de la misma, lo que sobrecarga la memoria del ordenador y tiene una 
// forma de ejecución más lenta. Es más rápida y menos voluminosa la solución
// iterativa.

/* 
Si poseemos una solución iterativa a un problema, no deberíamos utilizar la
recursividad. La recursividad se debería utilizar solamente si:
    - No encontramos la solución iterativa a un problema.
    - El código es mucho más claro en su versión recursiva y no implica mucha
        diferencia a nivel de rendimiento sobre la solución iterativa,
*/