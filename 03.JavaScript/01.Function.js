// Method to write the funncton

// Methood :- 1

function sayMyName(){
    console.log("A");
    console.log("I");
    console.log("C");
    console.log("H");
    console.log("C");
    console.log("H");
    console.log("H");
    console.log("I");
    console.log("K");
}
// sayMyName()


// Methood :- 2 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 5)


// Methood :- 3 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
   
}
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


 // Methood :- 4  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
 function addTwoNumbers(number1, number2){

    return number1 + number2

}
const Result = addTwoNumbers(3, 5)

//  console.log("Result: ", Result);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function loginUserMessage(){
    if(!username){ // ! is used for not and this can also be written as i.e; (username===undefined)
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in` // String interpulation i.e: backstick (` `) and use ${ variable name}to write the variable name
}

loginUserMessage("Aichchhik") // this say only return the value.

// console.log(loginUserMessage("Aichchhik"))  // this say return the value and print the value because we use console.log() that help to print or show the output



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));