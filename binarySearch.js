// Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return - 1 if the target element is not found
function binarySearch(arr,target){
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while(startIndex <= endIndex){
    let middleIndex = Math.floor((startIndex + endIndex)/2);
    if(arr[middleIndex] === target){
      return middleIndex;
    }
    else if(target < arr[middleIndex]){
      endIndex = middleIndex - 1;
    } 
    else{
      startIndex = middleIndex + 1;
    }
  }
  return -1;
}
console.log(binarySearch([-5,2,4,6,10], 6));
console.log(binarySearch([-5,2,4,6,10], 10));
console.log(binarySearch([-5,2,4,6,10], 20));
