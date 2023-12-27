// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name, lname, age) => {
    console.log(`DB CONNECTED TWO ${name} ${lname} age ${age}`);
} )('krish','sadhu',25)

