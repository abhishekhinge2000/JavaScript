const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);//{
                         // username: 'hitesh',
                         // price: 999,
                         // welcomeMessage: [Function: welcomeMessage]
                         // }
                         // sam,welcome to website
                         // {
                         // username: 'sam',
                         // price: 999,
                         // welcomeMessage: [Function: welcomeMessage]
                         // }
    }
}

//user.welcomeMessage()//hitesh,welcome to website
//user.username = "sam"
//user.welcomeMessage()//sam,welcome to website


//console.log(this);//{}

//function chai() {
//  let username = "hitesh"
//  console.log(this.username); //undefined
//}

//chai()

//const chai = function (){
//    let username = "hitesh"
//    console.log(this.username);//undefined
//}

const chai = () => {
    let username = "hitesh"
    console.log(this);//{}
}

//chai()

//const addTwo = (num1, num2)=>{
 //   return num1 + num2
//}

//const addTwo = (num1,num2)=> num1 + num2
//const addTwo =(num1, num2)=>(num1 + num2)

//console.log(addTwo(3,7));//10

//const addTwo = (num1, num2)=> ({username: "Abhishek"})
//console.log(addTwo(3, 7)); //{ username: 'Abhishek' }

//const myArray = [2, 5, 3, 7, 8]

//myArray.forEach()

