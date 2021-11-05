function creaTabla (filas=10, columnas=4, color="black"){
   
    document.write(`<table style="border: 3px solid ${color}";>`);
        for (let i = 0; i < filas; i++) {
            document.write(`<tr style="border: 1px solid ${color}">`);
                for (let j = 0; j < columnas; j++ ) {
                    document.write(`<td style="border: 1px solid ${color}"></td>`);
            
                }

            document.write("</tr>");
        }

    document.write("</table>");
}
creaTabla();
creaTabla(20,10);
for (let i = 0; i < 10; i++) {
    creaTabla(5,4,"green");
}