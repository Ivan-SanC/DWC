/* 1. DELIMITAR STRINGS*/
//Comillas dobles
var nombre1 = "Belen";
console.log(nombre1);
//Comillas simples
var nombre2 = 'Belen';
console.log(nombre2);
//Comillas invertidas (backticks)
var nombre3 = `Belen`;
console.log(nombre3);

/* 2. USO DE LA PLANTILLA DE STRING */
var nombre = "Belen"
console.log("Me llamo nombre"); //No devuelve el valor de la variable nombre
console.log("Me llamo " + nombre); //Funciona usando el operador de concatenación
console.log(`Me llamo ${nombre}`); //Funciona usando plantilla de string (String templates)
console.log(`En un día hay ${24*60*60} segundos`); //Otro ejemplo con plantilla de string

/* 3. SECUENCIAS DE ESCAPE */
//Salto de línea (\n)
console.log(`Una línea \nOtra línea`);
//Tabulado (\t)

//Retorno de carro (\r)

//Salto de página (\f)

//Tabulador vertical (\v)

//Comillas dobles (\")
let texto="Paseado por la calle a l'horabaixa dijo \"¡Qué calor!\"";
console.log(texto);

//Comillas simples (\')

//Retroceso (\b)

//El propio carácter backslash (\\)

//Almacenar en strings carácteres Unicode
console.log("\u2A1D");
console.log("\u{1F48B}")
