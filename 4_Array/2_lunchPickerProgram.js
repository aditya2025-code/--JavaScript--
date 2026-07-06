/*
User Stories:

1.You should create a lunches variable and assign it an empty array that will be used to store lunch items.

2.You should create a function addLunchToEnd that takes an array as the first argument and a string as the second argument. The function should:

3.Add the string to the end of the array.
4.Log the string [Lunch Item] added to the end of the lunch menu. to the console, where [Lunch Item] is the string passed to the function.
5.Return the updated array.
6.You should create a function addLunchToStart that takes an array as the first argument and a string as the second argument. The function should:

7.Add the string to the start of the array.
8.Log the string [Lunch Item] added to the start of the lunch menu. to the console, where [Lunch Item] is the string passed to the function.
9.Return the updated array.
10.You should create a function removeLastLunch that takes an array as its argument. The function should:

11.Remove the last element from the array.
12.If the removal is successful, log the string [Lunch Item] removed from the end of the lunch menu. to the console, where [Lunch Item] is the element removed from the array.
13.If the array is empty, log the string "No lunches to remove." to the console.
14.Return the updated array.
15.You should create a function removeFirstLunch that takes an array as its argument. The function should:

16.Remove the first element from the array.
17.If the removal is successful, log the string [Lunch Item] removed from the start of the lunch menu. to the console, where [Lunch Item] is the element removed from the array.
18.If the array is empty, log the string "No lunches to remove." to the console.
19.Return the updated array.
20.You should create a function getRandomLunch that takes an array as its argument. The function should:

21.Select a random element from the array.
22.If successful, log the string Randomly selected lunch: [Lunch Item] to the console, where [Lunch Item] is a random element in the array.
23.If the array is empty, log the string "No lunches available." to the console.
24.You should create a function showLunchMenu that takes an array as its argument and:

25.If there are elements in the array, logs the string Menu items: [Lunch Item], [Lunch Item]... to the console, where each [Lunch item] is one of the elements in the array, in order.
26.If the array is empty, logs the string "The menu is empty." to the console.

Tests:

1. You should declare a variable lunches and assign it an empty array to store the lunch items.

2. You should define a function addLunchToEnd.

3. The function addLunchToEnd should have two parameters.

4. addLunchToEnd(lunches, "Tacos") should log the string "Tacos added to the end of the lunch menu." to the console.

5. addLunchToEnd(["Pizza", "Tacos"], "Burger") should return ["Pizza", "Tacos", "Burger"].

6. You should define a function addLunchToStart.

7. The function addLunchToStart should have two parameters.

8. addLunchToStart(lunches, "Sushi") should log the string "Sushi added to the start of the lunch menu." to the console.

9. addLunchToStart(["Burger", "Sushi"], "Pizza") should return ["Pizza", "Burger", "Sushi"].

10. You should define a function removeLastLunch.

11. The function removeLastLunch should have one parameter.

12. When the input array is empty, the function removeLastLunch should log the string "No lunches to remove." to the console.

13. removeLastLunch(["Stew", "Soup", "Toast"]) should log the string "Toast removed from the end of the lunch menu." to the console.

14. removeLastLunch(["Sushi", "Pizza", "Noodles"]) should return ["Sushi", "Pizza"].

15. You should define a function removeFirstLunch.

16. The function removeFirstLunch should have a single parameter.

17. When the input array is empty, the function removeFirstLunch should log the string "No lunches to remove." to the console.

18. removeFirstLunch(["Salad", "Eggs", "Cheese"]) should log the string "Salad removed from the start of the lunch menu." to the console.

19. removeFirstLunch(["Sushi", "Pizza", "Burger"]) should return ["Pizza", "Burger"].

20. addLunchToEnd, addLunchToStart, removeLastLunch, and removeFirstLunch should return the same array passed as an argument after updating it.

21. You should define a function getRandomLunch.

22. The function getRandomLunch should have a single parameter.

23. When the input array is empty, the function getRandomLunch should log the string "No lunches available." to the console.

24. When the input array is not empty, the function getRandomLunch should log a string in the format Randomly selected lunch: [Lunch Item] to the console.

25. The getRandomLunch function should not change the array passed to it as argument.

26. You should define a function showLunchMenu.

27. The function showLunchMenu should have a single parameter.

28. When the input array is empty, the function showLunchMenu should log the string "The menu is empty." to the console.

29. showLunchMenu(["Greens", "Corns", "Beans"]) should log "Menu items: Greens, Corns, Beans" to the console.

30. showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]) should log "Menu items: Pizza, Burger, Fries, Salad" to the console.
*/

const lunches = [];
function addLunchToEnd(arr, string) {
  arr.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return arr;
}
addLunchToEnd(lunches, "Tacos");
addLunchToEnd(["Pizza", "Tacos"], "Burger")
function addLunchToStart(arr, string) {
  arr.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return arr;
}
addLunchToStart(lunches, "Sushi");
addLunchToStart(["Burger", "Sushi"], "Pizza");
function removeLastLunch(arr) {
  const string = arr.pop();
  if (string == undefined)
    console.log("No lunches to remove.");
  else
    console.log(`${string} removed from the end of the lunch menu.`);
  return arr;
}
removeLastLunch(["Stew", "Soup", "Toast"]);
removeLastLunch(["Sushi", "Pizza", "Noodles"]);
function removeFirstLunch(arr) {
  const string = arr.shift();
  if (string == undefined)
    console.log("No lunches to remove.");
  else
    console.log(`${string} removed from the start of the lunch menu.`);
  return arr;
}
removeFirstLunch(["Salad", "Eggs", "Cheese"]);
removeFirstLunch(["Sushi", "Pizza", "Burger"]);
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
  }
  else {
    const string = arr[Math.floor(Math.random() * arr.length)];
    console.log(`Randomly selected lunch: ${string}`);
  }
}
function showLunchMenu(arr) {
  if (arr.length === 0)
    console.log("The menu is empty.");
  else {
    const menuString = arr.join(", ");
    console.log(`Menu items: ${menuString}`);
  }
}
showLunchMenu(["Greens", " Corns", " Beans"]);
showLunchMenu(["Pizza", " Burger", " Fries", " Salad"]);