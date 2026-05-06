// 1. Default Parameter
function greetUser(name = "Guest") {
    console.log("Hello,", name);
}

console.log("=== GREET TEST ===");
greetUser();
greetUser("Alex");



// 2 & 3. `this` behavior
console.log("\n=== THIS TEST ===");

// Regular function → correct `this`
const user1 = {
    name: "Alice",
    sayHi: function () {
        console.log("Regular:", this.name);
    }
};

user1.sayHi();


// Arrow function → incorrect `this`
const user2 = {
    name: "Bob",
    sayHi: () => {
        console.log("Arrow:", this.name);
    }
};

user2.sayHi();

// 4. var vs let
console.log("\n=== VAR vs LET TEST ===");

// var → shared variable
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("var i:", i);
    }, 100);
}

// let → new variable each loop
for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log("let j:", j);
    }, 100);
}

