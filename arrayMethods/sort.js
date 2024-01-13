// const users = [20,10,66,44];

// const ans = users.sort((a,b) => {
//     return a-b;
// })

// console.log(ans);

const items = [
  { productId: 1, productName: "p1", productPrice: 900 },
  { productId: 2, productName: "p1", productPrice: 200 },
  { productId: 3, productName: "p1", productPrice: 1000 },
  { productId: 4, productName: "p1", productPrice: 500 },
  { productId: 5, productName: "p1", productPrice: 200 },
];

const ans = items.sort((a, b) => {
  return a.productPrice - b.productPrice;
});

console.log(ans);
