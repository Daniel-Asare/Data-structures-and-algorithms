// Giving a number 'n' , find the nth element of the fibonacci

function recursiveFibonacci(n){
  if(n < 2){
    return n
  }
  return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(2));
console.log(recursiveFibonacci(13));

// O(n) - Iterable
// O(2power(n)) - recursive