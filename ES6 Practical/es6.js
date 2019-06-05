// Write a function that capitalizes the first letter of each string argument it receives.  
// 	Function arguments: 'hello', 'there', 'ES', 6
// 	Output: 'Hello', 'There', 'ES'

const practiceArray = ['hello', 'there', 'ES', 6];
const onlyStringArray = practiceArray.filter(function (str) {
    if ((typeof str) === 'string') {
        return true;

    }
    return false;
});
function capFirstLetter(onlyStringArray) {
    const result = onlyStringArray
        .map(function (elem) {
            const [firstLetter, ...rest] = elem
            return firstLetter.toUpperCase() + rest.join('')
        })
    return result
}
console.log(capFirstLetter(onlyStringArray));

// Write a function that calculates sale tax that should be paid for the product of the given price.
// Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: 120
// 	Output: 24

const sum = 120;
fromMyPocketToCountry = (sum) => {
    return sum * 0.2;
}
console.log(fromMyPocketToCountry(sum));

// Write a function that increases each element of the given array by the given value.
// If the value is omitted, increase each element of the array by 1.  
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]

const inputArr = [4, 6, 11, -9, 2.1];
const value = 2
function addition() {
    const outputArr = inputArr.map(function (elem) {
        return elem + value;
    })
    return outputArr
}
console.log(addition(inputArr));

// Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]

const inputicArr = [6, 11, 9, 0, 3];
onlyEvenNumbers = (input) => {
    const outputArr = input.filter(function (elem) {
        if (elem % 2 === 0) {
            return true;
        }
    })
    return outputArr;
}
console.log(onlyEvenNumbers(inputicArr));

// Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// 	Output: ['babel.js, 'JS standard'];

const utatata = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];

