function createTable (filas=10, columnas=4, color="black"){
   
    document.write(`<table style="border: 3px solid ${color}">`);
        for (let i = 0; i < filas; i++) {
            document.write(`<tr style="border: 1px solid ${color}">`);
                for (let j = 0; j < columnas; j++ ) {
                    document.write(`<th style="border: 1px solid ${color}"></th>`);
            
                }

            document.write("</tr>");
        }

    document.write("</table>");
}
createTable();
createTable(20,10);
for (let i = 0; i < 10; i++) {
    createTable(5,4,"green");
}