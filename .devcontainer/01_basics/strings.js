const name = "Darain";

let repocount = 1000;

// console.log(name + repocount + "value");
// Donot use the above method to write in modern days above

console.log(`Hello My name is ${name} and my repocount is ${repocount}`); // string interpolation use in modern days

// ** String is not an array it is an object **

const gameName = new String('hellodarain');
console.log(gameName[0]);          // h
console.log(gameName.__proto__);   // {}

console.log(gameName.length);   //11

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));   //l

const newgame = gameName.substring(0,6);
console.log(newgame); // hellod

const anothergame = gameName.slice(-15,5);
console.log(anothergame); //

const newstringone = "    Darain.   shahedi.    ";
console.log(newstringone);
console.log(newstringone.trim());



const url = "https://www.google.com/darainshahedi%20admin/userlogin/account/webpage";

console.log(url.replace('%',' '));  // https://www.google.com/darainshahedi 20admin/userlogin/account/webpage
console.log(url.includes("darain"));  //true

console.log(url.split('/'));

const number = 100;
const balance = new Number(200);

console.log(number);
console.log(balance);

console.log(balance.toFixed(2)); // 200.00

const othernumber = 23.3423
console.log(othernumber.toPrecision(2)) // 23

const hundred = 100000000
console.log(hundred.toLocaleString('en-IN')) // 10,00,00,000



// +++++++++++++++++  MATH +++++++++++++++++++++++++++++++++++

console.log(Math)

console.log(Math.abs(-4.2))
console.log(Math.round(4.2))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.sqrt(4))
console.log(Math.PI)
console.log(Math.min(4,3,2,5,0))

console.log(Math.random())
console.log(Math.floor((Math.random()*10) + 1))

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min)
