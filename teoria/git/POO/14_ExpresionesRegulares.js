/* -------------------EXPRESIONES REGULARES---------------------*/
// Las expresiones regulares se utilizan para establecer un patrón
// que permita establecer condiciones avanzadas en los textos, de 
// modo que se puedan validar los textos que encajen con ese patrón.

/* Las labores típicas en las que ayudan las expresiones son:
    - Validación de errores
    - Búsqueda de textos con reglas complejas
    - Modificación avanzada de textos.
*/

// En JS las expresiones regulares son objetos de tipo RegExp.

// Las expresiones regulares se pueden crear indicando las mismas
// entre dos barras de dividir. Tras las barras se pueden indicar
// modificadores.

// Ejemplo de creación de una expresión regular
// Expresión que permite validar un NIF o un NIE como correcto
let expNIF = /[KLXYZ0-9][0-9]{7}[A-Z]/;

// Utilizando una notación más formal
let expNIF = new RegExp('[KLXYZ0-9][0-9]{7}[A-Z]');

// Es más habitual utilizar la otra fomra al ser más rápida e incluso
// entendible.

//ELEMENTOS DE LAS EXPRESIONES REGULARES
// El patrón de las expresiones regulares puede contener diversos 
// símbolos que se interpretan de forma especial.

// El método test
// Permite evaluar el texto con la expresión regular. Devuelve
// verdadero si el texto que evaluamos con la expresión regular
// cumple el patrón.

let expresion = /c/;
console.log(expresion.test('casa')); // Salida: true
console.log(expresion.test('Casa')); // Salida: false
console.log(expresion.test('barbacoa')); // Salida: true

// Por defecto se distingue entre mayúsculas y minúsculas.
// Si queremos no distinguir entre mayúsculas y minúsculas podemos
// añadir el modificar i al final de la expresión.
let expresion = /c/i;
console.log(expresion.test('casa')); // Salida: true
console.log(expresion.test('Casa')); // Salida: true
console.log(expresion.test('barbacoa')); // Salida: true

// Si buscamos más de un carácter
let expresion2 = /as/;
console.log(expresion2.test('casa')); // Salida: true
console.log(expresion2.test('Casa')); // Salida: true
console.log(expresion2.test('asador')); // Salida: true
console.log(expresion2.test('Asador')); // Salida: false

// La potencialidad de las expresiones regulares se dispara con el
// uso de símbolos especiales.

// SÍMBOLO CIRCUNFLEJO (^)
// Obliga a que el siguiente símbolo de la expresión sea el primero
// que obligatoriamente tenga el texto que validemos
let expresion3 = /^c/;
console.log(expresion3.test('casa')); // Salida: true
console.log(expresion3.test('barbacoa')); // Salida: false

// SÍMBOLO DEL DÓLAR ($)
// Hace que el carácter anterior al $ sea, obligatoriamente, el 
// último del texto 
let expresion4 = /a$/;
console.log(expresion4.test('casa')); // Salida: true
console.log(expresion4.test('barbacoa')); // Salida: true
console.log(expresion4.test('río')); // Salida: false

// EL PUNTO (.)
// Es un símbolo especial de las expresiones regulares que representa
// un carácter cualquiera
let expresion5 = /a.e/;
console.log(expresion5.test('caserío')); // Salida: true
console.log(expresion5.test('aereo')); // Salida: false
console.log(expresion5.test('alambique')); // Salida: false

// SÍMBOLO OPCIONALES
// Cuando se pone una serie de símbolos entre corchetes, se
// permite cualquier de ellos.
let expresion6 = /[ao]$/;
console.log(expresion6.test('casa')); // Salida: true
console.log(expresion6.test('Casa')); // Salida: true
console.log(expresion6.test('río')); // Salida: true

