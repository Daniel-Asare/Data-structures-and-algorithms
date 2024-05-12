// FizzBuzz: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

function fizzBuzz(n){
  let result;
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0){
      result = 'FizzBuzz'
    } 
    else if(i % 5 === 0){
      result = 'Fizz'
    } 
    else if(i % 3 === 0){
      result = 'Buzz'
    }
    else{
      result = i
    }
  }
  return result;

}

console.log(fizzBuzz(12));



