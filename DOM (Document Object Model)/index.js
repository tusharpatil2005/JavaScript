/******************************************************************
 * JavaScript Array Methods
 * Run:
 * node array_methods.js
 ******************************************************************/

// ==========================================================
// Original Array
// ==========================================================

const numbers = [10, 20, 30, 40, 50];

console.log("Original Array:", numbers);

// ==========================================================
// 1. forEach()
// Used to perform an action on every element.
// It DOES NOT return a new array.
// ==========================================================

console.log("\n===== forEach() =====");

numbers.forEach((num) => {
    console.log(num);
});

// Example: Print squares

numbers.forEach((num) => {
    console.log(`${num} -> ${num * num}`);
});

// ==========================================================
// 2. map()
// Returns a NEW array.
// ==========================================================

console.log("\n===== map() =====");

const doubled = numbers.map((num) => {
    return num * 2;
});

console.log(doubled);

// Short form

const squares = numbers.map(num => num * num);

console.log(squares);

// ==========================================================
// 3. filter()
// Returns elements that satisfy a condition.
// ==========================================================

console.log("\n===== filter() =====");

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);

const greaterThan25 = numbers.filter(num => num > 25);

console.log(greaterThan25);

// ==========================================================
// 4. find()
// Returns FIRST matching element.
// ==========================================================

console.log("\n===== find() =====");

const result = numbers.find(num => num > 25);

console.log(result);

// ==========================================================
// 5. some()
// Returns true if ANY element matches.
// ==========================================================

console.log("\n===== some() =====");

const hasEven = numbers.some(num => num % 2 === 0);

console.log(hasEven);

const hasGreater100 = numbers.some(num => num > 100);

console.log(hasGreater100);

// ==========================================================
// 6. every()
// Returns true if ALL elements satisfy condition.
// ==========================================================

console.log("\n===== every() =====");

const allPositive = numbers.every(num => num > 0);

console.log(allPositive);

const allEven = numbers.every(num => num % 2 === 0);

console.log(allEven);

// ==========================================================
// 7. reduce()
// Used to calculate a single value.
// ==========================================================

console.log("\n===== reduce() =====");

// Sum

const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);

console.log(sum);

// Product

const product = numbers.reduce((total, num) => {
    return total * num;
}, 1);

console.log(product);

// ==========================================================
// 8. includes()
// Checks if value exists.
// ==========================================================

console.log("\n===== includes() =====");

console.log(numbers.includes(20));

console.log(numbers.includes(100));

// ==========================================================
// 9. sort()
// Sorts the array.
// ==========================================================

console.log("\n===== sort() =====");

const values = [7, 2, 10, 1, 5];

console.log("Before Sort:", values);

values.sort((a, b) => a - b);

console.log("Ascending:", values);

values.sort((a, b) => b - a);

console.log("Descending:", values);

// ==========================================================
// 10. reverse()
// Reverses array.
// ==========================================================

console.log("\n===== reverse() =====");

const arr = [1, 2, 3, 4, 5];

arr.reverse();

console.log(arr);

// ==========================================================
// 11. Chaining
// Combine multiple methods together.
// ==========================================================

console.log("\n===== Method Chaining =====");

const answer = numbers
    .filter(num => num > 20)
    .map(num => num * 10);

console.log(answer);

// ==========================================================
// 12. Real Example
// ==========================================================

console.log("\n===== Student Example =====");

const students = [
    { name: "Tushar", marks: 85 },
    { name: "Rahul", marks: 40 },
    { name: "Amit", marks: 72 },
    { name: "Neha", marks: 91 }
];

// Passed students

const passedStudents = students.filter(student => student.marks >= 50);

console.log(passedStudents);

// Student names

const names = students.map(student => student.name);

console.log(names);

// Topper

const topper = students.find(student => student.marks > 90);

console.log(topper);

// Total marks

const totalMarks = students.reduce((sum, student) => {
    return sum + student.marks;
}, 0);

console.log(totalMarks);

// ==========================================================
// END
// ==========================================================

console.log("\nFinished learning Array Methods!");