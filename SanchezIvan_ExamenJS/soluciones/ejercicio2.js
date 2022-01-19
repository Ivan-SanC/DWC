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

const paciente1 = new Paciente('AAA455','Lopez AM.','145623987','Av.Felicidad, 8');
console.log(paciente1);