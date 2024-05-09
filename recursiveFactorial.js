// Giving an integer 'n', find the factorial of that integer

function recursiveFactorial(n){
  if(n < 2){
    return 1;
  }
  return n * (recursiveFactorial(n-1))
}

console.log(recursiveFactorial(1));
console.log(recursiveFactorial(5));
console.log(recursiveFactorial(6));

// Big O - O(n)