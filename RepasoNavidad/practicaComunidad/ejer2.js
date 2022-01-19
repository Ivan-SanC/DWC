function Edificio(tipoVia, nombreVia, numeroEdificio,codigoPostal){
    this.tipoVia=tipoVia;
    this.nombreVia=nombreVia;
    this.numeroEdificio=numeroEdificio;
    this.codigoPostal=codigoPostal;
    this.mapaPropietariosEdificio=new Map();

    this.agregarPlanta=function(numeroPlanta){
        this.mapaPropietariosEdificio.set(numeroPlanta,new Map());

    }

    this.agregarPuerta=function(numeroPlanta,numeroPuerta){
        this.mapaPropietariosEdificio.get(numeroPlanta).set(numeroPuerta,new Array());
    }

    this.agregarPropietario=function(nombrePropietario,numeroPlanta,numeroPuerta){
    this.mapaPropietariosEdificio.get(numeroPlanta).get(numeroPuerta).push(nombrePropietario);
    }

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

    this.imprimirTipoVia=()=>`Tipo de via: ${this.tipoVia}`;
    this.imprimirNombreVia=()=>`Nombre de la vía: ${this.nombreVia}`;
    this.imprimirNumeroEdificio=()=>`Número del edificio: ${this.numeroEdificio}`;
    this.imprimirCodigoPostal=()=>`Código Postal(CP): ${this.codigoPostal}`;

    this.imprimirTodosPropietarios=function(){
        let string="";

        for(let [planta, puertas] of this.mapaPropietariosEdificio){
           
            string +=` Planta: ${planta} \n`;
           
            for(let [puerta,propietarios]of puertas){
           
                string +=`\t Puerta: ${puerta} \n`;
            
                for(let propietario of propietarios){
          
                    string +=`\t\t ${propietario}\n`;
                }
            }
        }
        return string;
    }

}

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

let edificioObjeto=JSON.parse(edificio1);
//console.log(edificioObjeto);

function transformarObjeto(obj){

    let nuevoEdificio=new Edificio(obj["tipoVia"],obj["nombreVia"],obj["numeroEdificio"],obj["codigoPostal"]);
    
    for(let planta in obj["mapaPropietariosEdificio"]){
        nuevoEdificio.agregarPlanta(planta);

        for(let puerta in obj["mapaPropietariosEdificio"][planta]){
            nuevoEdificio.agregarPuerta(planta,puerta);
            for(let propietario in obj["mapaPropietariosEdificio"][planta][puerta] ){
                nuevoEdificio.agregarPropietario(obj["mapaPropietariosEdificio"][planta][puerta][propietario],planta,puerta);
            }
        }
    }
    return nuevoEdificio;

}

let edificioArreglado=transformarObjeto(edificioObjeto);


//Funcion fondo aleatorio
function randomColor(){
    var x = parseInt(Math.random() * 256);
    var y = parseInt(Math.random() * 256);
    var z = parseInt(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

document.body.style.background = bgColor;
}
/*
string +=`Planta: ${planta} \n`;
string +=`\t Puerta: ${puerta} \n`;
string +=`\t\t ${propietario}\n`;
*/

let tabulacion=edificioArreglado.imprimirTodosPropietarios().replace(/\t/g,"&nbsp;&nbsp;&nbsp;");
let saltos=tabulacion.replace(/\n/g,"<br>");

let edificioArray=saltos.split("<br>");

for(let i=0; i<edificioArray.length;i++){
    if(edificioArray[i].includes("Planta")){
        edificioArray[i]=`<h2>${edificioArray[i]}</h2>`;
    }else if(edificioArray[i].includes("Puerta")){

        edificioArray[i]=`<h3>${edificioArray[i]}</h3>`;
        
        }else{
        edificioArray[i]=`<p>${edificioArray[i]}</p>`
        
        }
}

let edificioJoin=edificioArray.join(" ");

document.write(`<h1>Comunitat de propietaris<br>${edificioArreglado.imprimirTipoVia()} ${edificioArreglado.imprimirNombreVia()},
${edificioArreglado.imprimirNumeroEdificio()} C.P ${edificioArreglado.imprimirCodigoPostal()}</h1>${edificioJoin}`);
//Fondo
randomColor();
