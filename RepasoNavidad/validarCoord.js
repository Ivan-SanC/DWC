var coord="(1,12)";
var validar=new RegExp("^\\([0-9]{1,3},[0-9]{1,3}\\)$");

do{
    coord=prompt("Introduce cordenadas (Formato ejemplo: (999,999))");

    if(validar.test(coord)==false && coord!=null){
        alert("Formato incorrecto");
    }

}while(validar.test(coord)==false && coord!=null);


if(coord!=null){ 
document.write(`<strong>Coordenadas introducidas:</strong> ${coord}`);
}