// Podemos indicar rangos
let expresion7 = /^[a-z]/; // Valido cualquier texto que comience con minúscula
console.log(expresion7.test('casa')); // Salida: true
console.log(expresion7.test('Casa')); // Salida: false
console.log(expresion7.test('río')); // Salida: true
console.log(expresion7.test('árbol')); // Salida: false // Cuidadín con la á

let expresion8 = /^[a-záéíóúü]/;
console.log(expresion8.test('casa')); // Salida: true
console.log(expresion8.test('Casa')); // Salida: false
console.log(expresion8.test('río')); // Salida: true
console.log(expresion8.test('árbol')); // Salida: true

// CARÁCTER NO PERMITIDO
// Si dentro del corchete indicamos un carácter circunflejo, estamos
// indicando que el contenido no se tiene que cumplir
let expresion9 = /^[^AEIOU]/; // Que NO empiece por ninguna vocal en mayúsculas
console.log(expresion9.test('Empresa')); // Salida: false
console.log(expresion9.test('Casa')); // Salida: true
console.log(expresion9.test('Ala')); // Salida: false

// SÍMBOLOS DE CARDINALIDAD
// Se utilizan para indicar la repetición de una expresión
/* 
    x+      La expresión de la izquierda de este símbolo se puede repetir
            una o más veces
    x*      La expresión de la izquierda de este símbolo se puede repetir
            cero o más veces
    x?      El carácter a la izquierda de este símbolo se puede repetir
            cero o una vez
    x{n}    Significa que la expresión x aparecerá n veces, siendo n
            un número entero positivo
    x{n,}   Significa que la expresión x aparecerá n o más veces
    x{m,n}  Significa que la expresión x aparecerá de m a n veces
*/
let expresion10 = /^[AEIOU].+a/;
console.log(expresion10.test('Asa')); // Salida: true
console.log(expresion10.test('Estación')); // Salida: true
console.log(expresion10.test('Ea')); // Salida: false

let expresion11 = /^[AEIOU].*a/;
console.log(expresion11.test('Asa')); // Salida: true
console.log(expresion11.test('Estación')); // Salida: true
console.log(expresion11.test('Ea')); // Salida: true

// Si queremos validar un código postal español, debemos indicar
// que solo se permiten 5 caracteres numéricos
let CPvalido = /^[0-9]{5}$/;
console.log(CPvalido.test('07005')); // Salida: true
console.log(CPvalido.test('RJ03D')); // Salida: false
console.log(CPvalido.test('7005')); // Salida: false

// PARÉNTESIS
// Permiten agrupar expresiones. Así se pueden realizar expresiones
// aún más complejas
let expresion12 = /([a-z]{2}[0-9]){3}/;

// La expresion12 obliga a que el texto tenga dos letras de la a a
// la z en un texto, luego un número. El último número entre llaves
// hace referencia a todo el paréntesis, por lo que las dos letras
// y el número deberán aparecer tres veces seguidas
console.log(expresion12.test('ad3rf1hj4')); // Salida: true
console.log(expresion12.test('a3f1j4')); // Salida: false
console.log(expresion12.test('ab3fg1')); // Salida: false

// LA BARRA VERTICAL (|)
// Permite indicar que se da por válida la expresión de la izquierda
// o la de la derecha
let expresion13 = /^([A-Z][0-9]{6})|([0-9][A-Z]{6})$/;
console.log(expresion13.test('A123456')); // Salida: true
console.log(expresion13.test('1ABCDEF')); // Salida: true

let cp1 = '49345';
let cp2 = '53345';
let expresion14 = /^((5[012])|([0-4][0-9]))([0-9]{3})$/;
console.log(expresion14.test(cp1)); // Salida: true
console.log(expresion14.test(cp2)); // Salida: false

// SÍMBOLOS ABREVIADOS
// Son símbolos que se usan con el carácter backlash y que permite
// escribir expresiones de forma aún más rápida.
/*
    Estas opciones se pueden encontrar en:
        https://www.w3schools.com/js/js_regexp.asp
*/