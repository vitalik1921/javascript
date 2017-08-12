/**
 * String templates
 */

let apples = 2;
let oranges = 3;

alert(`${apples} + ${oranges} = ${apples + oranges}`); // 2 + 3 = 5

/**
 * Templated function
 */

function f(strings, ...values) {
  alert(JSON.stringify(strings));     // ["Sum of "," + "," =\n ","!"]
  alert(JSON.stringify(strings.raw)); // ["Sum of "," + "," =\\n ","!"]
  alert(JSON.stringify(values));      // [3,5,8]
}

let apples = 3;
let oranges = 5;

//          |  s[0] | v[0] |s[1]| v[1]  |s[2]  |      v[2]      |s[3]
let str = f`Sum of ${apples} + ${oranges} =\n ${apples + oranges}!`;

