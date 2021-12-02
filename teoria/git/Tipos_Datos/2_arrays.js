/* ARRAYS */
// Son variables que permiten almacenar una serie de valores siguiendo
// una misma estructura.
// Para acceder a los datos hace falta indicar la posición.
// El primer elemento tiene índice cero.
// En JS los arrays son objetos, dinámicos (su tamaño se puede
// modificar después de la declaración) y heterogéneos (cada 
// elemento del array puede ser de un tipo distinto).

// DECLARACIÓN DE UN ARRAY
let a = []; // Array vacio
let a = new Array(); // Array vacio
a[0] = 'Antonio'; // Asignamos texto Antonio al primer elemento del Array
a[1] = 'Luis';
a[2] = 'Marta';
a[3] = 'Sofía';

console.log(a[2]); // Salida: Marta

let nota = [7,8,6,6,5,4,3,9]; // Asignar valores en la declaración
let nota = new Array(7,8,6,6,5,4,3,9); // Otra asignación equivalente a la anterior

console.log(nota[0]); // Salida: 7
console.log(nota); // Salida: [7, 8, 6, 6, 5, 4, 3, 9]

// USO DE CONST Y LET CON ARRAYS
// La variable declarada con un array contine una referencia array

const datos = [4.5,6.78,7.12,9.123];

// No cambia la referencia
datos[0] = 4.671; // Modificamos un valor (CORRECTO)
datos[4] = 3.87; // Añadimos un elemento (CORRECTO)
console.log(datos[4]);

// Cambia la referencia
datos = [9.18,4.95] // ERROR!!!

// OPERACIÓN DE ASIGNACIÓN CON ARRAYS
// Podemos tener dos referencias al mismo array
const datos2 = [4.5,6.78,7.12,9.123];
const datos3 = datos2; 
datos3[0] = 400;
console.log(datos2[0]); //Salida: 400

// VALORES INDEFINIDOS
// Podemos dejar elementos sin definir en el propio array

let a2 = ['Saul', 'Rocío'];
a2[3] = 'María';
console.log(a2[2]); // Salida: Undefined

let a3 = ['Saul', 'Rocío', , 'María']; // Declaración con un elemento indefinido
console.log(a3);

// ELIMINAR ELEMENTOS DE UN ARRAY
// El elemento eliminado para a ser indefinido
const dias=['Lunes', 'Martes', 'Miércoles', 'Jueves',
            'Viernes', 'Sábado', 'Domingo'];
delete dias[2];
console.log(dias); // Salida: ['Lunes','Martes',<1 empty item>,'Jueves','Viernes','Sábado','Domingo']

// ARRAYS HETEROGÉNEOS
const a4 = [3,4,'Hola',true, Math.random()]; // Con enteros, string, boleano, resultado de una expresión

const a5 = [3,4,'Hola',[99,55,33]]; // También puede contener otros arrays
console.log(a5[3][1]); // Salida: 55

// -----RECORRER ARRAYS------
// USO DEL BUCLE FOR PARA RECORRER UN ARRAY
const notas = [5,6,7,4,9,8,9,9,7,8];
for (let i=0;i<notas.length;i++) {
    console.log(`La nota ${i} es ${notas[i]}`);
}
/* Salida: 
    La nota 0 es 5
    La nota 1 es 6
    La nota 2 es 7
    La nota 3 es 4
    La nota 4 es 9
    La nota 5 es 8
    La nota 6 es 9
    La nota 7 es 9
    La nota 8 es 7
    La nota 9 es 8
*/

const notas = [5,6,,,,8,,9,7,8];
for (let i=0;i<notas.length;i++) {
    console.log(`La nota ${i} es ${notas[i]}`);
}
/* Salida:
    La nota 0 es 5
    La nota 1 es 6
    La nota 2 es undefined
    La nota 3 es undefined
    La nota 4 es undefined
    La nota 5 es 8
    La nota 6 es undefined
    La nota 7 es 9
    La nota 8 es 7
    La nota 9 es 8
*/

// Si evitamos los valores indefinidos
const notas = [5,6,,,,8,,9,7,8];
for (let i=0;i<notas.length;i++) {
    if (notas[i] != undefined) {
        console.log(`La nota ${i} es ${notas[i]}`);
    }     
}

// BUCLE FOR...IN
// Bucle especial para recorrer arrays. 
// La variable que se crea en el bucle almacena los valores de los
// índices del array.
// Se salta los valores indefinidos.

