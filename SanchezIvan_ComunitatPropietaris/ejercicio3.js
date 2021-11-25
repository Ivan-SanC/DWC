function Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal){
    
    //propiedades
    this.tipoVia=tipoVia;
    this.nombreVia=nombreVia;
    this.numeroEdificio=numeroEdificio;
    this.codigoPostal=codigoPostal;
    this.mapaPropiertariosEdificio=new Map();


    //METODOS

        //Agregar
    this.agregarPlanta=function(numeroPlanta){
        this.mapaPropiertariosEdificio.set(numeroPlanta,new Map());
    }

    this.agregarPuerta=function(numeroPlanta,numeroPuerta){
        this.mapaPropiertariosEdificio.get(numeroPlanta).set(numeroPuerta,new Array());
    }

    this.agregarPropietario=function(nombrePropietario,numeroPlanta,numeroPuerta){
        this.mapaPropiertariosEdificio.get(numeroPlanta).get(numeroPuerta).push(nombrePropietario);
    }


        //Modificar
    this.modificarTipoVia=function(nuevoTipoVia){
        this.tipoVia=nuevoTipoVia;
    }

    this.modificarNombreVia=function(nuevoNombreVia){
        this.nombreVia=nuevoNombreVia
    }

    this.modificarNumeroEdificio=function(nuevoNumeroEdificio){
        this.numeroEdificio=nuevoNumeroEdificio;
    }

    this.modificarCodigoPostal=function(nuevoCodigoPostal){
        this.codigoPostal=nuevoCodigoPostal;
    }


        //Imprimir
    this.imprimirTipoVia=()=>this.tipoVia;
    this.imprimirNombreVia=()=>this.nombreVia;
    this.imprimirNumeroEdificio=()=>this.numeroEdificio;    
    this.imprimirCodigoPostal=()=>this.codigoPostal;
        
    this.imprimirTodosPropietarios=function(){
        let string="";

        for (let [plantas,puertas] of this.mapaPropiertariosEdificio) {
            string += `<h2>Planta: ${plantas}</strong></h2>`;
    
            for(let[puerta,propietarios]of puertas){
                string +=`<h3>&nbsp;&nbsp;&nbsp;Puerta: ${puerta}</h3>`;
                            
                for(let i=0;i<propietarios.length;i++){
                    string+=  `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${propietarios[i]}</p>`;
                }
            }
        }
        return string;
    }
    
}
//Ejercicio 3
//https://github.com/blnlaserna/20211111-16_Teoria/blob/main/14_ExpresionesRegulares.js
let tipoVia;
let nombreVia;
let numEdf;
let cp;
let planta;
let puerta;
let propietario;
let cancelar=false;

do{
    //preguntar que datos no se deben repetir
    tipoVia=prompt("Introduce el tipo de vìa:");
    if(tipoVia==null||tipoVia==""){
        cancelar=true;
    }

    nombreVia=prompt("Introduce el nombre de la vía: ");
    if(nombreVia==null||nombreVia==""){
        cancelar=true;
    }

    numEdf=prompt("Introduce el numero del edificio: ");
    if(numEdf==null||numEdf==""){
        cancelar=true;
    }
    //solo numeros 5max
        cp=prompt("Introduce el código postal: ");
    if(cp==null||cp==""){
        cancelar=true;
    }
    
    //no negativas
    planta=prompt("Introduce la planta: ");
    if(planta==null||planta==""){
        cancelar=true;
    }
    //no negativas
    puerta=prompt("Introduce la puerta: ");
    if(puerta==null||puerta==""){
        cancelar=true;
    }

    //solo letras confirm para otro propietario
    propietario=prompt("Introduce el propietario: ");
    if(propietario==null||propietario==""){
        cancelar=true;
    }
    if(cancelar==false){
        alert("Se ha introducido un dato nuevo")
        //guarda los datos
        //tipoVia; nombreVia; numEdf; cp; planta; puerta; propietario;
    }
}while(cancelar==false);