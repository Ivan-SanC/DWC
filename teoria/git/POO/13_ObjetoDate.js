/* -------------------OBJETO DATE------------------------*/
// Es un tipo de objeto preparado para manejar fechas.
// Crear un objeto de fecha es usar el constructor de objetos Date.
// En la construcción más simple, la función Date no requiere
// parámetros.

// Ejemplo de construcción simple
let hoy = new Date();
console.log(hoy); // Salida: 2021-11-10T18:38:02.186Z

// Un objeto tipo Date representa un momento concreto del tiempo

/* Los objetos Date se pueden crear indicando una fecha concreta
     de la siguiente manera:
        new Date(año,mes,dia,hora,minutos,segundos,ms);
*/

// Ejemplo de fecha concreta
let fecha = new Date(2021,11,10,18,12,0,0);
console.log(fecha); // Salida: 2021-12-10T17:12:00.000Z
// Considera que Enero es el mes 0 por eso indica el mes 12 en 
// la salida.

// No se obligatorio indicar todos los datos
let fecha = new Date(2021,11,10);
console.log(fecha); // Salida: 2021-12-09T23:00:00.000Z

// También se puede crear una fecha a partir del número de
// milisegundos transcurridos desde el 1 de enero de 1970.
let fecha2 = new Date(1000);
console.log(fecha2); // Salida: 1970-01-01T00:00:01.000Z

/* Lista de métodos del objeto Date:
        https://www.w3schools.com/js/js_dates.asp
        https://www.w3schools.com/js/js_date_methods.asp
        https://www.w3schools.com/js/js_date_methods_set.asp

    Formato de las fechas:
        https://www.w3schools.com/js/js_date_formats.asp
*/