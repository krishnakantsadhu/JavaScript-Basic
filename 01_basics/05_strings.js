const name = "krishnakant"
const repoCount = 50

// console.log(name + repoCount + " Value"); //not recommended
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //this is recommended way

const gameName = new String('krish-hc-com')

// console.log(gameName[0]); //character at index
// console.log(gameName.__proto__);


// console.log(gameName.length);   // length is property, hence no ()
// console.log(gameName.toUpperCase()); //toUpperCase is method, hence ()
// console.log(gameName.charAt(2));  // index start with zero
// console.log(gameName.indexOf('t'));  // -1 mean not found

//const newString = name.substring(2, 4)  //sub string start index , end index
// const newString = name.substring(3)  //sub string start index, till end

const myStr = "0123456789"
const anotherString = myStr.slice(2, 7)
const anotherString1 = myStr.substring(2, 7)
console.log(anotherString);
console.log(anotherString1);

const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));