// async function test(name){
//     return "hello "+ name
// }


// let var1 = test("krishnakant");
// var1.then((a)=>{
//     console.log(a);
// });

// const pr = new Promise( (resolve, reject)=>{
//     let b = "hello "
//     resolve(b);
// })
// pr.then((a)=>{
//     console.log(a);
// });

let a = function callback(city) {
    console.log(city);
}

let cities = ['Tokyo', 'London', 'Boston', 'Berlin', 'Chicago', 'New York'];

cities.forEach(a);





console.log('end')