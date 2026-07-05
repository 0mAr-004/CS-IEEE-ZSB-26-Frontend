//1
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipre=/\d{4}:\w{2}\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/;
console.log(ipre.test(ip));

//2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialre=/Os\d*O/ig
console.log(specialNames.match(specialre));

//3
let phone = "+(995)-123 (4567)";
let phonere=/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;
console.log(phone.match(phonere));

//4
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

        // https? => http or https if s is exists
        // : => :
        // \/\/ => //

        // (?:[-\w]+\.)? => optional subdomain (www. or mail.)

        // [-\w]+ =>  letters or digits ot dashs

        // \. => dot (.)
        //
        // ([-\w]+) => domain name (capturing group)
        //
        // \. => dot (.)
        //
        // \w+ => (com / net / org)
        //
        // (?:\.\w+)? =>  ( .eg / .uk)
        // مثال: google.com.eg
        //
        // \/? => slash (/)
        //
        // .* => (path / query / parameters)
        //
         // i => case insensitive (capital or small)

//5
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re =/\d{2}\s*(\/|\-|\s)\s*\d{2}\s*(\/|\-|\s)\s*(\d{2}|\d{4})/ig;

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"  

//6
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /^(https?:\/\/)?(www\.)?\w+\.\w+(:\d+)?(\/.*)?$/ig;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));