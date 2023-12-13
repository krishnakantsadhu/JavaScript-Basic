let score = "22"

//console.log(typeof score);  //string
//console.log(typeof(score));  //this is also allowed


score = "12a"
let valueInNumber = Number(score)  // not give parse error, it will return NaN
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //NaN is it is not converted in number


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "krishnakant"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false ; null => false ; undefine => false 
// "krishnakant" => true

let someNumber = 22

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //2 to the power 3 = 8
// console.log(2/3); //0.6666666666666666
// console.log(3%2); //1

let str1 = "hello"
let str2 = " krishnakant"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);  //1
// console.log(+"");  //0

// console.log(Number(true)); //1
// console.log(String(true)); //true

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// console.log(++gameCounter); //101
// console.log(gameCounter++); //101
// console.log(gameCounter); //102

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion