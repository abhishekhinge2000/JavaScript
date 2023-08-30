const name = "hitesh"
const repoCount = 50 

// console.log(name + repoCount + " value"); // hitesh50 value

console.log(`Hello my name is ${name}  And my repo count is ${repoCount}`); // Hello my name is hitesh And my repo count is 50

const gameName = new String ('hitesh-hc-com');

//console.log(gameName[0]); // h
//console.log(gameName.__proto__); // {}

//console.log(gameName.length); //13
//console.log(gameName.toUpperCase); //upercase
console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf('t')); //2

const newString = gameName.substring(0, 4);
console.log(newString); // hite

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // 

const newStringOne = "hitesh";

console.log(newStringOne); //hitesh
console.log(newStringOne.trim()); //hitesh

const url = "https: //hitesh.com/hitesh%20chaudhary";

//console.log(url.replace('%20', '-')); //https: //hitesh.com/hitesh-chaudhary

console.log(url.includes('sunder')); //false


console.log(gameName.split('-')); //[ 'hitesh', 'hc', 'com' ]





