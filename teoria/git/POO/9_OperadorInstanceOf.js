/* -----------OPERADOR INSTANCEOF-------------*/
// Es un operador parecido a typeof pero para utilizarlo con objetos
// La razón de usarlo es que todos los todos los objetos pertenecen
// al mismo tipo de datos: Object

function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
};

let b = new Punto(-3,6);
console.log(b instanceof Punto); // Salida: true
console.log(b instanceof Object); // Salida: true

// Los objetos de tipo Punto heredan todo lo que posee la clase
// Object.

// También existe la propiedad constructor.name (añadido en la 
// versión del estándar ES2015).
// La propiedad constructor la tienen todos los objetos y permite
// obtener información sobre la construcción del objeto.
// En realidad, constructor es también un objeto que entre sus 
// propiedades posee la propiedad name que nos devolverá el nombre
// de la función constructora, y por tanto, el tipo de objeto.

function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
};

let b = new Punto(-3,6);
console.log(b.constructor.name); // Salida: Punto
