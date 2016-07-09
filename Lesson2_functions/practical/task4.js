// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//
//   Example string : 'Hello, GlobalLogic!'
// Expected Output : 'GlobalLogic'

function maxLengthWord(input) {
  return input.split(" ").map(function(word) {
    return word.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/gi, '');
  }).reduce(function(a, b) {
    return a.length > b.length ? a : b;
  });
}

console.log(maxLengthWord('Hello, GlobalLogic!'));