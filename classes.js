/**
 * Class literal
 */

class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

let user = new User("Вася");
user.sayHi();

/**
 * Alternative
 */

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function() {
  alert(this.name);
};