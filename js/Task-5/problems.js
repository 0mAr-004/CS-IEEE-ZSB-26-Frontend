//leap year
function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("This year " + year + " is a Leap Year");
    } else {
        console.log("This year " + year + " is not a Leap Year");
    }
}
let year = prompt("Enter a year:");
year = Number(year);
isLeap(year);

//absolute sum
function AbsoluteSum(...arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            sum += -arr[i];
        } else {
            sum += arr[i];
        }
    }
    return sum;
}

let items = prompt("Enter numbers : ");
let array = items.split(" ").map(Number);
console.log("Absolute Sum = " + AbsoluteSum(...array));

//title
function possibleBonus(a, b) {
    if (b > a && (b - a) <= 6) {
        return true;
    }
    else {
        return false;
    }
}

let playerPos = Number(prompt("Enter your tile position:"));
let friendPos = Number(prompt("Enter your friend's tile position:"));

let bool = possibleBonus(playerPos, friendPos);

if (bool) {
    console.log("Bonus is possible!");
} else {
    console.log("Bonus is NOT possible!");
}

//omni
function Omni(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].includes(value)) {
            return false;
        }
    }
    return true;
}
console.log(Omni([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); 
console.log(Omni([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); 
console.log(Omni([[5], [5], [5], [6, 5]], 5));          
console.log(Omni([[5], [5], [5], [6, 5]], 6));  

//square
function Square(num) {
    let arr = num.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr.join('');
}
console.log(Square(9119));
console.log(Square(2483));
console.log(Square(3212));