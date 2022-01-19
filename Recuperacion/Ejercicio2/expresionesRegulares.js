
//let telefono=new RegExp("^\\(\\+[1-9]{1,3}\\)[0-9]{9}$");
let hora;
let email=new RegExp('^[^áéíóú\\s\\(\\)<>@,;:"\\[\\]ç%&]{1,64}@[^áéíóú\\s\\(\\)<>@,;:"\\[\\]ç%&]{1,251}(\\.com|\\.net)$');
let web=new RegExp('^http:\\/\\/[w]{3}\\.[A-Za-z]*\\.com$');



// TEST PARA COMPROBAR LAS EXPRESIONES REGULARES
/*
let testTelefono1 = telefono.test('(+34)659888475'); // true
let testTelefono2 = telefono.test('(+234)659888475'); // true
let testTelefono3 = telefono.test('+34659888475'); // false
let testTelefono4 = telefono.test('659887410'); // false
let testTelefono5 = telefono.test('(35)659887410'); // false
let testTelefono6 = telefono.test('()659887410'); // false
let testTelefono7 = telefono.test('(+0)659887410'); // false

console.log(testTelefono1);
console.log(testTelefono2);
console.log(testTelefono3);
console.log(testTelefono4);
console.log(testTelefono5);
console.log(testTelefono6);
console.log(testTelefono7);
*/

/*
let testHora1 = hora.test('00:00'); // true
let testHora2 = hora.test('24:60'); // false
let testHora3 = hora.test('29:00'); // false
let testHora4 = hora.test('23:60'); // false
let testHora5 = hora.test('19:30'); // true

console.log(testHora1);
console.log(testHora2); 
console.log(testHora3); 
console.log(testHora4);
console.log(testHora5);
*/

/*
let testEmail1 = email.test('a@a'); // false
let testEmail2 = email.test('a@a.com'); // true
let testEmail3 = email.test('a@a.a.com'); // true
let testEmail4 = email.test('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@a.a.com'); // false
let testEmail5 = email.test('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@a.a.com'); // true
let testEmail6 = email.test('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@' +
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com'); // true
let testEmail7 = email.test('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@' +
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com'); // false
let testEmail8 = email.test('a@a.a.comz'); // false



console.log(testEmail1);
console.log(testEmail2);
console.log(testEmail3);
console.log(testEmail4);
console.log(testEmail5);
console.log(testEmail6);
console.log(testEmail7);
console.log(testEmail7);

*/

/*
let testWeb1 = web.test('http://www.fcbarcelona.com/web/index_idiomes.html'); // false
let testWeb2 = web.test('http://www.realmadrid.com/cs/Satellite/es/1193040472450/SubhomeEquipo/Baloncesto.htm'); // false
let testWeb3 = web.test('http://basketzaragoza.net'); // false
let testWeb4 = web.test('http://www.valenciabasket.com'); // true
let testWeb5 = web.test('http://baskonia.com/prehomes/prehomes.asp?id_prehome=69'); // false
let testWeb6 = web.test('http://baskonia.com/prehomes/prehomes.asp'); // false
let testWeb7 = web.test('http://basketzaragoza.net/'); // false

console.log(testWeb1);
console.log(testWeb2);
console.log(testWeb3);
console.log(testWeb4);
console.log(testWeb5);
console.log(testWeb6);
console.log(testWeb7);
*/