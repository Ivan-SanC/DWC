// ------------------OBJETO THIS-------------------- //

let punto = {
    x: 19,
    y: 36,
    mostrarCoordenadas: function(){
        return `(${x},${y})`;
    }
};
console.log(punto.mostrarCoordenadas()); // Salida: ERROR

// El resultado de este código provoca un error de variable indefinida.
// La razón es que no hay una variable x, lo que hay es una propiedad
// x (lo mismo pasa con y). Por lo tanto, desde la función que se
// asigna a mostrarCoordenadas no se puede acceder a ninguna variable
// llamada x.

// Forma correcta de llamar a las propiedades
let punto = {
    x: 19,
    y: 36,
    mostrarCoordenadas: function(){
        return `(${punto.x},${punto.y})`;
    }
};
console.log(punto.mostrarCoordenadas()); // Salida: (19,36)

// También se puede utilizar la PALABRA RESERVADA THIS
// This hace referencia al objeto actual (la variable punto en el
// ejemplo anterior). Con código complejo no sería sencillo llegar 
// al objeto propietario de una propiedad. This permite abstraerno
// y llegar al objeto propietario de la propiedad o el método que
// estamos definiendo.

// Ejemplo 1 del uso de la PALABRA RESERVADA THIS
let punto = {
    x: 19,
    y: 36,
    mostrarCoordenadas: function(){
        return `(${this.x},${this.y})`;
    }
};
console.log(punto.mostrarCoordenadas()); // Salida: (19,36)

// Ejemplo 2 del uso de la PALABRA RESERVADA THIS
function doblarX() {
    this.x*=2;
}

let punto = {
    x: 15,
    y: 7,
    doble: doblarX
};

let incognita = {
    x: 5,
    dbl:doblarX
};

punto.doble();
incognita.dbl();
console.log(punto.x); // Salida: 30
console.log(incognita.x); // Salida: 10

// La función doblarX sirve para multiplicar por dos la propiedad
// x del objeto que sea propietario de esta propiedad. 
// Cuando esta función se asigna al método doble del objeto punto
// lo que ocurrirá, cuando se la invoque, es que se doblará el
// valor x de la propiedad del punto. Lo mismo ocurre cuando asignamos
// la función doblarX al método dbl del objeto incognita.
// La palabra this permite llegar al objeto en cuestión y, por eso,
// podemos definir métodos, propiedades y funciones de forma más
// abstracta, y que funcionan incluso en objetos distintos.