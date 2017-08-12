/**
 * Array
 */

let arr = [1, 2, 3]; // массив — пример итерируемого объекта

for (let value of arr) {
  alert(value); // 1, затем 2, затем 3
}

/**
 * String
 */

for (let char of "Привет") {
  alert(char); // Выведет по одной букве: П, р, и, в, е, т
}

/**
 * Make iterator
 */

let range = {
  from: 1,
  to: 5
}

// сделаем объект range итерируемым
range[Symbol.iterator] = function() {

  let current = this.from;
  let last = this.to;

  // метод должен вернуть объект с методом next()
  return {
    next() {
      if (current <= last) {
        return {
          done: false,
          value: current++
        };
      } else {
        return {
          done: true
        };
      }
    }

  }
};

for (let num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}

