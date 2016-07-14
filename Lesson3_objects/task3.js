// Класс калькулятор
//1.Опишите конструктор объектов (класс) Calculator с двумя методами:
// add - принимает число и прибавляет его к предыдущему, getCurrentSum - принимает индекс
// и возвращает результирующее число на шаге указынном в индексе (если индекса нет, возвращает текущую сумму)
//2.Создайте два экземпляра класса Calculator
//3.Добавьте в первый объект числа 3,8,11 и во второй 5,12,17.
//4.Выведите в консоль сумму:
//  - всех чисел всех объектов, убедитесь (56)
//  - сумму чисел всех объектов на втором шаге (28)
//  - для одного объекта сумму после третьего шага и общую результирующую сумму (должна совпадать)
"use strict";
function Calculator() {
  this.start = [];
  this.result = [];
  var i;
    for(i = 0; i < arguments.length; i++){
      this.start.push(arguments[i]);
    }

  this.add = function (num) {
    if (!isNaN(num)) {
      this.start.push(num);
      this.result = this.start.reduce(getSumOf);
      return this;
    } else {
      console.log('Hey, Bro! With this func you must to use numbers only!');
    }
  };

  this.getCurrentSum = function(step) {
    if (!this.start.length) {
      return 0;
    }
    if (step === 'undefined') {
      return this.start.reduce(getSumOf);
    }

    return this.start.slice(0, step).reduce(getSumOf);
  };

  function getSumOf(a, b) {
    return a + b;
  }
}

var obj1 = new Calculator(3, 8, 11);
var obj2 = new Calculator(5, 12, 17);

console.log('Сумма всех чисел всех объектов: ' + (obj1.getCurrentSum() + obj2.getCurrentSum()));
console.log('Сумма чисел всех объектов на втором шаге: ' + (obj1.getCurrentSum(2) + obj2.getCurrentSum(2)));
console.log('Сравнениваем сумму одного объекта (после третьего шага) и общую результирующую сумму: '
  + (obj1.getCurrentSum(3) === obj1.getCurrentSum()));