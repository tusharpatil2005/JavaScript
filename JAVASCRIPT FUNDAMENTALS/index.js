// ==========================================
// JAVASCRIPT FUNDAMENTALS - ONE FILE
// ==========================================

// 1. Output
console.log("Hello JavaScript");

// 2. Variables
var a = 10;
let b = 20;
const c = 30;

console.log(a, b, c);

// 3. Data Types
let name = "Tushar";
let age = 21;
let isStudent = true;
let salary = 50000.50;
let x = null;
let y;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof salary);
console.log(typeof x);
console.log(typeof y);

// 4. Operators
let num1 = 10;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);

// 5. Comparison Operators
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 == num2);
console.log(num1 != num2);

// 6. Logical Operators
console.log(true && false);
console.log(true || false);
console.log(!true);

// 7. If Else
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else {
    console.log("Fail");
}

// 8. Switch
let day = 3;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid");
}

// 9. Loops

// For Loop
for(let i=1;i<=5;i++){
    console.log("For:", i);
}

// While Loop
let i=1;
while(i<=5){
    console.log("While:", i);
    i++;
}

// Do While
let j=1;
do{
    console.log("Do While:", j);
    j++;
}while(j<=5);

// 10. Functions
function add(a,b){
    return a+b;
}

console.log(add(5,10));

// Arrow Function
const square = (n) => n*n;
console.log(square(5));

// 11. Arrays
let arr = [10,20,30,40];

console.log(arr);
console.log(arr[0]);

arr.push(50);
arr.pop();

arr.forEach(value => console.log(value));

for(let value of arr){
    console.log(value);
}

// 12. Objects
let student = {
    name: "Tushar",
    age: 21,
    city: "Pune"
};

console.log(student.name);
console.log(student.age);

// 13. String Methods
let str = "JavaScript";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(0,4));

// 14. Array Methods
let numbers = [5,3,8,1];

numbers.sort((a,b)=>a-b);
console.log(numbers);

let doubled = numbers.map(num=>num*2);
console.log(doubled);

let even = numbers.filter(num=>num%2==0);
console.log(even);

let sum = numbers.reduce((total,num)=>total+num,0);
console.log(sum);

// 15. Template Literals
let user = "Tushar";
console.log(`Welcome ${user}`);

// 16. Destructuring
let colors = ["Red","Green","Blue"];

let [first,second] = colors;
console.log(first,second);

// 17. Spread Operator
let arr1 = [1,2,3];
let arr2 = [...arr1,4,5];

console.log(arr2);

// 18. Rest Operator
function total(...nums){
    let sum=0;
    for(let n of nums){
        sum+=n;
    }
    return sum;
}

console.log(total(10,20,30));

// 19. Classes
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    display(){
        console.log(this.name,this.age);
    }
}

let p1 = new Person("Tushar",21);
p1.display();

// 20. Promises
let promise = new Promise((resolve,reject)=>{
    let success=true;

    if(success)
        resolve("Success");
    else
        reject("Failed");
});

promise
.then(result=>console.log(result))
.catch(error=>console.log(error));

// 21. Async Await
async function hello(){
    return "Hello Async";
}

hello().then(console.log);

// 22. Date
let today = new Date();
console.log(today);

// 23. Math
console.log(Math.sqrt(25));
console.log(Math.max(10,20,30));
console.log(Math.random());

// 24. JSON
let json = JSON.stringify(student);
console.log(json);

let obj = JSON.parse(json);
console.log(obj);

// 25. Set
let set = new Set([1,2,3,3,4]);
console.log(set);

// 26. Map
let map = new Map();
map.set("name","Tushar");
map.set("age",21);

console.log(map.get("name"));

// 27. Exception Handling
try{
    let result = 10/0;
    console.log(result);
}catch(error){
    console.log(error);
}finally{
    console.log("Finished");
}

console.log("Program End");