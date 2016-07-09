//Task 3
//   Напишите функцию, которая принимает один аргумент. Проверяет число ли это и выводит в консоль
// данной число в квадрате, если его можно поделить на 2 без остатка.
function func(arg){
  arg = (typeof arg == 'number' && arg % 2 === 0) ? console.log(Math.pow(arg, 2))
                                                  : console.log('Ooops! Try something else');
}

func(4);
func(21);
func('koala');
//End of Task 3