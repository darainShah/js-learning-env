//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Rohit"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Darain",
            lastname: "Shahedi"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
const obj3 = Object.assign(obj1, obj2)
//console.log(obj3);

const obj4 = {...obj1, ...obj2};
//console.log(obj4);

//console.log(tinderUser)

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {

    coursename: "js in hindi",
    price: 999,
    courseInstructor: "Hitesh"

}

//console.log(course.courseInstructor)

//const {courseInstructor} = course;
//console.log(courseInstructor)

const {courseInstructor: instructor} = course;    // destructuring
//console.log(instructor);


// JSON

// Api in objects str
////{
   // name: "Darain Shahedi",
    //course: "Integerated master of science mathematics",
    //duration: "5 years",
    //id: "I21ma010"
//}

[
    {},
    {},
    {}
]


