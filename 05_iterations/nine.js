const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//fiter all value greater than 5
const filterNum = myNums.filter((value) => {
  if (value > 5) return value;
});

console.log(filterNum);

//double all  number of array
// const mapNum = myNums.map((val)=>{
//     return val*2
// })

// console.log(mapNum)

const mapNum1 = myNums.map((val, ind, myNums) => {
  console.log(`value=${val} Index=${ind}`);
  console.log(myNums);
  return val * 2;
});

console.log(mapNum1);

//Adding all number in array
const myTotal = myNums.reduce(function (acc, currval) {
  //console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval;
}, 0);

//const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

///console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

//console.log(priceToPay);

const students = [
  { name: "Quincy", class: 4, marks: 96 },
  { name: "Jason", class: 5, marks: 84 },
  { name: "Alexis", class: 4, marks: 100 },
  { name: "Peter", class: 6, marks: 75 },
  { name: "Sam", class: 5, marks: 65 },
  { name: "Katie", class: 7, marks: 90 },
];

//student name whose grade > 80
const studentName = students.filter((ele) => {
  if (ele.marks > 80) return ele;
});

// console.log(studentName);

for (const itr of studentName) {
  console.log(itr.name);
}

//total of class 4th marks
const totalOfClass4 = students
  .filter((ele) => ele.class === 4)
  .reduce((sum, curEle) => sum + curEle.marks, 0);

console.log(totalOfClass4);
