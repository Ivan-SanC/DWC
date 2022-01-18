const Paciente = function (numeroRegistro, nombreCompleto, numeroSS, direccion) {

    this.comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
        let patronNumeroRegistro = /^[A-Z]{3}[0-9]{3}$/;
        let patronNombreCompleto = /^[A-ZÁÉÍÓÚÇ][a-záéíóúü]+ [[A-ZÁÉÍÓÚÇ]{1,2}\.$/;
        let patronNumeroSS = /^[0-9]{0,9}$/;
        let patronDireccion = /^(C\/|Av\.)[A-ZÁÉÍÓÚÇ][a-záéíóúü]+ ?[a-záéíóúü ]*, [0-9]+$/;

        let patrones = new Map([
            ['numeroRegistro', patronNumeroRegistro],
            ['nombre', patronNombreCompleto],
            ['numeroSS', patronNumeroSS],
            ['direccion', patronDireccion]
        ]);
        
        return patrones.get(tipoComprobacion).test(elementoAComprobar);
    }


    // SETTERS del objeto
    this.modificarNumeroRegistro = function (nuevoNumeroRegistro) {
        if (this.comprobarPatrones(nuevoNumeroRegistro, 'numeroRegistro')) {
            this.numeroRegistro = nuevoNumeroRegistro;
        }
        
    }

    this.modificarNombreCompleto = function (nuevoNombreCompleto) {
        if (this.comprobarPatrones(nuevoNombreCompleto, 'nombre')) {
            this.nombreCompleto = nombreCompleto;
        }
        
    }

    this.modificarNumeroSS = function (nuevoNumeroSS) {
        if (this.comprobarPatrones(nuevoNumeroSS, 'numeroSS')) {
            this.numeroSS = nuevoNumeroSS;
        } 
        
    }

    this. modificarDireccion = function (nuevaDireccion) {
        if (this.comprobarPatrones(nuevaDireccion, 'direccion')) {
            this.direccion = nuevaDireccion;
        }
    }


    // GETTERS del objeto
    this.imprimirNumeroRegistro = function () {
        return numeroRegistro;
    }

    this.imprimirNombrecompleto = function () {
        return nombreCompleto;
    }

    this.imprimirNumeroSS = function () {
        return numeroSS;
    }

    this.imprimirDireccion = function () {
        return direccion;
    }

    if (this.comprobarPatrones(numeroRegistro, 'numeroRegistro')) {
        this.numeroRegistro = numeroRegistro;
    } else {
        this.numeroRegistro = "";
    }

    if (this.comprobarPatrones(nombreCompleto, 'nombre')) {
        this.nombreCompleto = nombreCompleto;
    } else {
        this.nombreCompleto = "";
    }

    if (this.comprobarPatrones(numeroSS, 'numeroSS')) {
        this.numeroSS = numeroSS;
    } else {
        this.numeroSS = "";
    }

    if (this.comprobarPatrones(direccion, 'direccion')) {
        this.direccion = direccion;
    } else {
        this.direccion = "";
    }

}

const registroPacientes = new Map([
    [`AAA024`, `Fernández M. (321790059) -> C/Recoletos, 50`],  
    [`BCD827`, `Ruíz P. (100973253) -> C/Esquerdo izquierdo, 103`],
    [`YUN835`,`Benítez E. (154811767) -> Av.Argentina, 5`]
]);


var numeroRegistroPaciente;
var nombrePaciente;
var numeroSSPaciente;
var direccionPaciente;
const agendaPacientes = new Map();
var contadorPacientes = 0;

let registro = registroPacientes.entries()

/*
for(let [numPaciente,datos] of registro){
    contadorPacientes++
    numeroRegistroPaciente=numPaciente;

    let dato=datos.replace(" (","-");
    console.log(dato);
    dato=dato.replace(") -> ","-");

    let datoLimpio=dato.split("-");
    console.log(datoLimpio);
    nombrePaciente=datoLimpio[0];
    console.log(nombrePaciente);
    numeroSSPaciente=datoLimpio[1];
    console.log(numeroSSPaciente);
    direccionPaciente=datoLimpio[2]
    console.log(direccionPaciente);
    agendaPacientes.set("Paciente "+contadorPacientes,new Paciente(numeroRegistroPaciente, nombrePaciente, numeroSSPaciente, direccionPaciente));
    
}
console.log(agendaPacientes);
*/

//OPCION BELEN

for (let [numeroRegistro, datos] of registroPacientes){
    contadorPacientes++;
    numeroRegistroPaciente = numeroRegistro;
    nombrePaciente = datos.split(' (')[0];
    console.log(nombrePaciente);
    numeroSSPaciente = datos.split('(')[1].split(')')[0];
    console.log(numeroSSPaciente);
    direccionPaciente = datos.split('-> ')[1];
    console.log(direccionPaciente);
    //agendaPacientes.set(contadorPacientes, new Paciente(numeroRegistroPaciente,
      //  nombrePaciente, numeroSSPaciente, direccionPaciente));
}

//console.log(agendaPacientes);
