const salary = 26000;
const isBCS = true;
const height = 77;

// if(salary > 20000 && height > 78) {
//   console.log('approved');
// }
// else {
//   console.log('Not approved');
// }

// if(salary > 25000 || height >76 || isBCS == true) {
//   console.log('Approved');
// }
// else {
//   console.log('Not approved');
// }

// if(salary > 25000 && height >77 && isBCS == true) {
//   console.log('Approved');
// }
// else {
//   console.log('Not approved');
// }


// ----------------------COMPLEX CONDITION----------------------
// if((salary > 26000 && height > 77) || isBCS ==true) {
//   console.log('Approved');
// }

if((salary > 26000 || height > 77) && isBCS ==true) {
  console.log('Approved');
}