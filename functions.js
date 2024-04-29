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

function morning(name){

  return `Good Morning ${name}`;
}

function greet(nam,cb){
  const myName = 'Daniel';
  console.log(`${cb(nam)} , my name is ${myName}`);
  
}
 
greet('Joe', morning);

