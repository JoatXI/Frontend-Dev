const numberVariable = 0; // Challenge 1

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable); //	You can't change a const variable



const firstNumber = 20; // Challenge 2
const secondNumber = "20";
const theResult = firstNumber === secondNumber;

console.log(theResult);
//End Snippet 1

const firstNumb = 20;
const secondNumb = "20";
const theResults = firstNumb == secondNumb;

console.log(theResults);

// doesn't work because of the use of === which returns false as they are different data types(number, string) 



const expression1 = !(((100 % 50) < (100 / 50)) && 300 + 5 === 305); // Challenge 3
// it evaluates to false



const myObj = { // Challenge 4
    prop1: "first value",
    prop2: 20
};

const myArray = [40, 50, 2];

const result = myObj.prop2 === (myArray[0] / myArray[2]);
// result evaluates to true.



const myObje = { // Challenge 5
    nested0bject1: {
        price: 100,
        quantity: 5
    },
    nested0bject2: {
        price: 150,
        quantity: 2
    }
};

const myArray2 = [myObje.nested0bject1, myObje.nested0bject2];

const result2 = (myArray2[0].price * myArray2[0].quantity) > (myArray2[1].price * myArray2[1].quantity)

// result returns true as nestedObject1.price(100) x 5 == 500 which is greater than nestedObject2.price(150) x 2 which gives "300"