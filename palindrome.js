// Palindrome Checker: Write a function to check if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. Example: "racecar" is a palindrome.

const str = 'daniel'
str[1]= 'e';
console.log(str);

function palindrome(str){
  let left = 0;
  let right = str.length - 1;
  while (left < right){
    if(str[left] !== str[right]){
      return false
    }
    left++;
    right--;
  } 
  return true;
 
}

console.log(palindrome('racecar'));
console.log(palindrome('raceacar'));