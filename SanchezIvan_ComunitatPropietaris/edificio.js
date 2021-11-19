function Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal){
    
    //propiedades
    this.tipoVia=tipoVia;
    this.nombreVia=nombreVia;
    this.numeroEdificio=numeroEdificio;
    this.codigoPostal=codigoPostal;
    this.mapaPropiertariosEdificio=new Map();

    //Metodos
    this.agregarPlanta=function(numeroPlanta){
        this.numeroPlanta=numeroPlanta;
    }
    this.agregarPropietario=function(nombrePropietario,numeroPlanta,numeroPuerta){
        this.nombrePropietario=nombrePropietario;
        this.numeroPlanta=numeroPlanta;
        this.numeroPuerta=numeroPuerta;
    }

    

}