// 2. Напишите функцию, которая будет возвращать новую функцию, с помощью которой можно будет выводить
// в консоль текстовую информацию.
// Задача на 5+: сделать так, чтобы кастомный логгер не "ломал" коллстек.

function initLogger(prefix){
  let date = new Date().toISOString();
  let result = `${date}  ${prefix}: `;
  return function(data) {
    console.log(result + data);
  };
}

let logger = initLogger('Logger');

logger('some data');
// 2016-06-06T09:55:44.162Z My Logger: some data
// hint: use toISOString method to format Date object

//TODO: logger call stack breaker