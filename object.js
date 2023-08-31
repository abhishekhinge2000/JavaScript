//Singleton

//object.create

//object literals


const mySym = Symbol("key1");

const JsUser = {
    name: "Abhishek",
    "full name": "Abhishek Hinge",
    [mySym]: "mykey1",
    age : 18,
    location : "Hinganghat",
    email: "abhishek@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

//console.log(JsUser.email);//abhishek@google.com
//console.log(JsUser["email"]);//abhishek@google.com
//console.log(JsUser["full name"]);//Abhishek Hinge
//console.log(JsUser[mySym]);//mykey1


JsUser.email = "abhishek@chatgpt.com";
//Object.freeze(JsUser);
JsUser.email = "abhishek@microsoft.com";
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}

JsUser.greeting = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());//Hello Js User, Abhishek



