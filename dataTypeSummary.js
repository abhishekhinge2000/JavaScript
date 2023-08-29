// DataTypes 
// there are two types of datatypes 
// primitive and reference(non-primitive)


// 1) Primitive
// a) String => string
// b) Number => number
// c) null   => object
// d) Boolean=> boolean
// e) Undefined=> undefined
// f) Symbol   => symbol
// g) BigInt   => bigInt

const score = 100;
const scoreValue =100.3;

const isLoggedIn = false;
const outSideTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // faise

//const bigNumber =123456n


// 2) Reference (non-primitive)
  // a)Array  => object
  // b)Object => obect
  // c)Function => function

  const heros = ["shaktiman", " abhishek", "pranay" ];

  let myObj = {
    name : "Abhi",
    age : 23
  }
  
  const myFunction = function() {
    console.log("Hello World");
  }

  console.log(typeof bigNumber);






