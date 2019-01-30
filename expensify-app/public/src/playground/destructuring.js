// const person = {
//  name: 'jay',
//  age: 23,
//  location:{
//      city:'seoul',
//      temp:34
//  }
// };

// const {name,age} = person;

// console.log(`${name} is ${age}`);

// const book = {
//     title:'Ego is the enemy',
//     author:'ryan holiday',
//     publisher:{
//     }
// };

// const {name:publisher ='self published'} = book.publisher;
// console.log(publisher);

const item = ['coffee (hot)','$2.00','$2.50','$2.75'];
const [coffee,,price] = item;
console.log(`A medium ${coffee} costs ${price}`);