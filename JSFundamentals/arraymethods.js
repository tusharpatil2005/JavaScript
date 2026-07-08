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
