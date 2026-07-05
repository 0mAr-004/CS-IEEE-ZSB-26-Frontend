//1

let birthday= new Date(2004,12,1);
let diff=Date.now()-birthday;

console.log(diff/1000); //seconds
console.log(diff/1000/60); //min
console.log(diff/1000/60/60);//hours
console.log(diff/1000/60/60/24);//days
console.log(diff/1000/60/60/24/365);//years
//2
let date = new Date();

date.setUTCFullYear(date.getUTCFullYear() + 10);
date.setUTCSeconds(date.getUTCSeconds() + 1);

console.log(date);
//3
let date2 = new Date(2026, 6, 0);

console.log(date2);

let months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

console.log(`Previous Month Is ${months[date2.getMonth()]} And Last Day Is ${date2.getDate()}`);
//4

let date3 = new Date("Dec 1 2004 00:00:00");

let date4 = new Date(2004, 11, 1, 0, 0, 0);

let date5 = new Date(1101859200000);

console.log(date3);
console.log(date4);
console.log(date5);

//5
let start = new Date();

for (let i = 1; i <= 99999; i++) {
  console.log(i);
}

let end = new Date();

let Diff = end - start;

console.log(`Loop Took ${Math.trunc(Diff)} Milliseconds.`);

//6
function* gen() {
  let value = 14;
  let step = 140;

  while (true) {
    yield value;
    value += step;
    step += 200;
  }
}

let generator = gen();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

//7
function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}

function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

function* genAll() {
  let seen = new Set();

  for (let value of genNumbers()) {
    if (!seen.has(value)) {
      seen.add(value);
      yield value;
    }
  }

  for (let value of genLetters()) {
    if (!seen.has(value)) {
      seen.add(value);
      yield value;
    }
  }
}

let generator2 = genAll();

console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());

//8
// mod-one.js

// export default function (a, b, c) {
//   return a + b + c;
// }
// // mod-two.js

// let a = 10; // Do Not Edit Names
// let b = 20; // Do Not Edit Names
// let c = 30; // Do Not Edit Names

// export let numOne = a;
// export let numTwo = b;
// export let numThree = c;
// //main.js
// import calc from "./mod-one.js";
// import * as modOne from "./mod-two.js";

// console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60