// 1. Write a function that can print entity details based on next model:
// {
//   name: String,
//   type: String,
//   age: Number
// }
// Expected output: "%NAME%(%TYPE%) - %AGE%."
// 2. Rewrite that function to use this instead of argument
// (use apply, call and bind to print the details of different entities).

//Using 'apply' with objA
let objA = {
  name: 'Angela Ziegler',
  type: 'Support Hero',
  age: 37
};
//Using 'bind' with objB
let objB = {
  name: 'Reinhardt Wilhelm',
  type: 'Tank Hero',
  age:  61
};
//Using 'call' with objC
let objC = {
  name: 'Fareeha Amari',
  type: 'Offense Hero',
  age:  32
};
//General function for all methods
function func(){
  return `${this.name}(${this.type}) - ${this.age}`;
}
//Results
let resultA = func.apply(objA, ['name', 'type', 'age']);
console.log(resultA);

let resultB = func.bind(objB);
console.log(resultB());

let resultC = func.call(objC, 'name', 'type', 'age');
console.log(resultC);