/* Declaración de variables */
var numero;
var respuesta;
var cont;
var salir = false;
var repetir = false;

do {
    //Obtención de valores
    cont = 0;
    numero = parseInt(Math.random()*101) + 1;

    /* Comienza el juego. Continua hasta que salga o acierte*/
    do {

        do {
            /* Obtención y pre-comprobación de la respuesta:
                ERROR
                    Número negativo
                    Número superior a 100
                    No se introduce un número
                CANCELACIÓN (null)
                    Botón CANCELAR
            */
            respuesta = prompt("¿Qué número del 1 al 100 estoy pensando?");

            if (respuesta == null) {
                salir = true;
            } else if (!Number(respuesta) || respuesta < 0 || respuesta > 100){
                alert ('Número no válido');
                repetir = true;
            }
        } while (!salir && repetir)
        
        cont++

        /* Comprobación de la respuesta:
                - Respuesta del usuario mayor que el número a acertar
                - Respuesta del usuario menor que el número a acertar    
        */
       if (!salir) {
           if (numero > respuesta) {
                alert(`Mi número es mayor`);
           } else if (numero < respuesta) {
               alert(`Mi número es menor`);
           }
       } 
    } while (!salir && respuesta != numero);

    /* Comprobación de la respuesta:
            ACIERTO
    */
    if (!salir) {
        alert(`Acertaste!! Intentos: ${cont}`);
    }
} while (!salir && confirm(`¿Deseas volver a jugar?`));

/* Mensaje en función de la elección del usuario */
if (salir) {
    document.write ("<h1>Se canceló la partida</h1>");
} else {
    document.write("<h1>Gracias por jugar</h1>");
}