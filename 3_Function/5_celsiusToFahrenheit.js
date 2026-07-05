/*
fahrenheit = celsius * (9/5) + 32
1. You should create a function named convertCtoF.
2. convertCtoF should take a single parameter.
3. convertCtoF(0) should return a number.
4. convertCtoF(-30) should return a value of -22.
5. convertCtoF(-10) should return a value of 14.
6. convertCtoF(0) should return a value of 32.
7. convertCtoF(20) should return a value of 68.
8. convertCtoF(30) should return a value of 86.

*/

function convertCtoF(temperature){
    return temperature * (9/5) + 32;
}

console.log(convertCtoF(0));
console.log(convertCtoF(-30));
console.log(convertCtoF(-10));
console.log(convertCtoF(20));
console.log(convertCtoF(30));
