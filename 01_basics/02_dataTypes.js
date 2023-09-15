"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser


let name = "Pushplata"
let isLoggedIn = false
let state;

// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

// Primitive (stack)

let a = 10;
let b = a;

b++;

console.log(a);
console.log(b);



// Reference (Non-primitive) (Heap)

let obj1 = {
    name: "pushplata",
    location: "gaya"
}

let obj2 = obj1;

obj2.location = "Ranchi";

console.log(obj1);
console.log(obj2);

