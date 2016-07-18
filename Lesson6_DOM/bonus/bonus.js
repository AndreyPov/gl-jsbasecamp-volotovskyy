// You need to find all values of attribute named "base64" in bizzare.html.
// After that make one long string and decode it. Mind the name of attribute. Follow instructions.

var line = document.querySelectorAll('[base64]');

var sausage = '';
var i;
for (i = 0; i < line.length; i++) {
  var atr;
  atr = line[i].getAttribute('base64').valueOf();
  sausage += atr;
}

console.log(sausage);

var decodedData = window.atob(sausage);

console.log(decodedData);

var findComments = function(el) {
  var arr = [];
  for(var i = 0; i < el.childNodes.length; i++) {
    var node = el.childNodes[i];
    if(node.nodeType === 8) {
      arr.push(node);
    } else {
      arr.push.apply(arr, findComments(node));
    }
  }
  return arr;
};

var commentNodes = findComments(document);

var n = 0;
var arr = [];
for (n; n < commentNodes.length; n++ ) {
  console.log(commentNodes[n].nodeValue);
  arr.push(commentNodes[n].nodeValue);
}

var transform = arr.join('');

var F = new Function (transform);

F();