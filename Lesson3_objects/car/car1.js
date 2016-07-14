// Покупка машины (часть 1)
//   1.Создайте класс Garage, который хранит список машин со следующим интерфейсом:
// addCar - принимает объект класса Car, и getCar - который принимает индекс машины и возвращает
// запрашиваемую машину, count - возвращает количество машин в гараже
//   2.Создайте класс Car, который инициализуруется значениями model, manufacturer и price.
//   3.Создайте класс Buyer, который иницализируется объектом garage и числовым значением budget,
// с методами: getBudget - возвращает текущее значение бюджета, buyCar - принимает объект класса Car,
// смотрит, хватит ли бюджета на машину, если не хватает, бросает ошибку, если хватает,
// списывает деньги с бюджета и добавляет машину в гараж.
//   4.Создайте функцию showRoom, которая принимает объект buyer, и дальше в цикле 10 раз создает объект car
// со случайным значением в price. Объект buyer пытается купить каждую созданную машину.
//   5.Создайте экземпляр класса Garage и Buyer. Вызовите функцию showRoom и передайте в нее buyer.
//   6.После выполнения функции выведите список всех машин, которые купил покупатель
"use strict";

function Car(model, manufacturer, price) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.price = price;
}

function Garage() {
  this.cars = {};
  this.counter = 0;
  this.addCar = function(Car) {
    this.cars[this.counter+''] = Car;
    this.counter++;
    //принимает объект класса Car
  };

  this.getCar = function(i) {
    return this.cars[i+''];
    //принимает индекс машины и возвращает запрашиваемую машину
  };

  this.count = function(){
    //возвращает количество машин в гараже
    var size = 0;
    for (var key in this.cars) {
      if (this.cars.hasOwnProperty(key)) size++;
    }
    return size;
  }
}

function Buyer(garage, budget) {
  this.garage = garage;
  this.budget = budget;
  this.getBudget = function(){
    return this.budget;
    //возвращает текущее значение бюджета
  };
  this.buyCar = function(Car) {
    if (+this.budget > +Car.price) {
      garage.addCar(Car);
      this.budget -= Car.price;
    } else {
      return 'Your budget: '+this.budget+'.Its not enough';
    }
    //принимает объект класса Car,
    // смотрит, хватит ли бюджета на машину, если не хватает, бросает ошибку, если хватает,
    // списывает деньги с бюджета и добавляет машину в гараж.
  }
}

var showRoom = function(buyer) {
  for (var i = 0; i < 10; i++) {
    window['car'+i] = new Car('model','manufacturer', Math.random()*100 | 1);
    buyer.buyCar(window['car'+i]);
  }
  return buyer.garage.cars;
  //принимает объект buyer, и дальше в цикле 10 раз создает объект car
  // со случайным значением в price. Объект buyer пытается купить каждую созданную машину.
};

//Проверка и вызовы
var elfGarage = new Garage();
var elf = new Buyer(elfGarage, 500);
console.log("Список машин, которые смог купить Эльф:");
console.log(showRoom(elf));
console.log("Остаток бюджета Эльфа, после покупки: " + elf.getBudget());

var orcGarage = new Garage();
var orc = new Buyer(orcGarage, 100);
console.log("Список машин, которые смог купить Орк:");
console.log(showRoom(orc));
console.log("Остаток Орочьего бюджета, после покупки: " + orc.getBudget());


