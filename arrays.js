/*
const numbers = [1,2,4,8];
console.log(numbers);numbers

numbers[4] = 16;
console.log(numbers);

numbers.push(12,20);
console.log(numbers);

numbers.unshift(0);
console.log(numbers);

const lastNumber = numbers.pop();
console.log(lastNumber);
console.log(numbers.shift());
console.log(numbers);

numbers.splice(2,0,6);
console.log(numbers);

const newNumbers = numbers.slice(0,3)
console.log(newNumbers);

// const list = ['milk','eggs','butter','bread','bacon','sausage','juice'];

const list = 
[
  {text:"milk", cost:4, need:false},
  {text:"eggs", cost:19, need:true},
  {text:"butter", cost:5, need:false},
  {text:"bread", cost:3, need:true},
  {text:"bacon", cost:12, need:true}
]

let html = '';
let total = 0;

for(let index = 0; index < list.length; index++ ){
  let items = list[index];
  if (toyy)
  html += `<li> ${items.text} </li>`;
total += items.cost
}

document.getElementById('list').innerHTML = html
document.getElementById('cost').innerHTML = `$${total}`;

const names = ['John','daniel','Kudus','barry','Ben',1,2,3];

console.log(names.length);
console.log(names[names.length - 1]);

// concat

const lastNames = ['Pepper','Banana', 'Onion'];
const allNames = names.concat(lastNames)
console.log(allNames);


const names = ['Anna','Susy','Bob'];
const lastName = 'Shakeandbake';

let newArray = [];

for (let i = 0; i < names.length; i++) {
  const fullName = ` ${names[i]} ${lastName}`;
  //  console.log(fullName);
   newArray.push(fullName);
}
console.log(newArray);

1 > 0 ? console.log('Value is true') : console.log('Value is false');

*/

// forEach

const people = [
  {name:'bob', age:20, position:'developer',id:1,salary: 200},
  {name:'peter', age: 25, position: 'designer',id:2,salary: 300},
  {name:'susy',age:30, position: 'the boss',id:3,salary: 500},
  {name:'anna',age:35, position: 'the boss',id:4,salary: 500}
]

// function showPerson (person){
//   console.log(person.name.toUpperCase());
// }

// people.forEach(showPerson);

// people.forEach(function(person){
//   console.log(person.position.toUpperCase());
// })

// Map

// const ages = people.map((person)=>{
//   return person.age + 20;
// })

// const newPeople = people.map(function(person){
//   return {firstName:person.name.toUpperCase(), oldAge:person.age + 20}

// })

// const names = people.map(function(person){
//   return `<h1>${person.name} hanson</h1>`;
// })

// document.body.innerHTML = names.join('')
// console.log(names);
// console.log(ages);
// console.log(newPeople);


// filter
// const youngPeople = people.filter(function(person){
//   return (person.age >= 25);
// })

// console.log(youngPeople);

// // find
// const names = ['bob','peter','suzy']
// console.log(names.find(function(name){
//   return name === 'bob'
// }));


// const person = people.find(function(person){
//   return person.id === 3 ;
// })  
// const person2 = people.find(function(person){
//   return person.id > 2;
// })  
// console.log(person);

// Reduce 
const total = people.reduce(function(acc,curr){
  acc+=curr.salary;
  return acc 
},0)
console.log(total );

// Challenge












