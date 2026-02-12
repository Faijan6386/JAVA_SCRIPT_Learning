// Destructuring of Object

// const {jis key ka karna hao} = object ka name
const course = {
    coursename : "Java Script",
    price : "999",
    courseInstructor : "Faijan Khan"
}

const {price} = course
// console.log(price);


// changing name of key 
// {old Name : new Name}
const {courseInstructor : CI} = course
// console.log(CI);


// ++++++++++++++++++++++++++++ JSON (Java Script Notation) ++++++++++++++++++++++++++

// key and Value both are storing in String

// API in form of Object usually it used
// {
//     "name " : "Faijan Khan",
//     "coursename" : "JS",
//     "price" : 100
// }


// API in format of Array
// {
//     {},
//     {},
//     {}
// }