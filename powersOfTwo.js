


// Give a postive interger 'n' determine if the number is a power of 2 or not. An integer is a power of two if there exist an integer 'x' such that 'n' === 2

// function isPowerOfTwo(n){
//   if(n < 1){
//     return false;
//   }

//   while(n > 1){
//     if(n % 2 !== 0){
//       return false
//     }
//     console.log(n = n/2);
    
//   }
//   return true;
// }


function isPowerOfTwoBitwise(n){
  if(n < 1){
    return false;
  }
  return (n & (n-1)) === 0;
}
console.log(isPowerOfTwo(5));
