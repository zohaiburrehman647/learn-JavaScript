/*  Objects

 create objects have two methods
method1 => singleton => singleton which is created by constructor
method2 => literal   => is below 
*/

const mySym =Symbol("key1")

const JsUser =  {
      name   : "umar",
      "fullname":"umar hayat",
      age    : 23,
      [mySym]: "key1",
      location : "peshawar",
      email  :"umar@google.com",
      LastlogginDays : ["monday","saturday"],
      isLoggedIN : false,


}

// Access objects

/*
console.log(JsUser.email);    // method1 
console.log(JsUser["email"]); // method2 

console.log(JsUser.fullname); 
console.log(JsUser["fullname"]);
console.log(JsUser[mySym]);
*/

// changes valves 

JsUser.email="umar@chatgpt.com"
// objects freeze 
//Object.freeze(JsUser)
JsUser.email="umar@microsoft.com"
console.log(JsUser);



// Add fustions in objects

JsUser.greeting = function () {
    console.log("hello js user");
}

JsUser.greetingTwo = function () {
    console.log(`hello js user,${this.name }`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());