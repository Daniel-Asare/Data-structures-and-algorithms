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
*/

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
