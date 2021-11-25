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


//Ejercicio 2 JSON
//https://programmerclick.com/article/151521994/
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

//https://github.com/blnlaserna/20211111-16_Teoria/blob/main/6_RecorrerPropiedadesObjeto.js
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects
//https://www.delftstack.com/es/howto/javascript/loop-through-object-javascript/

//Tranforma el edificio1 de JSON a objeto
let edificio2=JSON.parse(edificio1);
console.log(edificio2);

//Funcion para transformar edificio2 a objeto de Edificio
function transformaObjeto(obj){

//Se crea el nuevo Edificio
let nuevoEdificio=new Edificio(obj.tipoVia, obj.nombreVia, obj.numeroEdificio, obj.codigoPostal);

    //bucles para recorrer los atributos de mapaPropietarios y agregarlos a nuevoEdificio
    for (let planta in obj.mapaPropietariosEdificio) {
    nuevoEdificio.agregarPlanta(planta);

        for (let puerta in obj.mapaPropietariosEdificio[planta]) {
        nuevoEdificio.agregarPuerta(planta, puerta);

            for (let propietario in obj.mapaPropietariosEdificio[planta][puerta]) {
            nuevoEdificio.agregarPropietario(obj.mapaPropietariosEdificio[planta][puerta][propietario], planta, puerta);  
            }
        }
    }
    return nuevoEdificio;
}

let edificioArreglado=transformaObjeto(edificio2);

//Fondo aleatorio
function randomColor(){
    var x = parseInt(Math.random() * 256);
    var y = parseInt(Math.random() * 256);
    var z = parseInt(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

//Ejecucion
document.body.style.background = bgColor;
}

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace
/*let tabulacion=edificioArreglado.imprimirTodosPropietarios().replace(/\t/g,"&nbsp;&nbsp;&nbsp;");
let saltos=tabulacion.replace(/\n/g,"<br>");
let edificioHtml=saltos;
document.write(`<h1>Comunitat de propietaris<br>${edificioArreglado.imprimirTipoVia()} ${edificioArreglado.imprimirNombreVia()},
${edificioArreglado.imprimirNumeroEdificio()} C.P ${edificioArreglado.imprimirCodigoPostal()}</h1>${edificioHtml}`);*/

//Ejecucion HTML
    //Texto
document.write(`<h1>Comunitat de propietaris<br>${edificioArreglado.imprimirTipoVia()} ${edificioArreglado.imprimirNombreVia()},
${edificioArreglado.imprimirNumeroEdificio()} C.P ${edificioArreglado.imprimirCodigoPostal()}</h1>${edificioArreglado.imprimirTodosPropietarios()}`);
    //Fondo
randomColor();    