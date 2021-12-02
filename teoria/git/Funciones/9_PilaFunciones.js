/* ------------------------LA PILA DE FUNCIONES----------------------- */
// Cuando se invoca a una función en una expresión, esta debe esperar a que la
// función finalice para poder completar la expresión

function f1(){
    console.log('Inicio f1');
    f2();
    console.log('Fin f1');
}

function f2() {
    console.log('Inicio f2');
    f3();
    console.log('Fin f2');
}

function f3(){
    console.log('En f3');
}

f1();

/* Salida:
    Inicio f1
    Inicio f2
    En f3
    Fin f2
    Fin f1
*/

// Se observa que la primera función (f1) no finaliza hasta que las otras
// llamadas han finalizado. Las funciones utilizan la pila de llamadas que
// permite que, el intérprete de JS sepa qué funciones se deben de resolver
// antes.
// A medida que se resuelva el código de las últimas funcioens se irán
// retirando de la pila a la vez que se devuelve el flujo a la función anterior.

// Ante una mala gestión de llamadas se puede llegar a provocar el famoso
// desbordamiento de pila.

// Ejemplo de código que provoca DESBORDAMIENTO DE PILA
function saludo(){
    console.log('Saludo');
    despedida();
}

function despedida(){
    console.log('Despedida');
    saludo();
}

saludo();
 /* Salida:
    Saludo
    Despedida
    Saludo
    Despedida
    Saludo
    ....
    Saludo
    Despedida
    Saludo
    Despedida
    Saludo
    internal/console/constructor.js:290
            if (isStackOverflowError(e))
                ^
    RangeError: Maximum call stack size exceeded
    ....
*/

// La pila tiene un tamaño máximo y eso protege de problemas mayores, si ese
// tope el código anterior provocaría efectos más devastadores.