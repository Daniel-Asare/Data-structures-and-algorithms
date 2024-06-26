// Factorial of a number
/*
Problem: Given an integer 'n', find the factorial of that integer

In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'

eg factorial(4) = 4*3*2*1 = 24
*/

function factorial(n){
  let result = 1;
  for(let i = 2; i <= n; i++){
  result *= i;
  }
  return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));