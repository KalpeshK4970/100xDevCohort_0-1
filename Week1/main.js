// CallBack Function
function sum(num1,num2, fnToCall){
    let result = num1+num2;
    fnToCall(result);
}

function display(data){
    console.log("The result of the sum is : " + data);
}

function displayPassive(data){
    console.log("Sum's result is : " + data);
}

sum(4,6,displayPassive)
display(sum(3,5));

function calculateArithmetic(a,b,fnToCall){
    const result = fnToCall(a,b);
    return result;
}

function sum(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

const ans = calculateArithmetic(19,8,sum);
console.log(ans);

