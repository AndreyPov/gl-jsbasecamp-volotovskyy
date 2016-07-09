//Task 11
//написать функцию являются ли числа вампирами

// Число-вампир — в математике, составное натуральное число с четным количеством цифр,
//   которое может быть разложено в произведение двух некоторых целых (также называемых «клыками»),
// удовлетворяющих специальным правилам. Во-первых, каждое из них должно состоять из количества цифр,
//   вдвое меньшего, чем у исходного числа. Во-вторых, если в одном из них последняя цифра ноль, то другое
// оканчиваться нулем не может. В-третьих, исходное число должно в любом порядке содержать все цифры, входящие в «клыки»
// (т. е. для любой цифры числа вхождений в исходное число и в клыки должны быть равными)

// num lenght is even
// separate for 2 num. 'fangs'


//Okay, I've tried a lot... To be honest my code still in progress. 
//The bigger part of this version has been done by 'google searching' driven development ;)

function isVampire(vamp) {
  function getlength(number) {
    return number.toString().length;
  }
}

function vampire(input) {
  function permutations(arr)  {
    if (arr.length == 0) return [[]];
    for (var i = 0, perms = []; i < arr.length; i++) {
      var copy = arr.slice(), head = copy.splice(i, 1), tail = permutations(copy);
      for (var j = 0; j < tail.length; j++) perms.push(head.concat(tail[j]));
    }
    return perms;
  }
  var _in = input.split(' '), n = +_in[0], m = +_in[1], digits = n / m;
  for (var v = Math.pow(10, n - 1); v < Math.pow(10, n); v++) {  // possible vampire numbers
    var perms = permutations(('' + v).split(''));
    for (var p = 0; p < perms.length; p++) {  // permutations
      var perm = perms[p], product = 1, fangs = [];
      for (var f = 0; f < m; f++) {  // fangs
        for (var fang = 0, d = 0; d < digits; d++) fang += Math.pow(10, digits - d - 1) * +perm[2 * f + d];
        product *= fang;
        fangs.push(fang);
      }
      if (v === product) {
        console.log(v + '=' + fangs.join('*'));
        break;
      }
    }
  }
}

vampire('4 2');

//End of Task 11