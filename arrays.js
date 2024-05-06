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


// Destruction
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  
  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; 
  },
  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  }
};






/*

const arr = [2,3,4];
const a = [0];
const b = [1];
const c = [2];

const [x,y,z] = arr;
console.log(x,y,z);

console.log(arr);

let [main,,secondary] = restaurant.categories;
console.log(main, secondary);



// const temp = main;
// main = secondary;
// secondary = temp;

[main,secondary] = [secondary,main];
console.log(main, secondary);

([starter, main] = restaurant.order(2,0));
console.log(starter,main);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i,, j] = nested;
// console.log(i,j);

const [i, ,[j,k]] = nested;
console.log(i,j,k);

// Default values
const [p = 1, q = 1, r=1] = [8];
console.log(p, q, r);

*/
// Spread operator
const arr = [7,8,9];
const badNewArr = [1,2,3,arr[0], arr[1],arr[2]];
console.log(arr);

const newArr = [1,2,3,4,...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const manMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu,...restaurant.mainMenu]
console.log(menu);

// ITERABLES :  arrays, string, sets, NOT objects

const str = 'daniel';
const letters = [...str];
console.log(letters);

const ingredients = [ prompt(`Let's make pasta! ingredient 1`), prompt(`Let's make pasta! ingredient 2!`), prompt(`Let's make pasta! ingredient 1`)];

restaurant.orderPasta(...ingredients)

