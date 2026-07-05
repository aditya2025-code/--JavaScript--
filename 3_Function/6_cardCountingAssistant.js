/*
1.You should use let to declare a global variable named count and set it to 0.
2.You should have a function called cardCounter.
3.The cardCounter function should receive a card parameter which can either be a number or string.
4.For values between 2 to 10, the card parameter will be a number.
5.For all other values, the card parameter will be a string.
7.6.The cardCounter function should modify the global count variable based on certain criteria.
8.The global count variable should be increased by 1 for the cards 2, 3,4, 5, or 6
9.The global count variable should remain unchanged for the cards 7, 8, 9.
10.The global count variable should be decreased by 1 for the cards 10, "J", "Q", "K", "A"
11.The cardCounter function should return a string with current count and the string Bet if the count is positive.
12.The cardCounter function should return a string with current count and the string Hold if the count is less than or equal to 0.
13.In the function output, the current count and the player's decision (Bet or Hold) should be separated by a space. For example, -3 Hold.
*/


let count = 0;

function cardCounter(card) {

    if (card >= 2 && card <= 6) {
        count++;
    } else {
        if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A")
            count--;
    }
    if (count > 0) return count + " Bet";
    else return count + " Hold";
}

console.log(cardCounter(6));