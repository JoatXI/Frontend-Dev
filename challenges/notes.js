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