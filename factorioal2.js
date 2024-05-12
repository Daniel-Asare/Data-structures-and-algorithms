function factorial2(n){
  let num = 1;
  if(n < 2){
    return 1;
  }
  for(let i = 2; i <= n; i++ ){
    num *= i
  }
  return num;
}

console.log(factorial2(4));