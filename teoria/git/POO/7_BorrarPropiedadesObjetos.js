/* --------------BORRAR PROPIEDADES DE OBJETOS----------------*/
// OPERADOR DELETE
// El operador delete permite borrar propiedades de los objetos.
// Se usa indicando, detrás de la palabra delete, la propiedad a
// borrar.

// Ejemplo
let objeto = {
    x: 18,
    y: -10,
    z: -1
};

delete objeto.z;
console.log(objeto.x); // Salida: 18
console.log(objeto.z); // Salida: undefined
console.log(objeto);