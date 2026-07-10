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