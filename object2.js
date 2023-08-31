//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sunny";
tinderUser.isLoggedIn = false

//console.log(tinderUser); //{ id: '123abc', name: 'Sunny', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Abhishek",
            lastname:"Hinge"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);//Abhishek

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

//const obj3 = {obj1, obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//const obj3 = Object.assign({},obj1,obj2,obj4) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3);

const users = [
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    }
]

user[1].email
//console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

 //console.log(tinderUser.hasOwnProperty('isLoggedIn'));



