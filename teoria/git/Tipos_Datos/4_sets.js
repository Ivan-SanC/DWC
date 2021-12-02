/* SETS */
// También llamados conjuntos.
// Son una estructura de datos que permite almacenar datos.
// No admite valores duplicados.
// Son objetos.

// -----DECLARACIÓN Y CREACIÓN DE CONJUNTOS-----
const lista = new Set(); // Conjunto vacío

// Método ADD
// Permite añadir nuevos valores a un conjunto.
lista.add(8);
lista.add(6);
lista.add(5);
lista.add(5);
lista.add(6);
console.log(lista); // Salida: Set(3) { 8, 6, 5 }

const lista2 = new Set();
lista2.add(8).add(6).add(5).add(5).add(6); // Equivalente a la acción anterior
console.log(lista2); // Salida: Set(3) { 8, 6, 5 }

const lista3 = new Set([5,6,4,5,6,5,5,6,4,6,6]); // Iniciar la lista a partir de un array
console.log(lista3); // Salida: Set(3) { 5, 6, 4 }

const lista4 = new Set('Conjunto'); // Iniciar el conjunto con un texto
console.log(lista4); // Salida: Set(6) { 'C', 'o', 'n', 'j', 'u', 't' }

const lista5 = new Set();
lista5.add('Conjunto'); // Añadir un string largo
console.log(lista5); // Salida: Set(1) { 'Conjunto' }

// -----MÉTODOS-----
// Método SIZE
// Permite saber el tamaño de un conjunto
const lista6 = new Set([2,4,6,8,10]);
console.log(lista6.size) // Salida: 5

// Método DELETE
// Elimina el valor indicado de un conjunto
const lista7 = new Set([1,2,3,4,5,6,7,8,9]);
lista7.delete(6);
console.log(lista7); // Salida: Set(8) { 1, 2, 3, 4, 5, 7, 8, 9 }

// Método CLEAR
// Elimina todo el conjunto y lo deja vacío.
const lista8 = new Set([1,2,3,4,5,6,7,8,9]);
lista8.clear();
console.log(lista8); // Salida: Set(0) {}

// Método HAS
// Permite que se le indique un valor y lo busca en el conjunto.
// Devuelve true si encuentra el valor indicado.
// Devuelve false si no encuentra el valor indicado.
const lista9 = new Set([1,2,3,4,5,6,7,8,9]);
console.log(lista9.has(7)); // Salida: true
console.log(lista9.has(10)); // Salida: false

// ----- CONVERTIR CONJUNTOS EN ARRAYS -----
const lista10 = new Set([1,2,3,4,5,6,7,8,9]);
console.log(lista10);
const array = [...lista10];
console.log(array); // Salida: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// ----- RECORRER CONJUNTOS -----
// Bucle FOR...OF
// Permite recorrer cada elemento del conjunto
const lista11 = new Set([1,2,3,4,5,6,7,8,9]);
for (let numero of lista11) {
    console.log(numero);
}

/* Salida:
    1
    2
    3
    4
    5
    6
    7
    8
    9
*/

