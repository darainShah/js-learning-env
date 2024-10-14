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

c