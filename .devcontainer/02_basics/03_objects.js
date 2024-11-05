// Singleton

// Object Literals

// Object.create
const JsUser = {
    name: "Darain",
    "Full Name": "Darain Shahedi",
    age: 22,
    location: "Surat",
    email: "darain@google.com",
    isloggedin: false,
    lastLoginDays: ["Monday", "Sarurday"]
}

// How to access objects

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["Full Name"])

// overwrite objets
JsUser.email = "darain@openai.com"
// freeze wont change your object attribute 
Object.freeze(JsUser.name)

JsUser.greeting = function(){
    console.log("Hello, Js User!")
}

//console.log(JsUser.greeting)

JsUser.greetingTwo = function(){
console.log(`Hello Js User, ${this.name}, ${this.email}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());