// Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return - 1 if the target element is not found
function binarySearch(arr,target){
  let start = 0;
  let end = arr.length - 1

  while(start <= end){
    let middle = Math.floor((start + end)/2);
    if(target === arr[middle]){
      return middle
    }
    if(target < arr[middle]){
      end = middle - 1
    } else{
      start = middle + 1;
    }
  }
  return - 1;
}
console.log(binarySearch([-5,2,4,6,10], 6));
console.log(binarySearch([-5,2,4,6,10], 10));
console.log(binarySearch([-5,2,4,6,10], 20));
