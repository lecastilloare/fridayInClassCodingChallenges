"use strict";

// 1) Create 3 arrays, One with all String data types, one with all Numbers data types, and one with Boolean data types.  You will need to add sample data to each array (don't over think this). Each array should have at least 5 elements.. 

// 2) Next create a function that can take any of these arrays as a parameter and add an additional String, Number, or Boolean depending on which array was passed in. 

// Hint: You will need an array method to add new items to the end of the array. You will also need conditionals set up to check the item at index 0 so you know what array was passed into the function.  You can use the typeof method to determine what type of data is in the array.  



const stringArr = ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"];

const numberArr = [10, 20, 30, 40, 50]

const booleanArr = [true, false, true, false, true]


const addToArry = function (array) {
    if (typeof array[0] === "string") {
        const newValue = "Value 6";
        array.push(newValue);
        return newValue;

    } else if (typeof array[0] === "number") {
        const newValue = 60;
        array.push(newValue);
        return newValue;

    } else {
        const newValue = true;
        array.push(newValue);
        return newValue;
    }
}

addToArry(stringArr);
addToArry(numberArr);
addToArry(booleanArr);


console.log(stringArr);
console.log(numberArr);
console.log(booleanArr);
