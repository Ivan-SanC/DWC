function Paciente(numeroRegistro,nombreCompleto,numeroSS,direccion){
    this.comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
        let patronNumeroRegistro= new RegExp('^[A-Z]{3}[0-9]{3}$'); // Contiene el patrón para comprobar el número de registro
        let patronNombreCompleto=new RegExp('^[A-Z]{1}[a-záéíóúü]*\\s[A-Z]{1,2}\\.$'); // Contiene el patrón para comprobar el nombre
        let patronNumeroSS= new RegExp('^[0-9]{9}$'); // Contiene el patrón para comprobar el número de la seguridad social
        let patronDireccion=new RegExp('^(C\/||Av\.)[A-Z]{1}[a-záéíóúü]+( [a-záéíóúü]*)*, [0-9]+$'); // Contiene el patrón para comprobar la dirección
    
        let patrones = new Map([
            ['numeroRegistro', patronNumeroRegistro],
            ['nombre', patronNombreCompleto],
            ['numeroSS', patronNumeroSS],
            ['direccion', patronDireccion]
        ]);
        
        return patrones.get(tipoComprobacion).test(elementoAComprobar);//Devolver el valor true si se cumple el patrón y false si no se cumple
    }

    this.modificarNumeroRegistro=function(nuevoNumeroRegistro){
        if(this.comprobarPatrones(nuevoNumeroRegistro,"numeroRegistro")){
            this.numeroRegistro=nuevoNumeroRegistro;
        }

    }

    this.modificarNombreCompleto=function(nuevoNombreCompleto){
        if(this.comprobarPatrones(nuevoNombreCompleto,"nombre")){
            this.NombreCompleto=nuevoNombreCompleto;
        }
    }

    this.modificarNumeroSS=function(nuevoNumeroSS){
        if(this.comprobarPatrones(nuevoNumeroSS,"numeroSS")){
            this.numeroSS=nuevoNumeroSS;
        }
    }

    this.modificarDireccion=function(nuevaDireccion){
        if(this.comprobarPatrones(nuevaDireccion,"direccion")){
            this.direccion=nuevaDireccion;
        }
    }

    this.imprimirNumeroRegistro=()=>this.numeroRegistro;
    this.imprimirNombreCompleto=()=>this.nombreCompleto;
    this.imprimirNumeroSS=()=>this.numeroSS;
    this.imprimirDireccion=()=>this.direccion;

    

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