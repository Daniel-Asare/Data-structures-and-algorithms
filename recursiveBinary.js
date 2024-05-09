//Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return - 1 if the target element is not found

function recursiveBinarySearch(arr,target){
  return search(arr,target,0,arr.length - 1)
}

function search(arr,target,left,right){
  if(left > right){
    return -1;
  }
  let middle = Math.floor((left+right)/2);
  if(target === arr[middle]){
    return middle
  }
  if(target < arr[middle]){
    return search(arr,target,0,middle - 1)
  }
  if(target > arr[middle]){
    return search(arr,target,middle + 1,right)
  }

}
console.log(recursiveBinarySearch([-5,2,4,6,10],6));
