/**
 * Default parameters
 */

function showMenu(title = "Без заголовка", width = 100, height = 200) {
  alert(title + ' ' + width + ' ' + height);
}

function showMenu(title = "Заголовок", width = 100, height = 200) {
  alert('title=' + title + ' width=' + width + ' height=' + height);
}

function sayHi(who = getCurrentUser().toUpperCase()) {
  alert('Привет, ' + who);
}

/**
 * Rest parameters
 */

function showName(firstName, lastName, ...rest) {
  alert(firstName + ' ' + lastName + ' - ' + rest);
}

/**
 * Array as arguments list
 */

let numbers = [2, 3, 15];
let max = Math.max(...numbers);

/**
 * Parameters deconstruction
 */

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

function showMenu({title, width, height}) {
  alert(title + ' ' + width + ' ' + height); // Меню 100 200
}

/**
 * Name property
 */

function f() {} // f.name == "f"

let g = function g() {}; // g.name == "g"

alert(f.name + ' ' + g.name) // f g

/**
 * Function is visible only in block
 */

if (true) {

  sayHi(); // работает

  function sayHi() {
    alert("Привет!");
  }

}
sayHi(); // error

/**
 * Arrow function =>
 * Doesnt have his own this
 * Doesnt have his arguments
 * Could not be binded
 */

 let inc = x => x+1;
 let inc = () => 'hello'.toUpperCase();
 let inc = (a, b) => a + b;
 let inc = (a, b) => {
     return a + b;
 };






