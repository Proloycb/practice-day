// 1. variable declare 

// var myName = "Proloy";
// var myAge = 22;
// var myBool = true;

// // 2.let and const 

// let number = 21;
// const name = "Durjoy";

// number = 22;

// // 3.add, defference, multifly, division, modulus

// var num1 = 21;
// var num2 = 22;

// var sum = num1 + num2;
// // console.log (sum);
// var difference = num2 - num1;
// // console.log (difference);
// var multifly = num1 * num2;
// // console.log (multifly);
// var division = num2 / num1;
// // console.log (division);
// var modulus = num2 % num1;
// // console.log (modulus);

// // 4. <, >, == etc

// var number1 = 23;
// var number2 = 25;

// var small = number1 < number2;
// console.log (small);
// var large = number1 > number2;
// console.log (large);
// var equal = number1 == number2;
// console.log (equal);
// var notEqual = number1 != number2;
// console.log (notEqual);
// var smallEqual = number1 <= number2;
// console.log (smallEqual);
// var largeEqual = number1 >= number2;
// console.log (largeEqual);

// // 5.&& and || 6.

// var myNumber = 29;

// if (myNumber % 2 == 0 && myNumber % 4 == 0) {
//     console.log('foobar');
// }
// else if (myNumber % 3 == 0 || myNumber % 4 == 0) {
//     console.log ('foo');
// }
// else {
//     console.log ('bar');
// }

// 7.while loop odd 

// let i = 7;

while (i <= 19) {

    if(i % 2 != 0) {
        // console.log(i);
    }
    i++;
    
}

// 8. array declare 

var array = ['proloy', 'durjoy', 'mithun', 'bishwjit', 'protik', 'rupan'];

var length = array.length;
var index = array[4];
array[4] = 'gopal';
array.push('rupa', 'bonna');
array.pop();
// console.log (array);

// 9.for loop

for (var i = 0; i <= 6; i++) {
    var getItem = array[i];
    // console.log(getItem);
}

// 10. 80 array 

var number = [23, 56, 45, 78, 80, 85, 90, 22];

for(var i = 0; i <= number.length; i++){
    var arrayItems = number[i];
    if(arrayItems < 80) {
        continue;
    }
    // console.log (arrayItems);
}

// 11. three number multifly 

var num3 = 2;
var num4 = 3;
var num5 = 4;
var result = num3 * num4 * num5;
// console.log (result);

// 12. object declare 

var myProject = {
    price: 2000,
    name: 'samsung',
    color: 'white'

}

myProject.price = 2200;
console.log (myProject);
