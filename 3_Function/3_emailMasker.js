/*
1. You should define a function named maskEmail.
2. The maskEmail function should take a string, email as an argument.
3. Outside the function, you should have an email variable.
4. You should assign a valid email address to your email variable.
5. maskEmail("apple.pie@example.com") should return "a*******e@example.com".
6. maskEmail("freecodecamp@example.com") should return "f**********p@example.com".
7. maskEmail("info@test.dev") should return "i**o@test.dev".
8. maskEmail("user@domain.org") should return "u**r@domain.org".
9. Your maskEmail should produce the correct result.
10. You should log the output of calling maskEmail with email as argument.
*/

function maskEmail(email) {

    let atIndex = email.indexOf("@");
    let userName = email.slice(0,atIndex);
    let domain = email.slice(atIndex);
    let firstChar = userName.slice(0,1);
    let lastChar = userName.slice(-1);
    let maskLenth = userName.length - 2;
    let astriks = "*".repeat(maskLenth);
    
    return firstChar + astriks + lastChar + domain;
}

let email = "adi1020066002@gmail.com";
console.log(maskEmail(email));