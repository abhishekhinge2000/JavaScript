let myYoutubename = "The Abhi";

let anothername = myYoutubename;
anothername = "The Abhihinge";

console.log(myYoutubename); //The Abhi
console.log(anothername); //The Abhihinge

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"

}

let userTwo = userOne
    userTwo.email = "Abhi@google.com"

    console.log(userOne.email); //Abhi@google.com
    console.log(userTwo.email); //Abhi@google.com


