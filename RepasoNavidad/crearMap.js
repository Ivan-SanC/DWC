const map= new Map();
map.set("DIW","diseño interfaces web").set("EIE","empresa e iniciativa emprendedora").set("DAW","desarrollo aplicaciones web");
map.set("DWES","desarrollo web en entorno servidor");
map.set("DWEC","desarrollo web en entorno cliente");

console.log("Tamaño del mapa: "+map.size);

console.log("Elementos contenidos en el mapa...")
for(let elemento of map){
    console.log(elemento);
}

for(let clave of map.keys()){
    console.log("Clave: "+clave);
}

for(let valor of map.values()){
    console.log("Valor: "+valor);
}

if(map.has("DAW")){
    console.log("El modulo esta en el mapa");
}else{
    console.log("El modulo no esta en el mapa");
}

if(map.has("DAW")){
    map.delete("DAW");
    console.log("Eliminacion completada");
}else{
    console.log("No se pudo eliminar el dato");
}

//Segunda parte


const matricula= new Map([
    ["DWEC",["300","10"]],
    ["DWES",["280","15"]],
    ["DIW",["100","20"]],
    ["DAW",["80","17"]],
    ["EIE",["40","5"]]
]);

for(let [clave, valor]of matricula){
    console.log("------");
    console.log(clave);
    for (let elementos of valor){
    console.log(elementos);
    }
}