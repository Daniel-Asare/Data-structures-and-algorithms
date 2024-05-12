// Reverse a String: Write a function that reverses a given string. For example, if the input is "hello", the output should be "olleh".

function reverseStr(str){
 let reserve = '';
 for(let i = str.length - 1; i >= 0; i--){
  reserve += str[i];
 }
 return reserve;
}

console.log(reverseStr('Hello'));

function reverseArr(arr){
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while(leftIndex < rightIndex){
    let hold = arr[leftIndex] 
    arr[leftIndex] = arr[rightIndex]
    arr[rightIndex] = hold;
    leftIndex++
    rightIndex--;
  }
  return arr
} 

console.log(reverseArr(['H','e','l','l','o']));
