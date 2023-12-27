const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// console.log(myObject.cpp)

// Uncaught TypeError TypeError: myObject is not iterable
// for (const key of myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }


// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
     console.log(key);
     console.log(programming[key]);
}



const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map)

for (const [key, value] of map) {
    console.log(key);
    console.log(value);
}