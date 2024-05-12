// Merge Two Sorted Arrays: Write a function that merges two sorted arrays into a single sorted array.

function mergeArray(arr1,arr2){
  let sortedArr = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      sortedArr.push(arr1[i])
      i++
    }else{
      sortedArr.push(arr2[j])
      j++
    }
    }
    while(i < arr1.length){
      sortedArr.push(arr1[i])
      i++;
    }
    while(j < arr1.length){
      sortedArr.push(arr2[j])
      j++
  }
  // return sortedArr.concat(arr1.slice(i)).concat(arr2.slice(j));
  return sortedArr;
}

console.log(mergeArray([1,8,14],[7,9,12]));