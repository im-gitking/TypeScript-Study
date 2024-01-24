var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
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
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2); // type casting to number
    var resultString = add(num1, num2); // string
    console.log(result);
    console.log(resultString);
});
