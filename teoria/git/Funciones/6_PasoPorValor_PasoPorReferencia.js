/* -----------PASO POR VALOR Y PASO POR REFERENCIA ---------------------*/

// Ejemplo 1
var x=19;
function f(x) {
    x++;
}

f(x);
console.log(x); // Salida: 19

/* Interpretación del código:
    - Inicialmente se crea una variable llamada x que como se declara con la
        palabra var y está declarada fuera de toda la función, su ámbito es
        todo el código.
    - La función f se declara como una función que tiene un parámetro que 
        también se llama x. Pero esta x no es la x del punto anterior. Son 
        variables diferentes, aunque tengan el mismo nombre. De hecho, por
        culpa de esta coincidencia, la función no puede acceder a la variable x 
        declarada en la primera línea.
    - Tras la llave de cierre de la función se invoca a la función f pasando
        el valor de la x que se declaró fuera de la función. Es decir, se pasa 
        el número 19 a la función.
    - Ese valor se copia al parámetro x de la función.
    - Después se ejecuta el código de la función que modifica el valor del
        parámetro x ya que incrementa su valor. Valdrá 20. Pero la variable x
        original no se ha modificado.
    - Cuando termina la función, el parámetro x se elimina. Perderemos su valor
        que era 20.
    - Cuando console.log escribe el valor de x, la variable a la que se refiere
        es la global, la que se declaró en la primera línea que sigue valiendo 
        19.

MORALEJA: Cuando pasamos una variable a una función como parámetro, se recoge
    una copia de su valor. La variable original no se modifica. Por eso, lo 
    lógico es que los parámetros no se llame igual que las variables que se
    usan para pasar su valor.
*/

// Ejemplo 2. Cambiando el nombre del parámetro
var x=19;
function f(y) {
    y++;
}

f(x);
console.log (x); // Salida: 19

// Ejemplo 3. Modificamos la variable original dentro de la función
// No hay ambigüedad porque la función no declara ningún parámetro o variable
// interna con ese mismo nombre.
var x=19;
function f() {
    x++;
}

f();
console.log(x); // Salida: 20

// No es recomendable usar variables globales dentro de las funciones. La
// modularidad que aportan las funciones se pierde si hacemos uso de esa
// técnica, ya que la función no sería transportable a otro archivo. Las
// funciones deben crearse de la forma más independiente posible respecto al
// código que las rodea.

// Ejemplo 4
var array=[1,2,3,4,5];
function g(a){
    a[0]=9;
}
g(array);
console.log(array[0]); // Salida: 9

/* Interpretación del código:
    - En la primera línea se crea una variable global llamada array que es una
        referencia a un array que almacena los valores 1,2,3,4,5.
    - Se declara una función llamada g que tiene un parámetro llamado a. El
        cuerpo de la función sirve para modificar el primer elemento de a, ya
        que da por hecho que ese parámetro es una array, y le otorga el valor 9.
    - Se invoca la función g pasando el array original. El parámetro a recogerá
        una referencia a ese array. Esta vez no se recibe una copia, sino una
        referencia al array original. Los arrays no se copian cuando se asignan.
        Es decir, array y a son una referencia al mismo array.
    - Dentro de la función se modifica el primer elemento de a para que valga 9.
        Eso es lo mismo que modificar el primer elemento de la variable array.
    - La función termina, el parámetro a ya no estará disponible.
    - Se escribe el primer elemento de la variable array y comprobaremos que 
        dentro de la función se ha modificado realmente su valor.

MORALEJA: Los tipos básicos (booleanos, números y strings) se pasan por valor,
    se envía una copia de su valor a los parámetros de las funciones; los
    tipos complejos (arrays, conjuntos, mapas, etc.) y en definitiva, cualquier
    objeto, pasan una referencia al objeto original; si una función se modifica
    el parámetro relacionado, se modificará realmente el array original.

En definitiva, los datos simples se pasan por valor, los objetos se pasan por
refencia.
*/