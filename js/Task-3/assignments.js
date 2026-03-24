// ass1
    console.log(10 == "10");      // true
    console.log(10 === 10);       // true
    console.log(10 != "20");      // true
    console.log(10 !== 20);       // true
    console.log(10 > 5);          // true
    console.log(10 >= 10);        // true
    console.log(10 < 20);         // true
    console.log(10 <= 10);        // true

//ass2
    let x = 10;
    let y = 20;
    console.log(x < y);      // true
    console.log(x != y);     // true
    console.log(x <= y);     // true
    console.log(x > y);      // true    
 
//ass3
    let a = 10;
    let b = 20;
    let c = 30;
    console.log(a < b && b < c);     // true
    console.log(a !== c && b !== a); // true
    console.log(a < c && c > b);     // true
    console.log(a != b && b != c);   // true    

//task
    let day="weekend";
        switch (day) {
            case "Weekday":
                console.log("It's a regular workday. Time to hustle!");
                break;

            case "Weekend":
                console.log("It's the weekend! Time to relax and unwind.");
                break;

            case "Holiday":
                console.log("Enjoy your holiday! Take a break.");
                break;

            case "Vacation":
                console.log("You're on vacation! Make the most of it.");
                break;

            default:
                console.log("Not sure about this day type.");
        }