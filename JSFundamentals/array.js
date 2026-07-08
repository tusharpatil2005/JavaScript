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