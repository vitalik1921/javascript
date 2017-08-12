/**
 * Object value from Variable
 */

let name = "Вася";
let isAdmin = true;

let user = {
  name,
  isAdmin
};
alert( JSON.stringify(user) );

/**
 * Calculated property name
 */

let propName = "firstName";

let user = {
  [propName]: "Вася"
};

alert( user.firstName );

/**
 * Object Assign
 */

let user = { name: "Вася" };
let visitor = { isAdmin: false, visits: true };
let admin = { isAdmin: true };

Object.assign(user, visitor, admin);

// user <- visitor <- admin
alert( JSON.stringify(user) );

/**
 * Object is
 */

alert( Object.is(+0, -0)); // false
alert( +0 === -0 );        // true

alert( Object.is(NaN, NaN) ); // true
alert( NaN === NaN );         // false

/**
 * Object methods
 */

let name = "Вася";
let user = {
  name,
  sayHi() {
    alert(this.name);
  }
};

/**
 * Object getters and setters
 */

let name = "Вася", surname="Петров";
let user = {
  name,
  surname,
  get fullName() {
    return `${name} ${surname}`;
  }
};

/**
 * Method with calculated name
 */

let methodName = "getFirstName";

let user = {
  // в квадратных скобках может быть любое выражение,
  // которое должно вернуть название метода
  [methodName]() {  // вместо [methodName]: function() {
    return "Вася";
  }
};

/**
 * Super - gets property of prototype
 */

let animal = {
  walk() {
    alert("I'm walking");
  }
};

let rabbit = {
  __proto__: animal,
  walk() {
    alert(super.walk); // walk() { … }
    super.walk(); // I'm walking
  }
};