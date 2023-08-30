// ----------------------Number-------------------//

const score = 500;
//console.log(score);//500

const balance = new Number(100);
//console.log(balance);//[Number:100]

//console.log(balance.toString().length);//3
//console.log(balance.toFixed(1));//100.0
//console.log(balance.toFixed(2));//100.00

const otherNumber = 123.8966;
//console.log(otherNumber.toPrecision(4));//123.9

const hundreds = 10000000;
//console.log(hundreds.toLocaleString('en-IN'));//1,00,00,000


//-------------------MATH----------------//


// console.log(Math);//object[Math]{}
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.2));//5
// console.log(Math.floor(4.9));//4
// console.log(Math.min(4, 3, 6, 8));//3
// console.log(Math.max(4, 3, 6, 8));//8


//console.log(Math.random());//0.8357305548879161
//console.log((Math.random()*10)+1);//2.9674114295359124
//console.log(Math.floor(Math.random()*10)+1);//4

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min)) + min);














