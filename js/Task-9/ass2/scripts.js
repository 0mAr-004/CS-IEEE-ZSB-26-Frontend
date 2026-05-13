//1
let setofnumbers= new Set([10]);
setofnumbers.add(20).add(setofnumbers.size);
console.log(setofnumbers);
let arr=[...setofnumbers];
console.log(arr[arr.length-1]);

//2
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log([...new Set(myFriends)].sort());

//3
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myMap = new Map(Object.entries(myInfo));
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));

//4
let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].sort().join(""));

//5
let theName = "Elzero";

console.log([...theName]);

//6
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let numbersCount = chars.filter(e => typeof e === "number").length;

let letters = chars.filter(e => typeof e === "string");

chars = [...letters, ...letters.slice(0, numbersCount)];

console.log(chars);

//7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));
numsOne.push(...numsTwo);
console.log(numsOne);

//8
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log((n1.concat(n2)).length * Math.max(...n1));