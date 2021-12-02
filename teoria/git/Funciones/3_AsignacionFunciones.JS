/* -------------------ASIGNAR FUNCIONES A VARIABLES ------------------------*/
// El acceso al código de una función en JS se puede realizar de diversas formas
// Función anónima. La función no tiene nombre.

const trip = function(x) {
    return 3*x;
}

// El código de la función es accesible porque se lo estamos asignando a la 
// variable trip. Aunque trip es una variable, puede acceder al código de la 
// función de la misma forma que si hubiera puesto ese nombre a la función.

console.log(trip(3)); //Salida: 9

// La variable es una referencia a la función.

// El hecho de declarar trip como constante (const) tiene sentido si esa 
// variable siempre se asocia con la función a la que se asigna en la declaración,
// si asignamos otra función ocurriría error porque cambiamos la referencia.

// Dos variables pueden hacer referencia a la misma función
const trip = function(x) {
    return 3*x;
}

let x = trip;
console.log(x(8)); // Salida: 24

