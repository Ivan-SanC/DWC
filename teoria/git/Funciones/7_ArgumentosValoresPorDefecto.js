/* ------------- ARGUMENTOS CON VALORES POR DEFECTO -------------------*/
// En JS, Los parámetros pueden tener un valor por defecto. Eso convierte a
// dicho parámetro en opcional: es decir, podemos enviar o no valores para ese
// parámetro.
// Las funciones pueden utilizar tantos parámetros por defecto como se desee.

function saludo(texto='Hola'){
    console.log(texto);
}

saludo(); // Salida: Hola
saludo('Buenos días'); // Salida: Buenos días
