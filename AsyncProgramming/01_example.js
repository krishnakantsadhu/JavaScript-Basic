//===================== Understand callback  [callback means passing function as a parameter in other function] ========

function add(a, b) {
  console.log(a + b);
}

let subtract = function (a, b) {
  console.log(a - b);
};

function calculation(a, b, callback) {
  //here we are passing reference of function
  callback(a, b);
}

// calculation(2, 3, add);
// calculation(5, 3, subtract);
/* here we pass function as reference. Pls note this is not allow subtract(), it will execute function */

/* we can write anonymous function also like below */
// calculation(5, 3, function multiply(a, b) {
//   console.log(a * b);
// });

/* it is same as above (here we have used anonyms using arrow function) */
// calculation(5, 3, (a, b) => {
//   console.log(a * b);
// });

//============================ callback hell (callback nesting) ============================
//this function wait for 2 sec then print output
function getData(id) {
  setTimeout(() => {
    console.log("DataId:", id);
  }, 2000);
}

//getData(1);
//getData(2);
//getData(3);

/* here 1,2,3 are printed to same time. But our requirement is first wait for 2 sec then print '1',
then wait for another 2 sec and then print '2' and then wait for 2 sec and then print '3' */

function getData1(id, nextCall) {
  setTimeout(() => {
    console.log("DataId:", id);
    if (nextCall) nextCall();
  }, 2000);
}

/* This is call callBack hell */
// getData1(1, () => {
//   getData1(2, () => {
//     getData1(3, () => {});
//   });
// });

//====================== understand promise =======================

let promise1 = new Promise((resolve, reject) => {
  console.log("in side promise1");
});

// console.log(promise1);  //pending state since promise1 is neither resolve nor reject

let promise2 = new Promise((resolve, reject) => {
  console.log("in side promise2");
  resolve(123);
});

// console.log(promise2);

// let promise3 = new Promise((resolve, reject) => {
//   console.log("in side promise3");
//   reject("Error occurred");
// });

// promise3.catch((err) => { console.log(err)})

// console.log(promise3);

//get data after 2 sec
function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`DataId=${id}`);
    }, 2000);
  });
}

// let promise4 = getData(1);
// promise4.then((id) => {
//    console.log(id);
// });

// let promise5 = getData(2);
// promise5.then((id) => {
//    console.log(id);
// });
/* Here data DataId=1 and DataId=2 are printed together since both wait for 2 second parallel and the both get printed. 

 if we want to print  DataId=1 first and after waiting for 2 sec the we want  DataId=2 then we can used promise chain */

//promise chain example
// getData(1)
//   .then((id) => {
//     console.log(id);
//     return getData(2);
//   })
//   .then((id) => {
//     console.log(id);
//     return getData(3);
//   }).then((id)=> {
//     console.log(id);
//   })

  //==================== promise chaining example 2======================

  // promise2.then((ele)=>{
  //   console.log(ele)
  //   return promise3
  // }).catch( (err)=>{
  //   console.log(err)
  //   return promise4
  // }).then((ele)=>{
  //   console.log(ele)
  //   return promise5
  // }).then((ele) => {
  //   console.log(ele)
  // })

  //============= Understand async await ====================
  /* 
  async function alway return promise
  await pauses the execution of its  surrounding async function until promise is settled. 
  await can use only within async function
  */

function api_call(){
  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      console.log("API called");
      resolve()
    },2000)
  })
}

async function test(){
  console.log(">>> 1")
  await api_call();   // it will wait for promise to settle.
  console.log(">>> 2")
  await api_call();
  console.log(">>> 3")
  await api_call()   
  console.log(">>> 4")
  
}

//test();

// ================ IIFE (immediate invoke function expression) =============
/* (anonymous  function or arrow function )() */

(async ()=>{
  console.log(">>> A")
  await api_call();
  console.log(">>> B")
  await api_call();
  console.log(">>> C")
  await api_call()
  console.log(">>> D")
})()





 



