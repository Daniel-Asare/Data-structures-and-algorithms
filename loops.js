'use strict'
// for (let i = 5; i >= 1; i--){
//   if (i % 2 !== 0){
//     console.log(i);
//   }
// }

// for(let i = 1; i <= 20; i++){
//   if(i === 13){
//     break;
//   } else{
//     console.log(i);
//   }
// }

// let logIn = false;
// let username;

// for(let rep = 1; rep <= 10; rep++){
//   console.log(`Lifting weights repetition ${rep}`);
// }

/* 
const typeArr = [];
for(let i = 0; i < danny.length; i++){
  console.log(danny[i]);
  typeArr.push(typeof danny[i])
}

console.log(typeArr);
*/

const years = [1991,2007,1960,2020]
const ages = [];
for(let i = 0; i < years.length; i++){
  // ages[i] = 2037 - years[i];
  ages.push(2037 - years[i]);
}

console.log(ages);

// Continue and break
// for(let i = 0; i < danny.length; i++){
//   if(typeof danny[i] !== 'string'){
//     continue;
//   }
//   console.log( danny[i],typeof danny[i]);
// }

// for(let i = 0; i < danny.length; i++){
//   if(typeof danny[i] === 'boolean'){
//     break;
//   }
//   console.log( danny[i],typeof danny[i]);
// }

  const danny = ['danny','asare',2037-1991,'teacher',['Michael','Peter','Steven'],true];

  for (let i = danny.length - 1; i >= 0 ;i--){
    console.log(danny[i]);
  }

  for(let exercise = 1; exercise < 4; exercise++){
    console.log(`--------Starting exercise ${exercise}`);

    for(let rep = 1; rep <= 6; rep++){
      console.log(`Exercise ${exercise}:Lifting weight repetition ${rep}`);
    }
  }

