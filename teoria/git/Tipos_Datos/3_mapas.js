/* MAPAS */
// Permiten crear estructuras de tipo clave-valor.
// Las claves no se pueden repetir y tienen asociado un valor.
// Las claves y los valores pueden ser de cualquier tipo.
// En un mismo mapa, no pueden haber dos claves repetidas, pero
// sí se puede repetir el valor.

// -----DECLARAR MAPAS-----
const provincias = new Map();

// -----ASIGNAR VALORES A MAPAS-----
// Método SET
// Permite asignar nuevos elementos al mapa.
// Requiere la clave del nuevo elemento y el valor con el que
// asociamos dicha clave.
const provincias = new Map();
provincias.set(1,'Álava');
provincias.set(28,'Madrid');
provincias.set(34,'Palencia');
provincias.set(41,'Sevilla');
console.log(provincias); 

/* Salida: 
    Map(4) {
        1 => 'Álava',
        28 => 'Madrid',
        34 => 'Palencia',
        41 => 'Sevilla'
    }
*/

// Si volvemos a añadir un elemento con la misma clave, este
// sustituye al anterior ya que no pueden haber claves repetidas.

const provincias = new Map();
provincias.set(1,'Álava').set(28,'Madrid').set(34,'Palencia')
    .set(41,'Sevilla');
console.log(provincias);

/* Salida: 
    Map(4) {
        1 => 'Álava',
        28 => 'Madrid',
        34 => 'Palencia',
        41 => 'Sevilla'
    }
*/

// -----USO DE ARRAYS PARA CREAR MAPAS-----
const personas = new Map([[1,'Jose'],[2,'María'],[3,'Elena']]);
console.log(personas); // Salida: Map(3) { 1 => 'Jose', 2 => 'María', 3 => 'Elena' }

//-----OPERACIONES SOBRE MAPAS-----
// Método GET
// Permite obtener los valores de un mapa a partir de una clave.
// Obtener el valor referente a una clave es una operación muy rápida.
const provincias = new Map();
provincias.set(1,'Álava').set(28,'Madrid').set(34,'Palencia')
    .set(41,'Sevilla');
console.log(provincias.get(34)); // Salida: Palencia

// Método HAS
// Permite buscar una clave en el mapa.
// Si se encuentra devuelve true y si no, devuelve false
const provincias = new Map();
provincias.set(1,'Álava').set(28,'Madrid').set(34,'Palencia')
    .set(41,'Sevilla');
console.log(provincias.has(34)); // Salida: true
console.log(provincias.has('Palencia')); // Salida: false

// Método DELETE
// Permite eliminar un elemento del mapa
const provincias = new Map();
provincias.set(1,'Álava').set(28,'Madrid').set(34,'Palencia')
    .set(41,'Sevilla');
provincias.delete(34);
console.log(provincias); // Salida: Map(3) { 1 => 'Álava', 28 => 'Madrid', 41 => 'Sevilla' }

// OBTENER OBJETOS ITERABLES
// Un objeto iterable es un tipo de objeto semejante a un array. Se puede 
// recorrer mediante un bucle for...of.
// Los objeto iterables se manipulan de forma distinta a un array
// Los mapas permiten crear objetos iterables que contienen solo las claves y
// objetos iterables que contienen solo los valores

// Método KEY: Permite obtener las claves del mapa para crear los objetos iterables.
// Método VALUES: Permite obtener los valores del mapa para crear los objetos iterables.

const provincias = new Map();
provincias.set(1,'Álava').set(28,'Madrid').set(34,'Palencia')
    .set(41,'Sevilla');
let claves = provincias.keys();
for(let k of claves) {
    console.log(k);
}
console.log('------------');
let valores = provincias.values();
for(let v of valores) {
    console.log(v);
}

/* Salidas:
    1
    28
    34
    41
    ------------
    Álava
    Madrid
    Palencia
    Sevilla
*/

// -------CONVERTIR MAPAS EN ARRAYS-------
const provincias = new Map();
provincias.set(1,'Álava').set(28,'Madrid').set(34,'Palencia')
    .set(41,'Sevilla');
console.log(...provincias); // Salida: [ 1, 'Álava' ] [ 28, 'Madrid' ] [ 34, 'Palencia' ] [ 41, 'Sevilla' ]

// -------RECORRER MAPAS--------
// CASO1
// El bucle FOR...OF es ideal para recorrer el contenido de los mapas.
// Cada valor que recoge el bucle es un array de dos elementos: el primero
// es la clave y el segundo el valor.
const provincias = new Map();
provincias.set(1,'Álava').set(28,'Madrid').set(34,'Palencia')
    .set(41,'Sevilla');
for (let elemento of provincias) {
    console.log(elemento);
}

/* Salida:
    [ 1, 'Álava' ]
    [ 28, 'Madrid' ]
    [ 34, 'Palencia' ]
    [ 41, 'Sevilla' ]
*/

// CASO2
// Se puede desestructurar el array de los elementos para separar en dos
// variables la clave y el valor
const provincias = new Map();
provincias.set(1,'Álava').set(28,'Madrid').set(34,'Palencia')
    .set(41,'Sevilla');
for (let [clave,valor] of provincias) {
    console.log(`Clave: ${clave}, Valor: ${valor}`);
}

/* Salida:
    Clave: 1, Valor: Álava
    Clave: 28, Valor: Madrid
    Clave: 34, Valor: Palencia
    Clave: 41, Valor: Sevilla
*/

// CASO3
// Utilizar los métodos KEY y VALUES para recorrer las claves y los valores 
// por separado
const provincias = new Map();
provincias.set(1,'Álava').set(28,'Madrid').set(34,'Palencia')
    .set(41,'Sevilla');
for (let clave of provincias.keys()) {
    console.log(clave);
}
for (let valor of provincias.values()) {
    console.log(valor);
}

/* Salida:
    1
    28
    34
    41
    Álava
    Madrid
    Palencia
    Sevilla
*/