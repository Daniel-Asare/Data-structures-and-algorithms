// Find the Maximum Number: Write a function that takes an array of numbers and returns the largest number in the array.

function maxNumber(arr){
  let max = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
    console.log(arr[i]);
  }
  return max
}

console.log(maxNumber([2,5,6,67,8,3]));