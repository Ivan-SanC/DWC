/* ------------------OBJETOS LITERALES-------------------------*/
// Son los objetos más sencillos que se pueden crear en JS.
// También se llaman instancias directas.
// Son objetos en los que se pueden definir directamente sus
// propiedades y métodos sobre la marcha.

let punto = new Object(); // Creamos el objeto punto (vacío)
punto.x = 5; // Definimos la propiedad x y le damos valor
punto.y = punto.x*2; // Definimos la propiedad y. Valor de y=2*x
punto.mostrarCoordenadas = function() {
    return `(${punto.x},${punto.y})`;
}
console.log(punto.mostrarCoordenadas()); // Salida: (5,10)

// DECLARACIÓN DE UN OBJETO
    let variable = new Object();
    let variable = {}; // También sirve para declarar un objeto
// Las llaves permiten indicar que la variable punto es un objeto
// vacío.
// Tras dicha instrucción podemos definir propiedades y métodos de 
// la misma forma.

// Declaración de objetos indicando sus propiedades y métodos (no vacíos)
    let variable = {
        propiedad1: valor1,
        propiedad2: valor2,
        ...
        método1: function(...){...},
        ...
    }

// Ejemplo 
let punto = {
    x:19,
    y:36,
    mostrarCoordenadas:function(){
        return `(${punto.x},${punto.y})`;
    }
};
console.log(punto.mostrarCoordenadas()); // Salida: (19,36)

// El nombre de las propiedades y métodos puede ir entrecomillado.
// Admiten nombres con guiones y espacios en blanco pero no
// recomendado.

// El orden de las propiedades y métodos no es estricto, podemos
// empezar por métodos, luego definir propiedades, luego definir más
// métodos, etc.
// Recomendable para una mejor legibilidad del código, definir 
// primero las propiedades y luego los métodos.

let libro = {
    titulo: 'Manual de UFOlogía',
    'n-serie': '187C2',
    autores: ['Pedro Martínez', 'Ana León'],
    editorial: { // La editorial es otro objeto
        nombre: 'Inexistente S.A.',
        pais: 'España'
    }
};
console.log(libro.titulo); // Salida: Manual de UFOlogía
console.log(libro['n-serie']); // Salida: 187C2
console.log(libro.editorial.nombre); // Salida: Inexistente S.A.

// Los objetos pueden ser todo lo complicados que queramos, una propiedad
// de un objeto puede ser una array, un mapa, un conjunto, otro
// objeto, etc.