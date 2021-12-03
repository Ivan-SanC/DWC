function Paciente(numeroRegistro,nombreCompleto,numeroSS,direccion){
    //variables
    this.numeroRegistro=numeroRegistro;
    this.nombreCompleto=nombreCompleto;
    this.numeroSS=numeroSS;
    this.direccion=direccion;


    //Modificar
    this.modificarNumeroRegistro=function(nuevoNumeroRegistro){
        this.numeroRegistro=nuevoNumeroRegistro;
    }
    this.modificarNombreCompleto=function(nuevoNombreCompleto){
        this.nombreCompleto=nuevoNombreCompleto;
    }
    this.modificarNumeroSS=function(nuevoNumeroSS){
        this.numeroSS=nuevoNumeroSS;
    }
    this.modificarDireccion=function(nuevaDireccion){
        this.direccion=nuevaDireccion;
    }

    //Imprimir
    this.imprimirNumeroRegistro=()=>this.numeroRegistro;
    this.imprimirNombreCompleto=()=>this.nombreCompleto;
    this.imprimirNumeroSS=()=>this.numeroSS;
    this.imprimirDireccion=()=>this.direccion;

    //Comprobar
    this.comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
        let patronNumeroRegistro= new RegExp('^[A-Z]{3}[0-9]{3}$'); // Contiene el patrón para comprobar el número de registro
        let patronNombreCompleto=new RegExp('^([A-Z]{1}[a-z]+)\\s[A-Z]{1-2}\\.$'); // Contiene el patrón para comprobar el nombre
        let patronNumeroSS=new RegExp('^[0-9]{9}$'); // Contiene el patrón para comprobar el número de la seguridad social
        let patronDireccion=new RegExp('^(C\\/|Av\\.)([A-Z]([a-z]+|([a-z]+\\s[a-z]+))),[0-9]+'); // Contiene el patrón para comprobar la dirección
    
        let patrones = new Map([
            ['numeroRegistro', patronNumeroRegistro],
            ['nombre', patronNombreCompleto],
            ['numeroSS', patronNumeroSS],
            ['direccion', patronDireccion]
        ]);
        //variable que guarda el boleano
        let validar;
        //for of para buscar la clave y hacer la validacion
        for (let [clave,valor] of patrones) {
            if(clave==tipoComprobacion){
                validar=valor.test(elementoAComprobar);
            }
        }
        
        return validar;//Devolver el valor true si se cumple el patrón y false si no se cumple
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

