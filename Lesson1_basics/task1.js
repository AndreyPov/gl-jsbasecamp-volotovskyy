//Task 1
// Напишите фукцию с одним аргументом. Аргумент должен быть числом от 0 до 24.
// Если аргумент число от 8 до 21, выведите в консоль ‘Hello’. В другом случае выведите в консоль
// ‘It is not good time for that’. Если аргумент не число, выведите в консоль ‘It is not a number’.

//Since JS hasn't .range() method yet (_underscore and other libraries doesn't count) I've used ES6 syntax sugar
//to make this code more readable and fancy.
let val = [...Array(25).keys()]; //I need all num form 0 to 24 that's why I need length of arr 25.

console.log(val); // cl to have a look how things are going on here.


function func(val) {
  if (val >= 8 && val <= 21) {
    console.log('Hello');
  } else if (isNaN(val)) {
    console.log('It is not a number');
  } else {
    console.log('It is not good time for that');
  }
}

func(5);
func(10);
func(34);
func('hamster');
//End of Task 1