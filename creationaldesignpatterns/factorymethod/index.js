// class based approch
class Developer {
    constructor(name, phrase) {
        this.name = name
        this.phrase = phrase
        this.profession = "developer"
    }

    code = () => console.log("Typing... compiling... debugging!")
    introduce = () => console.log(this.phrase)
}

const dev1 = new Developer("Zahid", "Hey, I'm Zahid the developer!")
console.log(dev1.name)        // Output: "Zahid"
console.log(dev1.phrase)      // Output: "Hey, I'm Zahid the developer!"
dev1.code()                   // Output: "Typing... compiling... debugging!"
dev1.introduce()              // Output: "Hey, I'm Zahid the developer!"


// function based approach

function Developer(name, phrase) {
    this.name = name
    this.phrase = phrase
    this.profession = "developer"
}

Developer.prototype.code = function () {
    console.log("Typing... compiling... debugging!")
}

Developer.prototype.introduce = function () {
    console.log(this.phrase)
}

const dev2 = new Developer("Dev", "Hi, I'm Dev and I love clean code!")
console.log(dev2.name)        // Output: "Dev"
console.log(dev2.phrase)      // Output: "Hi, I'm Dev and I love clean code!"
dev2.code()                   // Output: "Typing... compiling... debugging!"
dev2.introduce()              // Output: "Hi, I'm Dev and I love clean code!"

