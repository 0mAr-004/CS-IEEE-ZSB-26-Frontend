//problem1
function trianglearea(base,height){
    return 0.5*base*height

}

//problem2
 function addUp(num){
    let sum=0;
    while (num!=0){
        sum+=num
        num-=1;
    }
    return sum;
 }



//problem 3,4
function matchhouse(steps){
    if(steps==0){
        return 0;
    }
    return 6+(steps-1)*5;

}

//problem 5
function sevenboom(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toString().includes("7")) {
            return "Boom!";
        }
    }    
    return "there is no 7 in array";
}    


//Tasks
//1
user={
    name:"elzero",
    age:38,
    country:"egypt",
    fullDetails: function (){
        return "my name is"+user.name+", my age is"+user.age+", my country is "+user.country; 
    }

}

console.log(user.name); // Elzero
console.log(user.age); // 38
console.log(user.country); // Egypt
console.log(user.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

//2
let objMethodOne = {
  property: "Method One"
};

let objMethodTwo = new Object();
objMethodTwo.property = "Method Two";

let objMethodThree = Object.create({});
objMethodThree.property = "Method Three";

let objMethodFour = Object.assign({}, { property: "Method Four" });

console.log(objMethodOne.property);   // Method One
console.log(objMethodTwo.property);   // Method Two
console.log(objMethodThree.property); // Method Three
console.log(objMethodFour.property);  // Method Four

//3
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({}, { a }, threeNums, twoNums);

console.log(finalObject);