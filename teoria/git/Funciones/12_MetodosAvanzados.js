/* -------MÉTODOS AVANZADOS PARA MANIPULAR ESTRUCTURAS DE DATOS--------*/
// ORDENACIÓN AVANZADA DE ARRAYS
// Problema con el método sort
const palabras=['Ñu','Águila','boa','oso','marsopa','Nutria'];
palabras.sort();
console.log(palabras); // Salida: [ 'Nutria', 'boa', 'marsopa', 'oso', 'Águila', 'Ñu' ]

/*
La función sort tiene la posibilidad de indicar un parámetro que es una función
callback. Esa función debe recibir dos parámetros que sirven para explicar el 
criterio de ordenación. Debemos programar el código de modo que comparando, en
la forma deseada, los parámetros:
    - La función devuelva un número negativo si el primer parámetro es menor
        que el segundo.
    - Devuelva cero si son iguales.
    - Devuelva un número positivo si su segundo parámetro es mayor que el 
        primero.
*/

// Ejemplo para ordenar de modo que aparezcan primero los textos más cortos.
function ordenPersonal(a,b){
    return a.length-b.length;
}

/* Esta función devuelve:
    - Un número negativo si el primer parámetro es más corto que el segundo.
    - Cero si los tamaños son iguales.
    - Un número positivo si el primer parámetro es más largo que el segundo.
*/

// Ejemplo de uso de la función anterior utilizándola como anónima (y en forma)
// de flecha con la función sort
const palabras=['Ñu','Águila','boa','oso','marsopa','Nutria'];
palabras.sort((a,b)=>a.length-b.length);
console.log(palabras); // Salida: [ 'Ñu', 'boa', 'oso', 'Águila', 'Nutria', 'marsopa' ]

// Ejemplo para solucionar el problema con sort
const palabras=['Ñu','Águila','boa','oso','marsopa','Nutria'];
palabras.sort((a,b)=>a.localeCompare(b,'es'));
console.log(palabras); // Salida: [ 'Águila', 'boa', 'marsopa', 'Nutria', 'Ñu', 'oso' ]

// MÉTODO FOREACH
// Método que permite recorrer arrays, mapas y conjuntos.
// Permite establecer la acción que se realizará con cada elemento del array.
// Este método no tiene en cuenta los elementos indefinidos.

/* Sintaxis del método forEach

    nombreArray.forEach(function(elemento,indice)){
        instrucciones que se repiten por cada elemento del array
    }

   Necesita dos parámetros:
        - El primero irá almacenando los valores de cada elemento del array
        - El segundo irá almacenando los índices. Es opcional.
*/

// Ejemplo de uso para un array
const notas=[5,6,,,,9,,,8,,9,,7,8];
notas.forEach(function(nota,i){
    console.log(`La nota ${i} es ${nota}`);
});

/* Salida:
    La nota 0 es 5
    La nota 1 es 6
    La nota 5 es 9
    La nota 8 es 8
    La nota 10 es 9
    La nota 12 es 7
    La nota 13 es 8
*/

// Ejemplo de uso para un conjunto
let conjunto=new Set();
conjunto.add('Paul').add('Ringo').add('George').add('John');
conjunto.forEach(function(valor){
    console.log(valor);
});

/* Salida:
    Paul
    Ringo
    George
    John
*/

// Ejemplo de uso para mapas
// El método acepta una función donde se acepta un parámetro para almacenar
// cada elemento del mapa y otro para almacenar las claves.
const provincias=new Map();
provincias.set(1,'Alava').set(28,'Madrid').set(34,'Palencia').set(41,'Sevilla');
provincias.forEach(function(valor,clave){
    console.log(`Clave: ${clave}, Valor: ${valor}`);
});

/* Salida:
    Clave: 1, Valor: Alava
    Clave: 28, Valor: Madrid
    Clave: 34, Valor: Palencia
    Clave: 41, Valor: Sevilla
*/

// MÉTODO MAP
// Otro método de recorrido de arrays que permite recorrer cada elemento y,
// a través de una función callback que se pasa como único parámetro,establecer
// el cálculo que se realiza con cada elemento.
// Sólo se puede utilizar con arrays.
// Crea un array nuevo con los mismos elementos a los que se les habrá aplicado
// la acción que se pasa como parámetro.

// Ejemplo doblar el valor de cada elemento de un array
const notas=[5,6,,,,9,,,8,,9,,7,8];
const doble=notas.map(x=>2*x);
console.log(doble);

/* Salida
    [
    10,              12,
    <3 empty items>, 18,
    <2 empty items>, 16,
    <1 empty item>,  18,
    <1 empty item>,  14,
    16
    ]
*/

// MÉTODO REDUCE
// Es un método que requiere de una función callback pensada para recorrer cada
// elemento del array. La idea es devolver un valor, resultado de hacer un 
// cálculo con cada elemento del array.

/* Tiene dos parámetros:
        - Primero: Es la función callback. Tiene dos parámetros:
            - Primero: El acumulador en el que se va colocando el resultado deseado
            - Segundo: Sirve para recoger el valor del elemento del array que se
                va recorriendo en cada momento.
        - Segundo: Sirve para indicar el valor inicial que tendrá la variable
            que sirve para acumular el resultado final.
*/

// Ejemplo que suma todos los elementos de un array
const array=[1,2,3,4,5];
let suma=array.reduce((acu,valor)=>acu+valor,0);
console.log(suma); // Salida: 15

// EL MÉTODO FILTER
// Utiliza una función callback que recibe un único parámetro que recoge cada
// valor del array. 
// Retorna una condición que debe cumplir cada elemento.
// Obtiene un nuevo array que tendrá como elementos aquellos que cumplan la
// condición de la función callback.

// Ejemplo para obtener los elementos mayores que 5
const array=[4,9,2,6,5,7,8,1,10,3];
const arrayFiltrado=array.filter(x=>x>5);
console.log(arrayFiltrado); // Salida: [ 9, 6, 7, 8, 10 ]