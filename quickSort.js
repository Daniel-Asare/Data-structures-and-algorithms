//  Given an array of integers, sort the array

function quickSort(arr){
  if(arr < 2){
    return arr;
  }
 let pivot = arr[arr.length - 1];
 let left = [];
 let right = [];
 for(let i = 0; i < arr.length - 1;i++){
  if(arr[i] < pivot){
    left.push(arr[i])
  } else{
    right.push(arr[i])
  }
 }
//  console.log(left);
 return [...quickSort(left),pivot, ...quickSort(right)];

}


const arr = [-6, 20, 8, -2, 4];
console.log(quickSort(arr));