const notas=[5,6,,,,9,,,8,,9,,7,8];
for (let i in notas){
    console.log(`La nota ${i} es ${notas[i]}`);
}
/* Salida:
    La nota 0 es 5
    La nota 1 es 6
    La nota 5 es 8
    La nota 7 es 9
    La nota 8 es 7
    La nota 9 es 8
*/

// BUCLES FOR...OF
// Bucle especial para recorrer arrays.
// Similar al anterior pero en la variable que se crea en el bucle
// va almacenando los diferentes valores del array
// No se salta los valores indefinidos

const notas=[5,6,,,,9,,,8,,9,,7,8];
for (let i of notas){
    console.log(i);
}

/* Salida:
    5
    6
    undefined
    undefined
    undefined
    9
    undefined
    undefined
    8
    undefined
    9
    undefined
    7
    8
*/

// Evitando los valores indefinidos
const notas=[5,6,,,,9,,,8,,9,,7,8];
for (let i of notas){
    if (i != undefined) {
        console.log(i);
    }
}

/* Salida:
    5
    6
    9
    8
    9
    7
    8
*/

// ------- MÉTODOS ------- //
// Método LENGTH
// Permite obtener el tamaño de un array

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves',
                'Viernes', 'Sábado', 'Domingo'];
console.log(dias.length); // Salida: 7

// Método INSTANCEOF
// Sirve para comprobar si un objeto pertenece a una determinada clase
// Los arrays pertenecen a la clase Array.

let a = [1,2,3,4,5,6,7,8,9];
let b = 'Hola';
console.log(a instanceof Array); // Salida: true
console.log(b  instanceof Array); // Salida: false

// Método PUSH
// Permite añadir un elemento al final del array

const cantantes = ['Simon'];
cantantes.push('Garfunkel');

console.log(cantantes); // Salida: [ 'Simon', 'Garfunkel' ]

// Método POP
// Retira del array el último elemento

const cantantes2 = ['Pedro', 'Pablo', 'María'];
let x = cantantes2.pop();
console.log(`El array ha quedado así: ${cantantes2}`); // Salida: El array ha quedado así: Pedro,Pablo
console.log(`La variable x vale ${x}`); // Salida: La variable x vale María

// Método SHIFT
// Elimina el primer elemento del array

const cantantes3 = ['Amancio', 'Lucas', 'Andrés'];
let x = cantantes3.shift();

console.log(`El array ha quedado: ${cantantes3}`); // Salida: El array ha quedado: Lucas,Andrés
console.log(`La variable x vale ${x}`); // La variable x vale Amancio

// Método UNSHIFT
// Añade un elemento por el lado izquierdo del array

const cantantes4 = ['Amancio', 'Lucas', 'Andrés'];
cantantes4.unshift('María');

console.log(`El array ha quedado: ${cantantes4}`); // Salida: El array ha quedado: María,Amancio,Lucas,Andrés

// Método CONCAT
// Permite añadir los elementos de un array al array que usa el método
// El resultado es un nuevo array, sin modificar los dos originales

const planetas1 = ['Venus', 'Mercurio', 'La Tierra', 'Martes'];
const planetas2 = ['Júpiter', 'Saturno', 'Urano', 'Neptuno'];
const planetas = planetas1.concat(planetas2);
console.log(planetas); // Salida: ['Venus','Mercurio','La Tierra', 'Martes','Júpiter','Saturno','Urano','Neptuno']

// Método SLICE
// Permite copiar una serie de elementos de un array indicando
// el índice del primer elemento que deseamos copiar y el índice final.

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 
                'Viernes', 'Sábado', 'Domingo'];
const tresdias =  dias.slice(3,6);
console.log(tresdias); // Salida: [ 'Jueves', 'Viernes', 'Sábado' ]

// También se puede utilizar para copiar un array a otro
let dias2 = dias.slice(); // También se puede utilizar para copiar un array a otro
console.log(dias2); // Salida: [ 'Lunes', 'Martes'. 'Miércoles','Jueves', 'Viernes', 'Sábado' ]
dias2[0] = '1';
console.log(dias);
console.log(dias2);


// Método SPLICE
// Permite eliminar definitivamente los elementos de un array
// Primer parámetro: desde dónde comenzamos a eliminar
// Segundo parámetro: cuántos elementos eliminamos
// Siguiente parámetos: (opcional) Los elementos por los que queremos que los reemplace
// El método modifica el array original y devuelve otro sin los elementos modificados

// Caso1
const castillaLaMancha = ['Guadalajara', 'Sevilla', 'Granada', 
                            'Ciudad Real', 'Albacete'];
