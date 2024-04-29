// PRIME
/*
Problem: Given a natural 'n', determine if the number is a prime or not.

A prime number is a natural number greater than 1 is not a product of two similar natural numbers

isPrime = true(1*5 or 5*1)
isprime = false(1*4,2*2,4*1)
*/

function isPrime(n){
  if(n < 2){
    return false
  }
  for(let i = 2; i < n; i++){
    if(n % i === 0){
      return false
    }  
    return true;
  }
}

console.log(isPrime(1));
console.log(isPrime(6));
console.log(isPrime(4));