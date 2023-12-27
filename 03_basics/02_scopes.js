var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// // console.log(b);   //ReferenceError: b is not defined
// console.log(c);



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //ReferenceError: website is not defined

     two()

}

// one()



if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
   // console.log(website); //ReferenceError: website is not defined
}

// console.log(username); //ReferenceError: website is not defined


// ++++++++++++++++++ interesting ++++++++++++++++++
/* hoisting is a behavior where variable and function declarations are moved to the top of their 
containing scope during the compilation phase, before the code is executed. 
This means that you can use variables and functions in your code before they are declared.

However, it's important to note that only the declarations are hoisted, not the initializations

With let and const, the behavior is similar, but they are block-scoped, meaning they are only 
accessible within the block (e.g., if statement, for loop, function) where they are declared.

*/

console.log(var1)  //undefined
var var1 = 10

// console.log(let1)   //ReferenceError: Cannot access 'let1' before initialization
// let let1 = 10

// console.log(const1)  //ReferenceError: Cannot access 'const1' before initialization
// const const1 = 10

if(true){
    console.log(let2)  
    let let2 = 10
}

console.log(addone(5))

function addone(num){
    return num + 1
}


// console.log(addTwo(5))  //ReferenceError: Cannot access 'addTwo' before initialization
// const addTwo = function(num){
//     return num + 2
// }


