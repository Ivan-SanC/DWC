/* ---------------------NOTACIÓN JSON-----------------------*/
// Es el acrónimo de JavaScript Object Notation
// Es la idea de aprovechar la forma que posee JS de crear objetos
// estáticos para crear un formato documental que sea más cómodo y
// eficiente para los programadores que los lenguajes de marcado
// como XML.

// Inicialmente se creo para ser usado desde JS, actualmente se 
// considera un formato documental independiente de cualquier 
// lenguaje.
// La información almacenada en formato JSON se puede manipular
// desde casi cualquier lenguaje de programación actual.

// El lenguaje JSON es muy parecido a la forma de crear objetos 
// de JS, se basa en indicar propiedades y valores separados por
// dos puntos. Los valores se indican igual que en JS (textos
// entrecomillados, los números tal cual y usando el punto como
// decimal, etc.). Se permite el uso de arrays, anidar objetos, etc.

/* Hay diferencias entre JSON y JS:
    - JSON solo admite definir propiedades, no se pueden indicar
        métodos en el formato JSON.
    - En JSON el nombre de las propiedades tienen que ir entre 
        comillas dobles (no se admiten el resto de comillas).
*/


/* EJEMPLO DE JSON
    {
        'titulo' : 'Manual de UFOlogía',
        'n-serie': '187C2',
        'autores' : ['Pedro Martínez','Ana León'],
        'editorial' : {
            'nombre' : 'Inexistente S.A',
            'pais' : 'España',
        }
        'editorial' : 2,
        'ensayo' : true
    }
*/

// Manipular datos en JSON es muy importante en la creación actual
// de aplicaciones web. 
// JS aporta un objeto global llamado JSON que permite manipular 
// los datos en este formato.

/* El objeto JSON posee dos métodos:
    - stringify. Sirve para convertir un objeto JS en un string que
        contiene el formato JSON equivalente.
    - parse. Recibe un texto en formato JSON y evalúa su corrección.
        Si es correcto, retorna el objeto equivalente y si no, 
        devuelve una excepción de tipo SyntaxError.
*/

// EJEMPLO STRINGIFY
const musico1 = {
    nombre: 'Bob',
    apellido: 'Dylan',
    fecha_nacimiento: {
        dia: 24,
        mes: 5,
        año: 1941
    },
    discos: ['Highway 61 Revisited', 'Blonde on Blonde', 'Self Portrait']
}

console.log(JSON.stringify(musico1));

/* Salida
{"nombre":"Bob","apellido":"Dylan","fecha_nacimiento":{"dia":24,
"mes":5,"año":1941},"discos":["Highway 61 Revisited","Blonde on 
Blonde","Self Portrait"]}
*/

// El método parse haría lo contrario, a partir del texto crea el
// objeto.