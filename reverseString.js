function reverseStr(str){
  console.log(str.length);
  let reverse = '';
  for( let i = str.length - 1  ; i >= 0; i-- ){
    console.log(str[i], i);
    reverse += str[i];
  }
  return reverse;
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
