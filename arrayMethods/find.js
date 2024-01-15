// It returns the first element in the provided array that satisfies the provided testing function. 
// If no values satisfy the testing function, undefined is returned.

const array = [5, 12, 8, 130, 44];

const ans = array.find((number) => {
    return number > 12;
})

console.log(ans)

// Every()

// It checks whether all elements in the array pass the test implemented by the provided function. 
// It returns a Boolean value.


const array1 = [5, 12, 8, 13, 44];

// const res = array1.every((number) => {
//     return number < 45;
// })

// console.log(res);

function isEven(num) {
    return num %2 === 0;
}
const res = array1.every(isEven);
console.log(res)


// Some()

// It checks whether at least one element in the array passes the test implemented by the provided function. 
// It returns true if, in the array, it finds an element for which the provided function returns true; 
// otherwise it returns false. It doesn't modify the array.

function isEven(num) {
    return num %2 === 0;
}
const reslt = array1.some(isEven);
console.log(reslt)


