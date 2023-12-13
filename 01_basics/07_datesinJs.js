// Dates

let myDate = new Date() //2023-12-12T09:01:08.855Z
// console.log(myDate);
// console.log(myDate.toString()); //Tue Dec 12 2023 14:21:16 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Tue Dec 12 2023
// console.log(myDate.toLocaleString()); //12/12/2023, 2:21:16 PM
// console.log(typeof myDate); //object

let myCreatedDate = new Date(2023, 0, 23)  // toLocaleString => 1/23/2023, 12:00:00 AM
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  // toLocaleString =>1/23/2023, 5:03:00 AM
//let myCreatedDate = new Date("2023-01-14")  // toLocaleString => 1/14/2023, 5:30:00 AM
//let myCreatedDate = new Date("01-14-2023") //toLocaleString => 1/14/2023, 12:00:00 AM
//console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(new Date());
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

