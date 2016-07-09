/*
	Напишите функцию, которая принимает 1 аргумент и возварщает его тип
*/
function getDataType (variable) {
	var type = typeof variable;
  return type;
	}

// console.log(getDataType('Hello typeof!'));
// console.log(getDataType(123));
// console.log(getDataType(true));
// console.log(getDataType(null));


/*
	Напишите функцию, которая принимает 2 аргумента,
	и возврвщает 1 если их значения и их типы равны,
	0 если равны только значения
	и -1 в другом случае
*/
function compareByType (a, b) {
  if (a === b) {
    return 1;
  } else if (a == b) {
    return 0;
  } else {
    return -1;
  }
}

// console.log(compareByType(2, 2));
// console.log(compareByType('2', 2));
// console.log(compareByType(-2, 2));

/*
	Напишите функцию, которая принимает 1 аргумент,
	и в случае если аргумент имеет числовой тип увеличивает его на 1
	и возврвщвет результат,
	в любом другом случае возврвщвет -1
*/
function increase (value) {
  return (typeof value == 'number') ? value += 1 : -1;
}

// console.log(increase(4));
// console.log(increase('Pizza'));

/*
	Напишите функцию, которая принимает 2 аргумента,
	массив в разделитель[опционально],
	и возвращает строку ввиде элементов массива c разделителями если разделитель задан
	или строку разделенную "-" если не задан
*/
//Doesn't pass Jasmine but works perfect in console etc.
function join (array, separator) {
  if (typeof separator == 'undefined') {
    return array.join('-');
  }
  return array.join(separator);
}

/*
	Напишите функцию, которая принимает 2 массива,
	и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
*/
function glue (arrA, arrB) {
  var newArr = arrA.concat(arrB);
  return newArr;
}

// console.log(glue([1,2,3], [4,5,6]));

/*
	Напишите функцию, которая принимает 1 массив,
	и возвращает другой массив отсортированный от большего к меньшему
*/
function order (arr) {
  function compareNumeric(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
  }
  return arr.sort(compareNumeric);
}

// console.log(order([1,2,3,4,5,12,22,34,64]));

/*NEED TO FIX
	Напишите функцию, которая принимает 1 массив,
	и возвращает другой без чисел которые меньше 0
*/
function removeNegative (arr) {
  var positiveArr = arr.filter(function (number) {
    return number > -1;
  });
  return positiveArr;
}
//console.log(removeNegative([-1, 5, 0, -2, 41]));


/*
	Напишите функцию, которая принимает 1 аргумент (строку),
	и возвращает массив из елементов строки разделенных по пробелу ' '
*/
function stringToArray (str) {
  return str.split(' ');
}

//console.log(stringToArray('Abra kada-bra bada ba'));


/* NEED TO FIX
	Напишите функцию, которая принимает 1 аргумент (строку),
	и возвращает часть этой строки до первой запятой
*/
function getStringPart(str) {
  return str.substring(0, str.indexOf(','));
}

// console.log(getStringPart("GlobalLogic is the coolest company, isn't it?"));

