//Task 7
//Напишите функцию с двумья аргументами. Сравните последние цыфри числа, используя %

function func(a, b){
  let res = [a.toString().split('').pop(), b.toString().split('').pop()];
  return res;
}

console.log(func(123, 456));

//End of Task 7