// task 1
var a= 10;
var b=3;
console.log(a+b,a-b,a*b,a/b,a%b)

// task2 
let result=10+5*2;
console.log(result);
result=(10+5)*2;
console.log(result);

// task3
let points=10;
points++;
console.log(points);
points--;
console.log(points);
points *=3;
console.log(points);

// task4
numbers=[5, 9, 1, 12, 7];
let min =numbers[0]
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
};
console.log(min);
let max= Math.max(...numbers);  
console.log(max);

// task5
let num=4.7;
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

// task6
console.log(Math.pow(5, 3)); 
console.log(Math.sqrt(64));

// task7
let random = Math.random() * 10;
console.log(random);

// task8
let text = ' hello JavaScript ';
console.log(text.length);
console.log(text.trim());
console.log(text.toUpperCase());
console.log(text.trim().length);

// task9
let sentence = 'I love JavaScript and JavaScript is amazing';
console.log(sentence.indexOf('JavaScript'));
console.log(sentence.lastIndexOf('JavaScript'));

// task10
let msg = 'Hello World'
console.log(msg.startsWith('Hello'));

// task11
let text2 = 'I like cats';
console.log(text2.replace('cats', 'dogs'));

// task12
let word = 'JavaScript';
console.log(word.substring(0, 4));