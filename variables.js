'use strict';

/**
 * Only in block {}
 * Only after defined
 * In cycle each let is independent variable
 */

let a = 10; 

/**
 * Innmutable variable
*/

const b = 20;

/**
 * Array deconstructing
 */

let [firstName, lastName] = ["Илья", "Кантор"];
let [, , title] = "Юлий Цезарь Император Рима".split(" ");
let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");
// default value
let [firstName="Гость", lastName="Анонимный"] = [];

/**
 * Object deconstructing
 */

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

let {title, width, height} = options;

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

let {width: w, height: h, title} = options;

let options = {
  title: "Меню"
};

let {width:w=100, height:h=200, title} = options;

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Пончик", "Пирожное"]
}

let { title="Меню", size: {width, height}, items: [item1, item2] } = options;




