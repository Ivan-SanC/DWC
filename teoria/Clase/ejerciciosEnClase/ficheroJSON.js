//import {Edificio} from "./edificio.js";

let edificio1 = `{
    "tipoVia":"Calle",
    "nombreVia":"García Prieto",
    "numeroEdificio": "58A",
    "codigoPostal": "07010",
    "mapaPropietariosEdificio": {
        "A": {
            "1A": ["José Antonio López"],
            "2A": ["Luisa Martínez"],
            "3A": ["Marta Castellón", "José Montero"]
        },
        "B": {
            "1B": [],
            "2B": ["Antonio Pereira"],
            "3B": []
        }
    }
}`;



function cambiarColorFondo() {
    let red = parseInt(Math.random() * 256);
    let green = parseInt(Math.random() * 256);
    let blue = parseInt(Math.random() * 256);
    color = `rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor = color;
}


const edificioJSON = JSON.parse(edificio1);
 
const edificioIncorrecto = new Edificio();
Object.assign (edificioIncorrecto,edificioJSON);

var tipoViaRaw = edificioIncorrecto.imprimirTipoVia();
var nombreViaRaw = edificioIncorrecto.imprimirNombreVia();
var numeroEdificioRaw = edificioIncorrecto.imprimirNumeroEdificio();
var codigoPostalRaw = edificioIncorrecto.imprimirCodigoPostal();



const edificioCorrecto = new Edificio (tipoVia, nombreVia, numeroEdificio, codigoPostal);

for (let i of Object.keys(edificioIncorrecto.mapaPropietariosEdificio)) {
    edificioCorrecto.agregarPlanta(i);

    for (let j of Object.keys(edificioIncorrecto.mapaPropietariosEdificio[i])) {
        edificioCorrecto.agregarPuerta(i,j);

        for (let k of edificioIncorrecto.mapaPropietariosEdificio[i][j]) {
            edificioCorrecto.agregarPropietario(k,i,j);
        }
    }
};

var stringListadoPropietariosPorPiso = edificioCorrecto.imprimirTodosPropietarios();

var arrayListadoPropietariosPorPiso = stringListadoPropietariosPorPiso.split("\n");

var tituloHTML1 = `<h1 style="text-align:center;">COMUNITAT PROPIETARIS<br>` +
        `${tipoVia} ${nombreVia}, ${numeroEdificio} C.P. ${codigoPostal}`;
document.write(tituloHTML1);


arrayListadoPropietariosPorPiso= arrayListadoPropietariosPorPiso.slice(1);

for (let elementoArray of arrayListadoPropietariosPorPiso) {
    if (elementoArray.includes("Planta")) {
        let tituloHTML2 = `<h2><strong> ${elementoArray} </strong></h2>`; 
        document.write(tituloHTML2);
    } else if (elementoArray.includes("Puerta")) {
        identificadorPuerta = encontrarDatosDeseadosConSeparador(elementoArray, "?");
        let tituloHTML3 = `<h3><strong>&nbsp;&nbsp;&nbsp;&nbsp;${identificadorPuerta}</strong></h3>`; 
        document.write(tituloHTML3);
    } else {
        let propietarioPorPuerta = encontrarDatosDeseadosConSeparador(elementoArray, "\t");
        let parrafoHTML = `<pre>        ${propietarioPorPuerta}</pre>`; 
        document.write(parrafoHTML);
    }
}

cambiarColorFondo();

