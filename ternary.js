/**
 * TERNARY --> three parts
 * 
 * ------------STRUCTURE-------------
 *           ?                      :
 * 
 * condition ? if true, do somethin : if false, do notSomethin
 */

// simple if-else
const age = 20;
// if(age >= 18) {
//   console.log('You can vote');
// }
// else {
//   console.log('You cant vote');
// }

// // simple ternary 
// age >= 18 ? console.log('You can vote') : console.log('Yor cant vote');

let price = 500;
const isLeader = true;

if(isLeader === true) {
  price = 0;
}
else {
  price += 100;
}
// console.log(price);

price = isLeader === true ? 0 : price + 100;



if(isLeader === true) {
  if(price > 1000) {
    price /= 2;
  }
  else {
    price = 0;
  }
}
else {
  price += 100;
}

// ternary for the nested condition
// price > 1000 ? price / 2 : 0

// price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 100;
price = isLeader === true ? 
        price > 1000 ? 
              price / 2 : 0 
        : price + 100;

console.log(price);