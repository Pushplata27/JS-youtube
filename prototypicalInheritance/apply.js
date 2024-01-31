const user1 = {
    firstName: "simpy",
    location: "gaya",
    about: function(fruits) {
        console.log(`Hi, I am ${this.firstName}. I am from ${this.location}. ${fruits}`)
    }
}

const user2 = {
    firstName: "reshu",
    location: "sitamarhi"
}

user1.about.apply(user2, ["apple"])