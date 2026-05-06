console.log("=== BEFORE DEFINITIONS ===");

try {
    console.log("Area before:", getCalculation("area")("circle", 10));
    console.log("Perimeter before:", getCalculation("perimeter")("square", 10));
} catch (e) {
    console.log("Error (before):", e.message);
}

// typeof checks
console.log("typeof calculateArea:", typeof calculateArea);
console.log("typeof calculatePerimeter:", typeof calculatePerimeter);
console.log("typeof getCalculation:", typeof getCalculation);


function calculateArea(shape, value) {
    if (shape === "circle") {
        return Math.PI * value * value;
    } else if (shape === "square") {
        return value * value;
    }
}


const calculatePerimeter = function (shape, value) {
    if (shape === "circle") {
        return 2 * Math.PI * value;
    } else if (shape === "square") {
        return 4 * value;
    }
};



// Higher-Order Function
function getCalculation(type) {
    if (type === "area") {
        return calculateArea;
    } else if (type === "perimeter") {
        return calculatePerimeter;
    }
}


console.log("\n=== AFTER DEFINITIONS ===");

console.log("Area after:", getCalculation("area")("circle", 10));
console.log("Perimeter after:", getCalculation("perimeter")("square", 10));

console.log("typeof calculateArea:", typeof calculateArea);
console.log("typeof calculatePerimeter:", typeof calculatePerimeter);
console.log("typeof getCalculation:", typeof getCalculation);


