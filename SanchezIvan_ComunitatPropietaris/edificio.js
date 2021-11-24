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
    this.imprimirTipoVia=()=> "Tipo de via: "+this.tipoVia;

    this.imprimirNombreVia=()=>"Nombre de la vía: "+this.nombreVia;

    this.imprimirNumeroEdificio=()=>"Número del edificio: "+this.numeroEdificio;
    
    this.imprimirCodigoPostal=()=>"Código Postal(CP): "+this.codigoPostal;
    
    this.imprimirTodosPropietarios=function(){
        let string="";
        for (let [plantas,puertas] of this.mapaPropiertariosEdificio) {
            string += ` Planta: ${plantas} \n`;

                    for(let[puerta,propietarios]of puertas){
                        string +=`\t Puerta: ${puerta} \n`;
                        
                        for(let i=0;i<propietarios.length;i++){
                          string+=  `\t\t ${propietarios[i]} \n`;
                        }
                    }
            }
            return string;
        }
    
}
const edificio1 = new Edificio('calle', 'marques rubio', 70, '07005');

edificio1.agregarPlanta('1A');
edificio1.agregarPlanta('1B');

edificio1.agregarPuerta('1A','3');
edificio1.agregarPuerta('1A','2');
edificio1.agregarPuerta('1B','1')

edificio1.agregarPropietario('Belén Laserna Belenguer','1A','3');
edificio1.agregarPropietario('Pedro Jimenez Vázquez','1A','3');
edificio1.agregarPropietario('Ana María Rodriguez Figuerola', '1A','2');
edificio1.agregarPropietario('Miguel López López','1B','1');
console.log(edificio1);
console.log(edificio1.imprimirTodosPropietarios());

edificio1.modificarTipoVia('avenida');
edificio1.modificarNombreVia('Marques de la Fontsanta');
edificio1.modificarNumeroEdificio('60A');
edificio1.modificarCodigoPostal('007005');

console.log(edificio1.imprimirTipoVia());
console.log(edificio1.imprimirNombreVia());
console.log(edificio1.imprimirNumeroEdificio());
console.log(edificio1.imprimirCodigoPostal());



//Ejercicio 2 JSON
//https://programmerclick.com/article/151521994/
let edificio2 = `{
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
let edificio3=JSON.parse(edificio2);
console.log(edificio3);

function transformaJson(objEdificio){
    
    
}


console.log(transformaJson(edificio3));
//no imprime map
console.log(edificio3.imprimirTodosPropietarios());

//Ejercicio 3
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
    //como meter mas de un propietario?
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
    //solo numeros
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

    //solo letras
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