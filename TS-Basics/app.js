"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numResults = [];
const textResults = [];
function add(num1, num2) {
    // check both numbers, then pass
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    // check both strings, then pass
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    // number, string or any types, then typecast to number and add
    return +num1 + +num2;
}
//function printResult(resultObj: Result) {     // Alias & Interface both can be used in object
function printResult(resultObj) {
    console.log(resultObj.val);
    console.log(resultObj.timestamp);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2); // type casting to number
    numResults.push(result);
    const resultString = add(num1, num2); // string
    textResults.push(resultString);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, textResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
