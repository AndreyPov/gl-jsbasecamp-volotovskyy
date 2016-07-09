//Task 9
//Проверить является ли строка полиндромом

function pal(str) {
  if (typeof str == 'number') {
    console.log('Bro! Please enter the string');
  } else if (typeof str == 'string') {
    str = str.toLowerCase().replace(/[^a-z]+/g,"");
    str === str.split("").reverse().join("");
    console.log(str + ' is Palindrome');
  } else {
    console.log('Bro! Enter string');
  }
}

pal("eye"); //true
pal("Race car"); //true
pal("Madam, I'm Adam"); //true
pal(123321);
//End of Task 9