//Task 2
// Напишите функцию, которая принимает массив и буленовое значение в качестве аргументов.
// Если буленовое значение true, выведите в консоль найбольшее число, если false найменшее.

let arr = [-10, 0, 4, 27.5, 100];

function func(arr, bool){
  let max = Math.max(...arr),
      min = Math.min(...arr);
  
  bool ? console.log(Math.max(null, max)) : console.log(Math.min(null, min));
}


func(arr, false);
func(arr, true);

//End of Task 2