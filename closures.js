// Regular closure
function createCounter(start) {
    let count = start;

    return function () {
        console.log("Count:", count);
        count++;
    };
}


// Arrow function closure
function createCounterArrow(start) {
    let count = start;

    return () => {
        console.log("Arrow Count:", count);
        count++;
    };
}


console.log("=== CLOSURE TEST ===");

const counter1 = createCounter(5);
counter1();
counter1();
counter1();

const counter2 = createCounterArrow(10);
counter2();
counter2();
counter2();
