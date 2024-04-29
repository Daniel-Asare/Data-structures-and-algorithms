/*
FIBONACCI SEQUENCE is the sequence in which each number is the sum of the two preceding ones. 

Problem: Giving the number 'n' find the first 'n' elements of the fibonacci sequence

*/
function fibonacci(n){
  const fib = [0,1];
  for (let i = 2; i < n; i++){
    fib[i] = fib[i-1] + fib[i-2];
  }
  return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));

