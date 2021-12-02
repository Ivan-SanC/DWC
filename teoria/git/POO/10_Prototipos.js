/*--------------------------PROTOTIPOS---------------------------*/
//  IDEA DE PROTOTIPO
// En JS la idea es que todos los objetos procedentes del mismo tipo
// de función constructora, tienen un mismo prototipo con el que 
// enlazan. El prototipo de un objeto es una serie de métodos y 
// propiedades comunes.

// En los lenguajes que usan clases, el código de los métodos se
// copia a los objetos de esa clase.
// Sin embargo, en JS lo que se hace es enlazar con su prototipo.
// El prototipo es la parte común de los objetos del mismo tipo.
// En JS podemos modificar el prototiposobe la marcha, y los objetos
// que enlazan con ese prototipo inmediatamente estarán al día porque
// el enlace con su prototipo es dinámico.

// El acceso al prototipo de un objeto se puede hacer con la
// propiedad __proto__ (hay dos guiones al principio y dos al final
// de la palabra proto).

function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
};

let a = new Punto(10,20);
console.log(a.__proto__); // Salida: Punto{}

// Una forma equivalente de obtener el prototipo es mediante el 
// método getPrototypeof que es un método de la clase genérica
// Object
function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
};

var a = new Punto(10,20);
console.log(a instanceof Punto); // Salida: True
console.log(a);
console.log(Object.getPrototypeOf(a)); // Salida: {}

// MODIFICAR PROTOTIPOS
// Para modificar prototipos basta con indicar la propiedad prototype
// y después definir propiedades y métodos a voluntad.
// Esta propiedad solo está disponible en las funciones constructoras
function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
};
console.log(Punto.prototype); // Salida: {}

// La salida es un objeto vacío porque no hemos definido nada en él.

// Para definir un nuevo método y una nueva propiedad podemos 
// indicarlos y darles valor.
function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
};
Punto.prototype.sumaXY = function() {
    return this.x+this.y;
}
Punto.prototype.z=0;

console.log(Punto.prototype); 
/* Salida: { sumaXY: [Function (anonymous)], z: 0 } */

let a = new Punto(10,20);
let b = new Punto (-3,6);
console.log(a.sumaXY()); // Salida: 30
console.log(b.sumaXY()); // Salida: 3
console.log(a.z); // Salida: 0
console.log(b.z); // Salida: 0

// Ejemplo de modificación de propiedad heredada
function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
};
Punto.prototype.sumaXY = function() {
    return this.x+this.y;
}
Punto.prototype.z=0;


let a = new Punto(10,20);
console.log(a.z); // Salida: 0
a.z = 7;
console.log(a.z); // Salida: 7

// Ahora aunque modifiquemos la propiedad z a través del prototipo,
// la variable a no lo reflejará porque su propiedad z ya es 
// independiente de su prototipo.
// Sin embargo, todos los demás objetos usarán la propiedad z del 
// prototipo.
function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
};
Punto.prototype.sumaXY = function() {
    return this.x+this.y;
}
Punto.prototype.z=0;


let a = new Punto(10,20);
let b = new Punto(-3,6);

a.z = 7;

console.log(a); 
console.log(b.z);
/* Salida: 
    Punto {
    x: 10,
    y: 20,
    mostrarCoordenadas: [Function (anonymous)],
    z: 7
    }
    Punto { x: -3, y: 6, mostrarCoordenadas: [Function (anonymous)] }
*/

// Si un objeto redefine un método o una propiedad, entonces, 
// usa su versión de forma prioritaria sobre la del prototipo.

// Se pueden modificar los prototipos de los modelos estándar pero
// no es recomendable.