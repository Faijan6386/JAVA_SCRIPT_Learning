
// Creating a object in JS Two Way
//const first = new object() // Singleton Object
// const Second = {} // Non  Singleton Object Mostly Used


const Intro = {
    // Note Key can be Integer like 0, 1,2
    // Key:  Value   Here it considered key,  name as String By Default
    name: "Faijan",  
    // Object of Object
    UserEmail: {
        email: "fak66783@google.com",
        UserAddress: {
            Address: "Gorakhpur"
        }
    }
};

// console.log(Object.keys(Intro.UserEmail.UserAddress));  // it will access keys
// console.log(Object.values(Intro.UserEmail.UserAddress));  // it will access Values


// Combination of two Arrays
const a = {1: "a", 2: "b"}
const b = {3: "c", 4: "d"}

const c = {a, b}  // this will create an array but not a single array. it will keep array a and array b in an array as it is like  {{{ }}}
// console.log(c);

const correct_arr = Object.assign({},a,b)  // it will form an array and this is the correct way to combine arrays
// {} this is target array and it will store all element
// a and b is source

const m = Object.assign(a,b) // it will also form an array like the above but it will store all the value in object a
// console.log(correct_arr);
// console.log(m);

// spread method to make combination of array and it is mostly used 
const d = {...a, ...b}
// console.log(d);

// jab database se Value aaye tab
// Property
// 1 Keys find karna hai  Object.keys(variable_name)


// Object Creation and adding Value in it
// In obeject always Value added in Pair as Key: value

let person = {
  name: "Faijan",
  age: 21,
  "full name": "Faijan Khan",
  isAdmin: true
};

// console.log(Object.keys(person));  // it will print all keys 
// console.log(Object.values(person));  // it will print all values 
// console.log(Object.entries(person)); // it will make array of key and Value in pair

// checking Value is Present or not
// console.log(person.hasOwnProperty("name"));  // true
// console.log(person.hasOwnProperty("Rahul")); // false








