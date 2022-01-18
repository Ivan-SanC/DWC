function Paciente(numeroRegistro,nombreCompleto,numeroSS,direccion){

    //Comprobar
    this.comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
        let patronNumeroRegistro= new RegExp('^[A-Z]{3}[0-9]{3}$'); // Contiene el patrón para comprobar el número de registro
        let patronNombreCompleto=new RegExp('^([A-Z]{1}[a-z]+)\\s[A-Z]{1-2}\\.$'); // Contiene el patrón para comprobar el nombre
        let patronNumeroSS=new RegExp('^[0-9]{9}$'); // Contiene el patrón para comprobar el número de la seguridad social
        let patronDireccion=new RegExp('^(C\\/|Av\\.)([A-Z]([a-z]+|([a-z]+\\s[a-z]+))), [0-9]+'); // Contiene el patrón para comprobar la dirección
    
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

    
    //Modificar
    this.modificarNumeroRegistro=function(nuevoNumeroRegistro){
        if(this.comprobarPatrones(nuevoNumeroRegistro,"numeroRegistro")){
            this.numeroRegistro=numeroRegistro;
        }
    }

    this.modificarNombreCompleto=function(nuevoNombreCompleto){
        if(this.comprobarPatrones(nuevoNombreCompleto,"nombre")){
            this.nombreCompleto=nombreCompleto;    
        }
    }

    this.modificarNumeroSS=function(nuevoNumeroSS){
        if(this.comprobarPatrones(nuevoNumeroSS,"numeroSS")){
            this.numeroSS=numeroSS;
        }
    }

    this.modificarDireccion=function(nuevaDireccion){
        if(this.comprobarPatrones(nuevaDireccion,"direccion")){
            this.direccion=numeroRegistro;
        }
    }

    //Imprimir
    this.imprimirNumeroRegistro=()=>this.numeroRegistro;
    this.imprimirNombreCompleto=()=>this.nombreCompleto;
    this.imprimirNumeroSS=()=>this.numeroSS;
    this.imprimirDireccion=()=>this.direccion;

    //variables
    if(this.comprobarPatrones(numeroRegistro,"numeroRegistro")){
        this.numeroRegistro=modificarNumeroRegistro(numeroRegistro);
    }else{
        this.numeroRegistro="";
    }
    
    if(this.comprobarPatrones(nombreCompleto,"nombre")){
        this.nombreCompleto=modificarNumeroSS(nombreCompleto);    
    }else{
        this.nombreCompleto="";
    }

    if(this.comprobarPatrones(numeroSS,"numeroSS")){
        this.numeroSS=modificarDireccion(numeroSS);
    }else{
        this.numeroSS="";
    }

    if(this.comprobarPatrones(direccion,"direccion")){
        this.direccion=modificarDireccion(direccion);
    }else{
        this.direccion="";
    }

}

