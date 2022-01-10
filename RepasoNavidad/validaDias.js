var comprobar = new RegExp("^(([Ll]unes|[Mm]artes|[Mm]i[eé]rcoles|[Jj]ueves|[Ss][aá]bado|[Dd]omingo)|[0-6])$", "i");

while (true) {
    var dia = prompt('Introduce el día de la semana');
    if (comprobar.test(dia)) {
        alert('Día correcto');
    } else {
        alert('No coincide')
    }
}