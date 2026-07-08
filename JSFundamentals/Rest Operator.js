// 18. Rest Operator
function total(...nums){
    let sum=0;
    for(let n of nums){
        sum+=n;
    }
    return sum;
}

console.log(total(10,20,30)); 

//output: 60