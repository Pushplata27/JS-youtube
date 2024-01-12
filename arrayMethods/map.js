// arr.map((currentElemt, index, array))

// Return the new array containing the results of calling a function
// on every element in this arrray.

const arr = [22, 66, 44, 90, 23, 55];

// const ans = arr.map((num) => {
//     return num > 45;
// })
// console.log(ans);

// const ans = arr.map((curElm, index, array) => {
//     return `Index no. - ${index} and the value is ${curElm} belong to ${array} `
// })
// console.log(ans);

const ans = arr.forEach((curElm, index, array) => {
  return `Index no. - ${index} and the value is ${curElm} belong to ${array} `;
});
console.log(ans);

// o/p - undefined, in case of forEach

// It return new array without mutating the original array.

// Filter

const arr2 = [1, 3, 5, 7, 8];

const arr2Ans = arr2
  .map((num) => {
    return num * 2;
  })
  .filter((num) => {
    return num > 3;
  });

console.log(arr2Ans);


// Reduce

// Sum of all numbers in array

let arr3 = [1, 3, 5, 7, 8];

const sum = arr3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})

console.log(sum)