const borrados = castillaLaMancha.splice(1,2);
console.log(`Se han borrado los elementos: ${borrados}`); // Salida: Se han borrado los elementos: Sevilla,Granada
console.log(`Ahora quedan: ${castillaLaMancha}`); // Salida: Ahora quedan: Guadalajar,Ciudad Real,Albacete

// Caso2
const castillaLaMancha = ['Guadalajara', 'Sevilla', 'Granada', 
                            'Ciudad Real', 'Albacete'];
castillaLaMancha.splice(1,2,'Toledo', 'Cuenca');
console.log(`Ahora quedan: ${castillaLaMancha}`); // Salida: Ahora quedan: Guadalajar,Toledo,Cuenca,Ciudad Real,Albacete

// Método JOIN
// Permite convertir un array en un string
// Por defecto, cada elemento se separa por comas

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado',
                'Domingo'];

console.log(dias.join()); // Salida: Lunes,Martes,Miércoles,Jueves,Viernes,Sábado,Domingo
console.log(dias.join("")); // Salida: LunesMartesMiércolesJuevesViernesSábadoDomingo
console.log(dias.join("-")); // Salida: Lunes-Martes-Miércoles-Jueves-Viernes-Sábado-Domingo
console.log(dias.join("<->")); // Salida: Lunes<->Martes<->Miércoles<->Jueves<->Viernes<->Sábado<->Domingo

// Método INDEXOF
// Permite buscar la posición de un elemento en un array.
// Si encuentra la encuentra devuelve un dicho valor, si no devuelve -1
// Si hay dos elementos con el mismo valor, devuelve el primero comenzando por la izquierda
// (opcional) Podemos indicar el inicio de la búsqueda

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 
                'Domingo'];
console.log(dias.indexOf('Jueves')); // Salida: 3
console.log(dias.indexOf('Jueves', 4)); // Salida: -1

// Método LASTINDEXOF
// Igual que el anterior pero busca desde el último elemento
// (opcional) Se puede indicar la posición desde donde comenzar (busca hacia la izquierda)

const numeros = [2,3,5,6,4,3,7,8,4,3,2,8,3,2];
console.log(numeros.lastIndexOf(3)); // Salida: 12
console.log(numeros.lastIndexOf(3,6)); // Salida: 5

// Método INCLUDES
// Permite buscar un elemento en el array.
// Devuelve true si está el elemento y false si no está.

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado',
                'Domingo'];

console.log(dias.includes('Jueves')); // Salida: true

// Método REVERSE
// Permite dar la vuelta a los elementos de un array
// Modifica el array original
const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado',
                'Domingo'];

dias.reverse();
console.log(dias); // Salida: ['Domingo','Sábado','Viernes','Jueves','Miércoles','Martes','Lunes']

// Método SORT
// Permite ordenar los elementos de un array
// Modifica el array original
// No sabe ordenar por las características nacionales
// Considera que las minúsculas son mayores que las mayúsculas.

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado',
                'Domingo'];

dias.sort();
console.log(dias); // Salida:['Domingo','Jueves','Lunes','Martes','Miércoles','Sábado','Viernes']

const palabras = ['Ñu', 'Águila', 'boa', 'oso', 'marsopa', 'Nutria'];
palabras.sort();
console.log(palabras); // Salida: [ 'Nutria', 'boa', 'marsopa', 'oso', 'Águila', 'Ñu' ]

// ------- DESESTRUCTURACIÓN DE ARRAYS --------- //
// Asignar valores a varias variables a la vez
let [saludo, despedida, cierre] = ['Hola', 'Adios', 'Hasta nunca'];
console.log(saludo); // Salida: Hola
console.log(despedida); // Salida: Adios
console.log(cierre); // Salida: Hasta nunca

let [n1, n2] = [10, Math.random()*20];
console.log (n1); // Salida: 10
console.log (n2); // Salida: Un valor aleatorio entre 0 y 20

// Hacer swap entre valores de variables
[a,b] = [b,a];

// Operador de propagación (...)
let array = [1,2,3];
let [x,y,z] = [...array];
console.log(x); // Salida: 1
console.log(y); // Salida: 2
console.log(z); // Salida: 3

let array2 = [1,2,3];
let [x,,y] = [...array2];
console.log(x); // Salida: 1
console.log(y); // Salida: 3

let a,b,array;
[a,b,...array] = [1,2,3,4,5];
console.log(a); // Salida: 1
console.log(b); // Salida: 2
console.log(array); // Salida: [ 3, 4, 5 ]