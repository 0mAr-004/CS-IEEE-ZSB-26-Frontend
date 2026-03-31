//1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let word = mix.map(function (ele) {
        return isNaN(ele) ? ele : "";
        }).reduce(function (acc, ele, arr) {
            return `${acc}${ele}`;
        })
    console.log(word);

//2
let mystring = "EElllzzzzzzzeroo";

let result = mystring.split("").filter(function (ele, index, arr) {
    return arr.indexOf(ele) === index;
    })
    .join("");

console.log(result);

//3
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let res = myArray.reduce(function (acc, ele) {
    return acc.concat(ele);
    }, []).join("");
console.log(res);

//4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let res2 = numsAndStrings.filter(function (acc, ele, arr) {
    return !isNaN(acc) ? acc : "";
    }).map(function (ele) {
        return -ele;
    })
    console.log(res2);

//5
let nums = [2, 12, 11, 5, 10, 1, 99];
let newnum = nums.reduce(function (acc, ele, arr) {
    return ele % 2 === 0 ? acc * ele : acc + ele;
    }, 1);

console.log(newnum);
