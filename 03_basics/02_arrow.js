const user = {
    username: "pushplata",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function user1(){
//     let username = "pushplata"
//     console.log(this.username);
// }

// userFun()

// let userFun = function () {
//     let username = "pushplata"
//     console.log(this.username);
// }

let userFun =  () => {
    let username = "pushplata"
    console.log(this);
}


// userFun()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Pushplata"})

