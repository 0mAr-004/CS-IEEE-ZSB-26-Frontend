//ass1
let arr=[1,3,9,15,90];
let sum =0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}
console.log(sum/arr.length)

//ass2
let num=[1, 3, 9, 15, 90, 27, 64];
let max=num[0];
for(let i=1;i<num.length;i++){
    if(num[i]>max){
        max=num[i];
    }
}
console.log(max);