// Import stylesheets
import './style.css';

// **********************************************************
// What is NaN in JavaScript? What is its type? How can you reliably test if a value is equal to NaN?
// **********************************************************

// type of NaN
console.log(typeof NaN); //number

// NaN == NaN
console.log(NaN == NaN); //false
console.log(NaN === NaN); //false
console.log(NaN != NaN); //true

// Testing for NaN
// ***************************

//NaN is never equal to another NaN
function isThisNaN(value) {
  return value !== value;
}

console.log(isThisNaN(NaN)); //true
console.log(isThisNaN(Number.NaN)); //true

console.log(isThisNaN('NaN')); //false
console.log(isThisNaN(1)); //false
console.log(isThisNaN('javaScript')); //false

// Testing by isNaN() global method and Number.isNaN()
// ***************************************************

console.log(isNaN('html')); //true
//the string is coerced to number, which then evaluates to NaN

console.log(isNaN('4')); //false
//'4', it gets evaluated to a number so it is not a NaN

console.log(isNaN(100)); //false

//So using isNaN() is not very reliable to test for NaN

// Number.isNaN() method
// ************************

console.log(Number.isNaN('html')); //false
console.log(Number.isNaN('4')); //false
// it compares the string directly. In the code above, both 'html' and '4' are strings and therefore not NaN in the context of a Number method.

console.log(Number.isNaN(100)); //false;
console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN('NaN')); //false

// Luke Shiru: You could also just use Object.is
const isThatNaN = (value) => Object.is(value, NaN);
console.log(isThatNaN(NaN, NaN)); //true

console.log(isThatNaN('NaN', NaN)); //false
console.log(isThatNaN(NaN, 'NaN')); //true

