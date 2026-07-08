/******************************************************************
 * ES6+ JavaScript Fundamentals
 * Run this file using:
 * node es6_fundamentals.js
 ******************************************************************/

// ==========================================================
// 1. var, let, const
// ==========================================================

console.log("===== var, let, const =====");

var city = "Mumbai";
let age = 22;
const country = "India";

console.log(city);
console.log(age);
console.log(country);

// var can be redeclared
var city = "Pune";
console.log(city);

// let can be updated but NOT redeclared
age = 23;
console.log(age);

// const cannot be updated
// country = "USA"; // Error


// ==========================================================
// 2. Template Literals
// ==========================================================

console.log("\n===== Template Literals =====");

let name = "Tushar";
let college = "ABC College";

// Old way
console.log("My name is " + name + " and I study at " + college);

// ES6 way
console.log(`My name is ${name} and I study at ${college}`);


// ==========================================================
// 3. Arrow Functions
// ==========================================================

console.log("\n===== Arrow Functions =====");

// Normal Function
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

// Arrow Function
const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 6));

// Short Arrow Function
const square = num => num * num;

console.log(square(8));


// ==========================================================
// 4. Default Parameters
// ==========================================================

console.log("\n===== Default Parameters =====");

function greet(username = "Guest") {
    console.log(`Welcome ${username}`);
}

greet("Rahul");
greet();


// ==========================================================
// 5. Destructuring Arrays
// ==========================================================

console.log("\n===== Array Destructuring =====");

const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);


// ==========================================================
// 6. Destructuring Objects
// ==========================================================

console.log("\n===== Object Destructuring =====");

const student = {
    studentName: "Tushar",
    branch: "Data Science",
    year: 3
};

const { studentName, branch, year } = student;

console.log(studentName);
console.log(branch);
console.log(year);


// ==========================================================
// 7. Spread Operator (...)
// ==========================================================

console.log("\n===== Spread Operator =====");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);


// Copy array
const copyArray = [...arr1];

console.log(copyArray);


// ==========================================================
// 8. Rest Operator (...)
// ==========================================================

console.log("\n===== Rest Operator =====");

function total(...marks) {

    let sum = 0;

    for (let mark of marks) {
        sum += mark;
    }

    return sum;
}

console.log(total(10, 20));
console.log(total(10, 20, 30));
console.log(total(10, 20, 30, 40));


// ==========================================================
// 9. Enhanced Object Literals
// ==========================================================

console.log("\n===== Enhanced Object Literals =====");

let productName = "Laptop";
let price = 55000;

const product = {
    productName,
    price,

    display() {
        console.log(`${this.productName} costs ₹${this.price}`);
    }
};

product.display();


// ==========================================================
// 10. for...of Loop
// ==========================================================

console.log("\n===== for...of Loop =====");

const fruits = ["Apple", "Mango", "Banana"];

for (const fruit of fruits) {
    console.log(fruit);
}


// ==========================================================
// 11. Optional Chaining
// ==========================================================

console.log("\n===== Optional Chaining =====");

const employee = {
    name: "Rohit",
    address: {
        city: "Delhi"
    }
};

console.log(employee.address.city);

// Prevents error if property doesn't exist
console.log(employee.office?.name);


// ==========================================================
// 12. Nullish Coalescing Operator (??)
// ==========================================================

console.log("\n===== Nullish Coalescing =====");

let userName = null;

console.log(userName ?? "Guest");

let score = 0;

// 0 is a valid value, so ?? keeps it
console.log(score ?? 100);


// ==========================================================
// 13. Simple Practice Function
// ==========================================================

console.log("\n===== Practice =====");

const calculate = (a, b = 5) => {

    const result = {
        addition: a + b,
        subtraction: a - b,
        multiplication: a * b
    };

    return result;
};

const answer = calculate(20);

console.log(answer);


// ==========================================================
// END
// ==========================================================

console.log("\nCongratulations! You learned basic ES6 features.");