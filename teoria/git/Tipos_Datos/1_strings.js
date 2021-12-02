/* STRINGS */
// Comparación de strings
let texto1 = "ana";
let texto2 = "Ana";

if (texto1 == texto2) {
    console.log("Son iguales");
} else {
    console.log("Son distintos");
} // Salida: Son distintos -> Distingue entre mayúsculas y minúsculas

// Método LOCALECOMPARE
// Permite comparar entre mayúsculas y minúsculas, y considerando
// la forma de ordenar de cada lengua
/* Posibles salidas:
    (num positivo): texto4 < texto3
    (num negativo): texto4 > texto3 
    (0): texto4 = texto3
*/

let texto3='Oso';
let texto4='Ñu';
console.log(texto3.localeCompare(texto4));
console.log(texto3.localeCompare(texto4,'es')); // Salida: 1 ->

// Método  LENGTH
// Devuelve el tamaño de un texto
let texto5 = 'Esternocleidomastoideo';
console.log(texto5.length); // Salida: 22

// Método CHARAT
// Permite extraer un carácter concreto del texto.
// Hay que indicar la posición del carácter deseado.
// El primer carácter ocupa la posición 0
let texto6 = 'Nabucodonosor';
console.log(texto6.charAt(5)); // Salida -> o

// Método CHARCODEAT
// Devuelve el código de un carácter en una posición.
// Hay que indicar la posición
// El primer carácter ocupa la posición 0
let texto7 = 'Nabucodonosor';
console.log(texto7.charCodeAt(5)); // Salida: 111 -> Código Unicode de la letra o

// Método TOUPPERCASE
// Pasa un texto a mayúsculas
let texto8 = 'En el año 2019 me saqué el carnet de Camión';
console.log(texto8.toUpperCase()); // Salida: EN EL AÑO 2019 ME SAQUÉ EL CARNET DE CAMIÓN

// Método TOLOWERCASE
// Pasa un texto a minúsculas
let texto9 = 'En el año 2019 me saqué el carnet de Camión';
console.log(texto9.toLowerCase()); // Salida: en el año 2019 me saqué el carnet de camión

// Método INDEXOF
// Devuelve la posición del texto indicado en una variable.
// Empieza a buscar desde el lado derecho.
// Si aparece varias veces, se devuelve la primera posición.
// También puede indicarse desde qué posición comenzar a buscar.
// Si no encuentra el texto, devuelve -1

let texto10 = '¿Dónde está la x? Busca';
console.log(texto10.indexOf("x")); // Salida: 15
console.log(texto10.indexOf('x', 16)); //Salida: -1

// Método LASTINDEXOF
// Devuelve la última posición que aparece el texto indicado en una variable.
// Empieza a buscar desde el lado derecho.

let texto10 = '¿Dónde está la x? Busca';
console.log(texto10.indexOf("s")); // Salida: 8
console.log(texto10.indexOf('s', 10)); // Salida: 20

// Método ENDSWITH
// Devuelve verdadero si el texto finaliza con el texto
// indicado en el parámetro
// Opcional: Indicar la posición desde comenzar a comprobar

let texto11 = 'Esto es una estructura estática';
console.log(texto11.endsWith('estática')); // Salida: true
console.log(texto11.endsWith('estructura', 22)) // Salida: true

// Método STARTSWITH
// Devuelve verdadero si el texto comienza con el texto
// indicado como parámetro
// Opcional: Indicar la posición desde comenzar a comprobar

let texto12 = 'Esto es un texto estático';
console.log(texto12.startsWith('Esto')); // Salida: true
console.log(texto12.startsWith('es',5)); // Salida: true

// Método REPLACE
// Busca el texto indicado en el primer parámetro y lo reemplaza
// por el texto del segundo parámetro.

let texto13 = 'Esto es una estructura estática';
console.log(texto13.replace('st','xxtt')); //Salida: Exxtto es una estructura estática

// Método TRIM
// No necesita argumentos.
// Elimina los espacios en blanco a derecha e izquierda del texto.

let texto14 = '    texto con muchos espacios    '; 
console.log("-" + texto14 + "-"); // Salida: -    texto con muchos espacios    -
console.log("-" + texto14.trim() + "-"); // Salida: -texto con muchos espacios-

// Método SLICE
// Extrae del texto los carácteres desde la posición indicada en
// el primer parámetro, hasta la posición indicada en el segundo
// parámetro (sin incluirla)
// El segundo parámetro puede tomar número negativos para indicar
// la posición desde el final del texto.
// El primer carácter comienza en la posición 0.

let texto15 = 'Esto es una estructura estática';
console.log(texto15.slice(3,10)); // Salida: o es un
console.log(texto15.slice(3,-5)); // Salida: o es una estructura est

// Método SUBSTRING 
// Funciona igual que el método slice, pero no admite parámetros negativos.

// Método SUBSTR 
// Extrae del texto el número de carácteres indicados por el 
// segundo parámetro , desde la posición indicada en el primer
// parámetro.
// Si no se indica el segundo parámetro, se extraen todos los
// carácteres desde la posición indicada en el parámetro.

let texto16 = 'Esto es una estructura estática';
console.log(texto16.substr(3,10)); // Salida: o es una e
console.log(texto16.substr(3)); // Salida: o es una estructura estática

// Método SPLIT
// Divide el texto indicado en un array de textos
// Si no se pasa parámetro, genera un array dónce cada elemento
// del array será cada carácter del string.
// Si añadimos un segundo parámetro, podemos indicar el número
// máximo de divisiones.
// El texto delimitador puede ser una expresión regular en lugar
// de un texto.

let texto17 = 'Esto es una estructura estática';
console.log(texto17.split(" ")); // Salida: [ 'Esto', 'es', 'una', 'estructura', 'estática' ]
console.log(texto17.split(" ", 3)); // Salida: [ 'Esto', 'es', 'una' ]

// Método FROMCHARCODE
// Permite indicar una serie de números de código de la tabla Unicode
// y devolverá un string formado por los carácteres correspondientes
// a dichos códigos.

console.log(String.fromCharCode(65,66,67)); // Salida: ABC


