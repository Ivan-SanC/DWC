/* ACCESO A PROPIEDADES Y  MÉTODOS   */
// Si tenemos un determinado objeto, el acceso a sus propiedades y
// métodos se consigue gracias al operador punto (.)

// SINTAXIS para ACCEDER A UNA PROPIEDAD de un objeto
    objeto.propiedad
    objeto['propiedad']

/* Cambiar el valor de una propiedad
    Objeto: coche
    Atributo: color
    Valor del atributo: Rojo
*/
coche.color = 'Rojo';
coche['color'] = 'Rojo';


// SINTAXIS para UTILIZAR MÉTODOS
    objeto.método([parámetros])
    objeto['método']([parámetros])

/* Utilizar métodos:
    Objeto: coche
    Método: acelerar
    Valor del parámetro del método: 25
*/
coche.acelerar(25);
coche['acelerar'](25);