const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

function add(num1: number | string, num2: number | string) {
    // check both numbers, then pass
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } 
    // check both strings, then pass
    else if(typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    // number, string or any types, then typecast to number and add
    return +num1 +  +num2;
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);      // type casting to number
    const resultString = add(num1, num2);  // string
    console.log(result);
    console.log(resultString);
});