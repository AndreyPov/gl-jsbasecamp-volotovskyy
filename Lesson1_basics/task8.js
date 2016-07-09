//Task 8
//выведите массив используя разные типы цыклов.

let arr = [-2, 0, 4, 'boom!', 25.5, {kampot: 'cold'}, true, 200];
let i = 0;
//while
console.log('console.log arr using \'while\' method');
while (i < arr.length) {
  console.log( arr[i] );
  i++;
}

//do... while
console.log('console.log arr using \'do... while\'  method');
do {
  console.log( arr[i] );
  i++;
} while (i < arr.length);

//for
console.log('console.log arr using \'for\' method');
for (i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}

//End of Task 8