// packaging of code and reuse when you need
// Without Function
// console.log("F");
// console.log("A");
// console.log("I");
// console.log("J");
// console.log("A");
// console.log("N");

// what I am doing writing a code again and again and it will increase code redundency and readability


// +++++++++++++++++++++++++++++++++++++ Function ++++++++++++++++++++++++++++
// function Key Word    Function Name
function sayMyNmae(){
    console.log("F");
    console.log("A");
    console.log("I");
    console.log("J");
    console.log("A");
    console.log("N");
}
// function Callingconsole.log("A");
// sayMyNmae it tells a funstion exist but not execute
// sayMyNmae()


// Adding of Numbers
//(number1, number2 ) // it is called Parameter
// function addTwoNumbers(Number1, Number2){
//     console.log(Number1 + Number2);
// }

// (a,b) a and b is called Arguments
// addTwoNumbers(3,4)  // addn karega do number ka
// addTwoNumbers(3,"4") // concatenate lar dega
// addTwoNumbers(3,null)  // null ko 0 consider akrega aur o/p 3 dega


// function addTwoNumbers(Number1, Number2){
//     console.log(Number1 + Number2);
// }
// const result = addTwoNumbers(3,5)
// console.log("Result: ", result);   // Result : Undefined kyubki koi Value pass hi nhi ki gyi 

function addTwoNumbers(Number1, Number2){
    // 1st Method
    // let result= Number1 + Number2;
    // return result;  
    // console.log("Fiajan);  // return ke baad kuch bhi likh do to kaam nhi kareg
    
    // 2nd Method

    return Number1 + Number2;
}

// Note:  Function ke andar ka result aur Bahar ka result diffrent hain
const result = addTwoNumbers(3,5)
// console.log("Result: ", result);   // Result : 8 


// 2nd Way to define Function
function loginUser(username){
    if(username===undefined){
        console.log("Plz enter a user Name");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUser( ));  // agar as an argument koi kuch pass nhi kiya to kya
                                  // o/p aayega : Undefined just logged in



function loginUser(username = "Faijan"){  // it will not print Faijan
    if(username===undefined){
        console.log("Plz enter a user Name");
        return
    }
    return `${username} just logged in`
}
// Override ho rha hai   Faijan ---> Rahul
// console.log(loginUser( "Rahul"));


function calcPrice(...num){  // ...paramneter ye infinite number ko store kar sakta hai seperate
    return num
}
// console.log(calcPrice(200, 1000, 400))


function calcPrice(val1 ,val2 ,...num){  // ...paramneter ye infinite number ko store kar sakta hai seperate
    return num
}
// console.log(calcPrice(200, 1000, 400, 900))  // val1 =200 , val2 1000 and restall in ...Parameter num1

// function and Object

// object
const user = {
    username : "Faijan",
    price : 399  // But where is Problem 
                // if we write prices in place of prices then price is undefined
}

// function
function handleJob(anyobject){
    console.log(`useanme is ${anyobject.username} and price is ${anyobject.price}`);
}
// 1st method to acces object by Using Function Call
// handleJob(user)

// 2nd Method to use object by passing Value
// handleJob({
//     username : "Faijan",  
//     price : 399
// })

 
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]  // yahan Use karna hai jo function me as a Parameter pass kiye ho

}

// 1st Method to access to element of arr by Calling Function
// console.log(returnSecondValue(myNewArray));

// 2nd Method By Passing Value
console.log(returnSecondValue([200,400,100, 600])); 

