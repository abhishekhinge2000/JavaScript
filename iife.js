//Immediately Invoked function Expression (iife)

(function chai(){
    //named iife
     console.log(`db connection`)//db connection
 })();

 ((name)=>{
    console.log(`db connection to ${name}`);//db connection to Abhishek
 }) ('Abhishek')