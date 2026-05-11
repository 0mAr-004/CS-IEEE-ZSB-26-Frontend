//1
let myNumbers = [1, 2, 3, 4, 5];
let[a1,,,,e1]=myNumbers;
console.log(a1 * e1); // 5
//2
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

let[a2, b2, c2, [d2, e2, [f2, g2]]]= mySkills ;

console.log(`My Skills: ${a2}, ${b2}, ${c2}, ${d2}, ${e2}, ${f2}, ${g2}`);



//3
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

let newarr=[arr3[1],arr3[2],arr1[0]];
let [a3,b3,c3]=newarr;

console.log(`My Best Friends: ${a3}, ${b3}, ${c3}`);

//4

const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

const {
  age: a4,
  working: w,
  country: c4,
  hobbies: [h1, , h3],
} = member;

console.log(`My Age Is ${a4} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c4}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming


//5
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here
const {
  title: t,
  developer: d,
  releases: {
    "Oath In Felghana": [u, j],
    "Ark Of Napishtim": { US: u_price, JAP: j_price },
    Origin: or,
  },
} = game;


const [o, a] = Object.keys(game.releases);

console.log(`My Favourite Games Style Is ${t} Style`);
console.log(`And I Love ${d} Games`);
console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
console.log(`Although I Love ${a}`);
console.log(`${a} Price in USA Is ${u_price}`);
console.log(`${a} Price in Japan Is ${j_price}`);
console.log(`Origin Price Is ${or}`);

//6
let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let {
  title,
  age,
  available,
  skills: [, lastskill],
} = myFriends[chosen - 1];

console.log(title);
console.log(age);
console.log(available ? "Available" : "Not Available");
console.log(lastskill);