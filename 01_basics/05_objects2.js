//const tinderUser = new Object() =>  this is singleton  
const tinderUser = {}             // this is not singleton

tinderUser.id = "123abc"
tinderUser.name ="sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);


// objects and objects 


const regularUser ={
      email:"some@gmail.com",
      fullname:{
        userfullname:{
            firstname:"umar",
            lastname: "hayat"
        }
      }
}
console.log(regularUser.fullname.userfullname.last);

// merge objects

const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"a",
    4:"b",
}
//const obj3 = {obj1,obj2}
//const obj3 =Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2} // spride method => this method is mostly used


console.log(obj3);


// array of objects 


const users =[
    {
        id:1,
        email:"h@gmail.com"
    },
     {
        id:1,
        email:"h@gmail.com"
    },
     {
        id:1,
        email:"h@gmail.com"
    }
]

users[1].email
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//console.log(users);