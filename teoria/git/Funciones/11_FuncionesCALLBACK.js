/* --------------------FUNCIONES CALLBACK---------------------*/
// Si  las funciones se pueden asignar a variables, también se pueden asignar
// a parámetros de las funciones. Esto permite que las funciones puedan recibir
// datos y acciones a realizar.

function escribe(dato, funcion) {
    funcion(dato);
}

escribe('Hola', console.log); // Salida: Hola
escribe('Hola', console.error); // Salida: Hola 

// console.error -> Método que permite escribir un error por consola. La
// diferencia con console.log es que el texto sale coloreado en rojo. Lo
// interersante es que la función cambia la forma de escribir debido a la 
// función que usamos.

function escribir(x,accion){
    console.log(accion(x));
}

function doble(y){
    return 2*y;
}

escribir(12,doble); // Salida: 24

// Muy habitual usar funciones callback usando funciones anónimas.
function escribir(x,accion){
    console.log(accion(x));
}

escribir(12,function(y){
    return 2*y
}); // Salida: 24

// También se pueden usar funciones flecha
function escribir(x,accion){
    console.log(accion(x));
}
escribir(12,y=>2*y); // Salida: 24

// Hay muchos métodos de objetos básicos de JS que requieren utilizar funciones
// callback. El uso de estos métodos facilita su aprendizaje.