// array

const myArr = [0, 1, 2, 3, 4, 5]  //can be declare like this
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)  //alternative way to declare array
// console.log(myArr[1]);

// Array methods

myArr.push(6)
myArr.push(7)
// var v = myArr.pop()

// console.log(v);
// console.log(myArr);

// myArr.unshift(9)   // shift all element right and add 9 in first place
// console.log(myArr);
// var ele = myArr.shift() // remove first element and left shift all element
// console.log(myArr);
// console.log(ele);

// console.log(myArr.includes(6));  //return true
// console.log(myArr.indexOf(3));

const newArr = myArr.join()  // convert array to comma separated string

// console.log(newArr);

//===== slice, splice ==============

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  
//slice(i,j) array from index i (included) to index j (excluded). It will not change original array

console.log(myn1);
console.log("B ", myArr);

//splice - cut array from index i to  j (number of element to remove) and past in  new array. 
//It cut element from original array and past in new array
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
