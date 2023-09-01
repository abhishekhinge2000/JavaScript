function sayMyname(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");
}

//sayMyname() //A
              //B
              //H
              //I
              //S
              //H
              //E
              //K

//function addTwoNumbers(number1, number2){
    //console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2){
    //let result = number1 + number2
   // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

//console.log("Result:", result); //8

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in `
}

console.log(loginUserMessage("abhishek"))
console.log(loginUserMessage("abhishek"))
