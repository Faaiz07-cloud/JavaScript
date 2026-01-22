
/*
==================================================
                LOOPS
==================================================
*/

/*
-------------------------
        FOR LOOP
-------------------------
*/

// Print numbers from 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Print "Hello World" 5 times
// for (let i = 1; i <= 5; i++) {
//     console.log("Hello World");
// }

// Calculate sum of numbers from 1 to 5
// sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum = sum + i;
// }
// console.log(sum);


/*
-------------------------
       WHILE LOOP
-------------------------
*/

// Print numbers from 1 to 10
// i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// Calculate sum of numbers from 1 to 10
// i = 1;
// sum = 0;
// while (i <= 10) {
//     sum = sum + i;
//     i++;
// }
// console.log(sum);


/*
-------------------------
     DO WHILE LOOP
-------------------------
*/

// Executes at least once even if condition is false
// let i = 20;
// do {
//     console.log("Faaiz Gul");
//     i++;
// } while (i <= 10);


/*
-------------------------
        FOR OF LOOP
-------------------------
Special loop for iterating over strings and arrays
*/

// let str = "Faaiz Gul";
// length = 0;

// for (let i of str) {
//     console.log("i =", i);
//     length = length + 1;
// }

// console.log(length);


/*
-------------------------
        FOR IN LOOP
-------------------------
Used to iterate over object keys
*/

// let student = {
//     Name: "Ravi Kumar",
//     Age: 27,
//     Profession: "Custom's Officer",
//     Salary: 245000.00,
//     Is_active: true
// };

// for (let key in student) {
//     console.log(key, "=", student[key]);
// }


/*
-------------------------
   EVEN NUMBERS (0–100)
-------------------------
*/

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


/*
-------------------------
     NUMBER GUESS GAME
-------------------------
*/

// let num = 33;
// let user_input = prompt("Guess a Number...");

// while (user_input != num) {
//     user_input = prompt("Wrong! Guess a Number...");
// }

// console.log("You Win");