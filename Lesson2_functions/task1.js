function extractCharacters(str){

  let arr = str.split('');
  let newStrObj = {};

  let i;
  for (i = 0; i < arr.length; i++) {
    let sym = arr[i].toLowerCase();
    newStrObj[sym] = true;
  }

  return Object.keys(newStrObj);

}

console.log(extractCharacters('abcd'));
//['a', 'b', 'c', 'd']

console.log(extractCharacters('aaaabc'));
//['a', 'b', 'c']
console.log(extractCharacters('Hello, world'));
//[ 'h', 'e', 'l', 'o', ',', ' ', 'w', 'r', 'd' ];

//bonus(case sensetive)
console.log(extractCharacters('Mman Bob'));
//['m', 'a', 'n', ' ', 'b', 'o']

//TODO: add numeric value check and conversion