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

//variables que uso para introducir los datos en el objeto
let tipoVia;
let nombreVia;
let numEdf;
let cp;
let planta;
let puerta;
let propietario;

//Variables que uso para controlar ciertas condiciones
let plantaRepetida;
let puertaRepetida;
let existe=false;

//"cancelar" cancela la introduccion de datos
//"confirmar" lo uso para verificar si se quiere introducir otro propietario mas
//"continuar" se usa para preguntar si se quiere volver a introducir nuevo dato
let cancelar=false;
let confirmar;
let continuar;

//Expresiones regulares
let expCp= new RegExp('^[0-9]{5}$');
let expPuerta= new RegExp('-[0-9]');
let expPropietario= new RegExp('^[a-zA-ZÀ-ÿ\\u00f1\\u00d1](\\s*[a-zA-ZÀ-ÿ\\u00f1\\u00d1]){3,40}$');

//Primero hay un do-while general que en el momento que se cancela cualquier dato
//sale de la aplicacion y no guarda los datos, para que se guarde un dato debes llegar a introducir un propietario al menos.

do{
    //contador para introducir los datos la primera vez que se crea el objeto
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
            
                //Si no son 5 numeros te pedirá el codigo otra vez.
                do{

                cp=prompt("Introduce el código postal: ");
                if(cp==null){
                    cancelar=true;
                }   
                    //Avisa de que el cp no es correcto
                    if(!expCp.test(cp)&&cancelar==false){
                        alert(cp+" No es un codigo postal");
                    }

                }while(!expCp.test(cp)&&cancelar==false);
                
                if(cancelar==false){
                    
                    //se crea el edificio
                    var edificio1=new Edificio(tipoVia,nombreVia,numEdf,cp);
                    existe=true;
                   
                    //do-while para volver a introducir datos nuevo en el edificio
                    do{
                        

                        //repetir hasta cancelar o que se escriba algo
                        do{
                            planta=prompt("Introduce la planta: ");
                   
                            if(planta==null){
                            cancelar=true;
                            }
                        }while(planta==""&&cancelar==false);

                        if(cancelar==false){
                            //agrega planta
                            edificio1.agregarPlanta(planta);
                        
                            do{
                                //reinicia el valor
                                puertaRepetida=false;
                                plantaRepetida=false;

                                puerta=prompt("Introduce la puerta: ");
                                if(puerta==null){
                                cancelar=true;
                                }
                                
                                //Este if se ejecutara cuando continuar introduciendo datos nuevos sea true
                                //Dentro del if miramos que los nuevos datos no coinciden con los existentes
                                //Si la planta existe no pasa nada, pero si es una puerta repetida avisa.
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
                                
                            //Controla que la puetar no tenga un "-" seguido de un numero , si no se a escrito nada o si se repite la puerta
                            }while((expPuerta.test(puerta)&&cancelar==false)||(puerta==""&&cancelar==false)||(cancelar==false&&puertaRepetida==true));
                            if(cancelar==false){
                                //agrega puerta
                                edificio1.agregarPuerta(planta,puerta);
                                 
                                do{ 
                                    do{
                                        propietario=prompt("Introduce el propietario: ");
                                        if(propietario==null){
                                        cancelar=true;
                                        }

                                     //Verifica que se introduce un nombre y puede o no tener apellido y minimo 3 letras max 40.   
                                    }while(!expPropietario.test(propietario)&&cancelar==false);
                                    
                                    //Si queremos introducir un nuevo propietario a la misma puerta
                                    //se ejecutara este if y lo añadira
                                    if(confirmar==true&&cancelar==false){
                                    edificio1.agregarPropietario(propietario,planta,puerta);
                                    }

                                        //si se introducido un propietario correcto se entrara aqui
                                        if(cancelar==false){
                                        
                                        //si es la primera vez que se introducen los datos entra aqui y crea el objeto
                                        //cuando se crea el edifico el contador sera 1 y no vuelve a entrar aqui
                                        //y por lo tanto existe ya el edificio
                                        if(cont==0){
                                            //var edificio1=new Edificio(tipoVia,nombreVia,numEdf,cp);
                                            edificio1.agregarPlanta(planta);
                                            edificio1.agregarPuerta(planta,puerta);
                                            edificio1.agregarPropietario(propietario,planta,puerta);
                                            cont++;
                                            
                                          
                                            //este else se ejecuta cuando ya se ha creado una mapeado de propietarios por primera vez
                                        }else if(cont>0&&confirmar==false){
                                            
                                            //si la planta no es repetida se añadira
                                            if(plantaRepetida==false){
                                                edificio1.agregarPlanta(planta);
                                            }

                                            //añade la puerta y el propietario
                                            edificio1.agregarPuerta(planta,puerta);
                                            edificio1.agregarPropietario(propietario,planta,puerta);

                                        }

                                            //te pregunta si quieres añadir un dueño mas a esa misma puerta
                                            confirmar=confirm("¿Quieres introducir otro propietario?");
                                        if (confirmar==false){
                                            cancelar=true;
                                        }
                                    }
                                
                                
                                }while(cancelar==false);
                                
                                //siempre que se haya introducido planta,puerta y dueño nuevo avisara
                                if(cont!=0){
                                 alert("Se ha introducido un dato nuevo.");
                                }
                            }
                        }
                        //reinicio el valor de continuar
                        continuar=false;
                        //si continuar es true se vuelve a introducir planta puerta y dueño de nuevo 
                        //si es false se acaba el bucle por que cancelar ya es true en la parte de propietarios
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

//funcion para modificar el color cada vez que se muestran los datos 
function randomColor(){
    var x = parseInt(Math.random() * 256);
    var y = parseInt(Math.random() * 256);
    var z = parseInt(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

//Ejecucion
document.body.style.background = bgColor;
}

//Si edificio1 se llega a crear se ejecutara
//imprime datos y cambia fondo a color random
if(existe==true){

    document.write(`<h1>Comunidad de propietarios<br>${edificio1.imprimirTipoVia()} ${edificio1.imprimirNombreVia()},
${edificio1.imprimirNumeroEdificio()} C.P ${edificio1.imprimirCodigoPostal()}</h1>${edificio1.imprimirTodosPropietarios()}`);
    
randomColor(); 
}else{
    alert("Se ha cancelado la introducción de datos.")
}