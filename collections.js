/**
 * Map Collection (not uniques)
 */

let map = new Map();

map.set('1', 'str1');   // ключ-строка
map.set(1, 'num1');     // число
map.set(true, 'bool1'); // булевое значение

// в обычном объекте это было бы одно и то же,
// map сохраняет тип ключа
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); 

map
  .set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');

/**
 * Set colletion (unique)
 */
let set = new Set();

let vasya = {name: "Вася"};
let petya = {name: "Петя"};
let dasha = {name: "Даша"};

// посещения, некоторые пользователи заходят много раз
set.add(vasya);
set.add(petya);
set.add(dasha);
set.add(vasya);
set.add(petya);

// set сохраняет только уникальные значения
alert( set.size ); // 3

set.forEach( user => alert(user.name ) ); // Вася, Петя, Даша