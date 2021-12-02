/* ----------CREAR OBJETOS A TRAVÉS DE CONSTRUCTORES-----------*/
// Los constructores son métodos que sirven para generar nuevos
// objetos de un tipo en concreto en base a datos que se envían
// a esa función constructora.

// En JS todas las funciones tienen capacidad de devolver un objeto.
// También se dispone del método this (ya visto).
// Ambos elementos combinados con un operador new permite crear 
// nuevos objetos utilizando funciones constructoras

// El operador new genera nuevos objetos a partir de la función
// indicada.
// A este proceso se le conoce como instanciar objetos (generar
// ejemplares concretos).

// Función constructora
function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
}

let a = new Punto(10,20);
let b = new Punto(-3,6);

console.log(a.mostrarCoordenadas()); // Salida: (10,20)
console.log(b.mostrarCoordenadas()); // Salida: (-3,6)

// El hecho de usar como nombre de la función la palabra Punto, con
// mayúsculas en la primera letra, es una formalidad opcional que se
// utiliza por parte de los programadores para hacer notar que la 
// función sirve para construir tipos de objetos.

// La función lo que hace es manipular (y a la vez definir) las 
// propiedades del objeto que se devuelve. De eso se encarga la
// palabra this, que es la que hace posible llegar a la propiedades
// concretas del objeto que se está creando, sabiendo que el valor
// de esas propiedades podrá ser distinto para cada objeto.
// El constructor define propiedades (x  y) pero también define 
// métodos (mostrarCoodenadas) que serán propiedades y métodos  que 
// poseeran todos los objetos creados con este constructor.

// Los constructores son funciones normales que pasan a ser
// constructores cuando se usan con el operador new.

function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
}
console.log(typeof Punto); // Salida: function

let r = Punto(10,20); // No tiene sentido usarla así (pero funciona)
// La variable r será indefinida porque Punto no devuelve nada.
console.log(typeof r);