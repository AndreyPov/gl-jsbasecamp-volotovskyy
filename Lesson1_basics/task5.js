//Task 5
//   Напишите функцию с двумья аргументами. Если сумма этих чисел от 11 до 19, то выведите в консоль результат.
// Если нет, то выведите “Result is not in range between 11 and 19”.

function func (a, b) {
  let sum = a + b;
  sum = (sum >= 11 && sum <= 19) ? console.log(sum) : console.log("Result is not in range between 11 and 19");
}

func(2, 2);
func(7, 7);
func(10, 10);
//End of Task 5