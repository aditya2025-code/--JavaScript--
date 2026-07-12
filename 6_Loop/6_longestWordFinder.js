function findLongestWordLength(str) {
    const words = str.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }

    return maxLength;
}

/*
Build a Longest Word Finder App
In this lab, you will build a function that returns the length of the longest word in the provided sentence.

For example, in the sentence "The quick brown fox jumped over the lazy dog", the longest word is "jumped", which has a length of 6.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named findLongestWordLength that takes a string as an argument.
The function should return the length of the longest word in the string.
Tests:
1. You should create a function named findLongestWordLength.
2. findLongestWordLength should have a single parameter.
3. findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
4. findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
5. findLongestWordLength("May the force be with you") should return 5.
6. findLongestWordLength("Google do a barrel roll") should return 6.
7. findLongestWordLength("Googling do a barrel roll") should return 8.
8. findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
9. findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.

*/