'use strict'

/*const danny = {
  firstName:'Daniel',
  lastName:'Asare',
  age:24,
  job:'Technician',
  friends:['Kudus','atanga','Abena']
}

console.log(danny);
console.log(danny.lastName);
console.log(danny['firstName']);

const nameKey = 'Name'
console.log(danny['first' + nameKey]);

// const answer = prompt('What do you want to know about Danny? Choose between firstName, lastName, age');

// console.log(danny[answer]);
// console.log(danny.answer);

// if(danny[answer]){
//   console.log(danny[answer]);
// } else {
//   console.log('Undefined');
// }

danny.location = 'Accra'
danny['twitter'] = '@Dev_danny29'
console.log(danny);
console.log(`Danny has ${danny.friends.length} friends, and his best friend is called ${danny.friends[0]}`);

const danny = {
  firstName:'Daniel',
  lastName:'Asare',
  birthYear:1991,
  job:'Technician',
  friends:['Kudus','atanga','Abena'],
  hasDriversLicense: true,

  // calcAge : function (birthYear){
  //   return 2027 - birthYear
  // }
  // calcAge : function (){
  //   console.log(this);
  //   return 2027 - this.birthYear
  // }
  calcAge : function (){
    this.age = 2037 - this.birthYear
    return this.age;
  },
  
  getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()}-year old teacher, and ${this.hasDriversLicense?'he has a drivers licenses':'he has no drivers licenses'}`
  }
}

console.log(danny.calcAge())
console.log(danny);
// console.log(danny.age)
// console.log(danny.age)
// console.log(danny.age)

// Challenge
console.log(danny.getSummary());
*/

// Destructuring Objects

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
  orderDelivery: function({starterIndex = 1,mainIndex = 0,time = '12:30',address = 'Ablekuma'}){
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address}  at ${time}`);
  }
};

restaurant.orderDelivery({
  time:'23:30',
  address: 'Via del Solo, 21',
  mainIndex: 2,
  starterIndex: 2
});

restaurant.orderDelivery({
  address: 'Via del Solo, 21'
})

/*
const {name, categories, openingHours} = restaurant;console.log(name, openingHours, categories);

const {name: restaurantName, openingHours:hours, categories: tag} = restaurant
console.log(restaurantName, tag, hours);

// Default values
const {menu = [], starterMenu: starter = []} = restaurant;
console.log(menu, starter);

// Mutating Variables
let a = 111;
let b = 999
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj);
console.log(a,b);

// Nested objects
const {open:o,close:c} = hours;
console.log(o,c);
*/
