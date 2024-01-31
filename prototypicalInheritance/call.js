const user1 = {
    firstName: "simpy",
    location: "gaya",
    about: function() {
        console.log(`Hi, I am ${this.firstName}. I am from ${this.location}.`)
    }
}

const user2 = {
    firstName: "reshu",
    location: "sitamarhi"
}

user1.about.call(user2);