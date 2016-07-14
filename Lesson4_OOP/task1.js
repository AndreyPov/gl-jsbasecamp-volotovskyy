// ДЗ по ООП
//   Implement the following:
//
// 1.Define a Shape constructor. Objects created with Shape should have a `type` property and a `getType` method.
// 2.Define a Triangle constructor. Objects created with Triangle should inherit from Shape and
// have three own properties: a, b and c representing the sides of a triangle.
// 3.Add a new method to the prototype called `getPerimeter`.
//
//   Test your implementation with this code:
// var t = new Triangle(1, 2, 3);
// t.constructor;                 // Triangle(a, b, c)
// t instanceof Shape                // true
// t.getPerimeter();              // 6
// t.getType();                   // "triangle"

'use strict';

class Shape {
  constructor(type){
    this.type = type;
  }
  getType(){
    return this.type.valueOf();
  }
}

class Triangle extends Shape {
  constructor(type, a, b, c) {
    super(type = 'triangle');
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
};

let t = new Triangle(null, 1, 2, 3);

console.log(t.constructor);      // Triangle(a, b, c)
console.log(t instanceof Shape); // true
console.log(t.getPerimeter());   // 6
console.log(t.getType());        // 'Triangle'
