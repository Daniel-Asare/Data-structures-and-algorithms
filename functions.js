/*function greetMorning(name){
  const myName = 'Daniel';
  console.log(`Good morning ${name}, my name is ${myName}`);
}
function greetAfternoon(name){
  const myName = 'Daniel';
  console.log(`Good afternoon ${name}, my name is ${myName}`);
}

greetMorning('Michael')
greetMorning('Peter')
*/

function morning(){
  return 'Good Morning'
}

function greet(name,cb){
  const myName = 'Daniel';
  console.log(`${cb} ${name}, my name is ${myName}`);
}
greet('Mike');

