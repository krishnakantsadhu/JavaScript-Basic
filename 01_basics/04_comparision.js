// console.log(2 > 1); //true
// console.log(2 >= 1); //true
// console.log(2 < 1); //false
// console.log(2 == 1); //false
// console.log(2 != 1); //true


// console.log("2" > 1);  //true; in comparison operation "2" is converted into number and then compared 
// console.log("02" > 1); //true; in comparison operation "2" is converted into number and then compared

//console.log(Number("000200")); //200

// console.log(Number(null)) // 0
// console.log(null > 0); //false; in comparison operation null is converted in number and then compare
// console.log(null == 0);  //false; in equality operation null is not converted in number (in case of null and undefine)
// console.log(null >= 0); //true; in comparison operation null is converted in number and then compare

// console.log(Number(undefined)) // NaN
// console.log(undefined == 0);//false; in comparison operation null is converted in number and then compare
// console.log(undefined > 0);  //false; in equality operation null is not converted in number (in case of null and undefine)
// console.log(undefined < 0);//false; in comparison operation null is converted in number and then compare

// console.log("2" === 2); //false; compare both number and type
// console.log("2" == 2);  //true; compare number
// console.log(true == 1)  //true; compare number 
// console.log(true === 1)  //false; compare both number and type
// console.log(undefined == 0) //false; in equality operation null is not converted in number (in case of null and undefine)
// console.log(undefined == 1) //false; in equality operation null is not converted in number (in case of null and undefine)
// console.log(null == 0) //false; in equality operation null is not converted in number (in case of null and undefine)
// console.log(null == 1) //false ; in equality operation null is not converted in number (in case of null and undefine)

// let a = Number("12a");
// console.log(a == NaN); //false
// if(a){
//     console.log("OK")
// }else{
//     console.log("ELSE") //ELSE
// }

// let b;
// console.log(b == undefined); //true
// if(b){
//     console.log("OK")
// }else{
//     console.log("ELSE")  //ELSE
// }

// let c = null;
// console.log(c == null); //true
// if(b){
//     console.log("OK")
// }else{
//     console.log("ELSE") //ELSE
// }