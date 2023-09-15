// singleton
// Object.create

// object literals

// How to access a symbol inside the object

const mySym = Symbol("key1")


const user1 = {
    name: "Pushplata",
    "full name": "Pushplata Prasad",
    [mySym]: "mykey1",
    age: 18,
    location: "Ranchi",
    email: "pushplata@abc.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(user1.email)
// console.log(user1["email"])
// console.log(user1["full name"])
// console.log(user1[mySym])

user1.email = "abc@www.com"
// Object.freeze(user1)
user1.email = "xyz@abc.com"
// console.log(user1);

user1.greeting = function(){
    console.log("Hello user1");
}
user1.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(user1.greeting());
console.log(user1.greetingTwo());