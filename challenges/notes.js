// loops example

const arr = ["gfdh", "khjfd", "dfeh", "eyuid", 1, 2, 3, 4]

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
        console.log(arr[i]);
    }
}

// functions example

function myFunction() {
    console.log("hello world!");
}

myFunction();

// a different way of writing a function
const anotherFunction = function () {
    console.log("wassup!");
}

anotherFunction();

// another way of writing a function (arrow function)

const sugarCane = () => {
    console.log("i love sugar cane!");
}

sugarCane();

// objects and functions together

const myString = "Joat";

myString.replace("t","x"); // this doesn't change the string "joat" in myString, it only returns the string with "x" replacing "t" once!

console.log(myString);

const newName = myString.replace("t","x"); // assigning the function of replace() to a variable does change the string in 
                                            // myString as long as you now refer to the new variable newName instead of myString

console.log(newName);


// array methods example

str = "first code";

const result = str.toUpperCase().split(" "); // this changes the string "first code" in the str variable to all UPPERCASE letters and 
                                            // then the "split(" ")" method takes whatever argument passed in (a space in this case) and separate
                                            // the string "first code" into 2 different strings. Methods such as "toUpperCase()" and "split()"
                                            // can be used or chained together by using "."

console.log(result);

console.log(result.indexOf("FIRST")); // returns the index of the string "FIRST" in the result variable above 

// this can also be done in broken down steps instead of chaining in different mutiple methods in one go... example given below;

// remember the str variable still has the string "first code" that remains unchanged

const step1 = str.toUpperCase();
const step2 = step1.split(" ");
const step3 = step2.indexOf("FIRST");

console.log(step3)