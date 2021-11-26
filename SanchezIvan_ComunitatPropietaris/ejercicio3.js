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
let plantaRepetida;
let puerta;
let puertaRepetida;
let propietario;
let cancelar=false;
let expCp= new RegExp('^[0-9]{5}$');
let expPuerta= new RegExp('-[0-9]')
let confirmar;
let continuar;
let existe=false;

do{
    let cont=0;
    //preguntar que datos no se deben repetir
    tipoVia=prompt("Introduce el tipo de vía:");
    if(tipoVia==null||tipoVia==""){
        cancelar=true;

    }else{
       
        nombreVia=prompt("Introduce el nombre de la vía: ");
       
        if(nombreVia==null||nombreVia==""){
        cancelar=true;
   
        }else{
           
            numEdf=prompt("Introduce el numero del edificio: ");
           
            if(numEdf==null||numEdf==""){
            cancelar=true;
           
            }else{
            
                //solo numeros 5max
                do{

                cp=prompt("Introduce el código postal: ");
                if(cp==null){
                    cancelar=true;
                }

                }while(!expCp.test(cp)&&cancelar==false);
                
                if(cancelar==false){
                   
                    do{
                        

                        //repetir hasta cancelar o algo escrito
                        do{
                            planta=prompt("Introduce la planta: ");
                   
                            if(planta==null){
                            cancelar=true;
                            }
                        }while(planta==""&&cancelar==false);

                        if(cancelar==false){
                        
                        //no negativas  vuleve a pedir puerta si existe la puerta?
                            do{
                                puertaRepetida=false;
                                plantaRepetida=false;
                                puerta=prompt("Introduce la puerta: ");
                                if(puerta==null){
                                cancelar=true;
                                }
                                
                                if(continuar==true){
                                    for (let [edfPlantas,edfPuertas] of edificio1.mapaPropiertariosEdificio) {
                                        if(planta==edfPlantas){
                                            plantaRepetida=true;
                                        }
                                        for(let[edfPuerta,edfPropietarios]of edfPuertas){
                                            if(puerta==edfPuerta){
                                            alert("Puerta Repetida");
                                            puertaRepetida=true;
                                            }
                                        }
                                    }
                                }
                                

                            }while((expPuerta.test(puerta)&&cancelar==false)||(puerta==""&&cancelar==false)||(cancelar==false&&puertaRepetida==true));
                            if(cancelar==false){
                            
                                 //solo letras confirm para otro propietario
                                do{ 
                                    do{
                                        propietario=prompt("Introduce el propietario: ");
                                        if(propietario==null){
                                        cancelar=true;
                                        }
                                    }while(propietario==""&&cancelar==false);
                                    
                                    if(confirmar==true&&cancelar==false){
                                    edificio1.agregarPropietario(propietario,planta,puerta);
                                    }
                                    
                                        if(cancelar==false){
                                
                                        if(cont==0){
                                            var edificio1=new Edificio(tipoVia,nombreVia,numEdf,cp);
                                            edificio1.agregarPlanta(planta);
                                            edificio1.agregarPuerta(planta,puerta);
                                            edificio1.agregarPropietario(propietario,planta,puerta);
                                            cont++;
                                            existe=true;

                                        }else if(cont>0&&confirmar==false){
                                            if(plantaRepetida==false){
                                                edificio1.agregarPlanta(planta);
                                            }
                                            edificio1.agregarPuerta(planta,puerta);
                                            edificio1.agregarPropietario(propietario,planta,puerta);

                                        }
                                    
                                            confirmar=confirm("¿Quieres introducir otro propietario?");
                                        if (confirmar==false){
                                            cancelar=true;
                                        }
                                    }
                                
                                
                                }while(cancelar==false);
                                if(cont!=0){
                                 alert("Se ha introducido un dato nuevo.");
                                }
                            }
                        }
                        continuar=false;
                        continuar=confirm("¿Quieres seguir introduciendo una nueva planta o nueva puerta?");
                        if(continuar==true){
                        cancelar=false;
                        }

                    }while(continuar==true);
                }
            }
        }
    }
    
}while(cancelar==false);

function randomColor(){
    var x = parseInt(Math.random() * 256);
    var y = parseInt(Math.random() * 256);
    var z = parseInt(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

//Ejecucion
document.body.style.background = bgColor;
}

if(existe==true){
    document.write(`<h1>Comunitat de propietaris<br>${edificio1.imprimirTipoVia()} ${edificio1.imprimirNombreVia()},
${edificio1.imprimirNumeroEdificio()} C.P ${edificio1.imprimirCodigoPostal()}</h1>${edificio1.imprimirTodosPropietarios()}`);
    
//Fondo
randomColor(); 
}