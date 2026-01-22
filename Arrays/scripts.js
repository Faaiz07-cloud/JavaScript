console.log("Arrays Script Loaded");
/*
-------------------------
        ARRAYS
-------------------------
*/

// Array = collection of items (linear data structure)

/*
// Basic array
let marks = [22, 34, 54, 23, 45];

console.log(marks);              // Poora array print karega
console.log(marks.length);       // Array ki length batayega
console.log(typeof marks);       // Type check (object hota hai)

// Accessing array elements
console.log(marks[2]);           // Index 2 ka element (54)

// Updating array value
marks[1] = 333;                  // Index 1 ki value change
console.log(marks);

// Adding value at specific index
marks[5] = 444;                  // Naya element add
console.log(marks);
*/


/*
-------------------------
      ARRAY LOOPS
-------------------------
*/

/*
let heroes = ["Spiderman", "Superman", "Ironman"];

// for...in loop (index ke through)
for (let i in heroes) {
    console.log(heroes[i]);      // Value print karega
}

// Normal for loop
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

// for...of loop (direct value)
for (let hero of heroes) {
    console.log(hero);
}
*/


/*
-------------------------
   ARRAY EXAMPLE 1
   (Sum & Average)
-------------------------
*/

/*
let marks2 = [42, 54, 24, 53, 85];
let sum = 0;

// Sum calculate karna
for (let i of marks2) {
    sum = sum + i;
}

console.log(sum);                // Total sum

let avg = sum / marks2.length;   // Average
console.log(avg);
*/


/*
-------------------------
   ARRAY EXAMPLE 2
   (10% Discount)
-------------------------
*/

/*
let items = [334, 453, 234, 675, 878];

// Har item par 10% discount
for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;   // 10% calculate
    items[i] = items[i] - offer;
}

console.log(items);
*/


/*
-------------------------
   ARRAY METHODS
-------------------------
*/

/*
let fruits = ["Banana", "Apple", "Mangoes"];
let marks3 = [22, 33, 423, 53, 553];

console.log(fruits);

// push() → end par element add karta hai
fruits.push("Orange");
console.log(fruits);

// pop() → end se element remove karta hai
fruits.pop();
console.log(fruits);

// toString() → array ko string bana deta hai
console.log(fruits.toString());
console.log(marks3.toString());

// concat() → arrays ko merge karta hai
let new_arr = fruits.concat(marks3, items);
console.log(new_arr);
*/


/*
-------------------------
  SHIFT / UNSHIFT
-------------------------
*/

/*
// unshift() → start par element add
fruits.unshift("Grapes");
console.log(fruits);

// shift() → start se element remove
fruits.shift();
console.log(fruits);
*/


/*
-------------------------
  SLICE METHOD
-------------------------
*/

// slice(start, end) → original array change nahi hota
// console.log(fruits.slice(1, 4));



/*
-------------------------
  SPLICE METHOD
-------------------------
*/

// splice(start, deleteCount) → elements remove
// fruits.splice(1, 3);
// console.log(fruits);

// splice(start, deleteCount, newValues...) → replace
// fruits.splice(1, 3, 323, 453, 535);
// console.log(fruits);

// splice(start, 0, newValues...) → insert
// fruits.splice(1, 0, 323, 453, 535);
// console.log(fruits);

// splice(start) → start se end tak delete
// fruits.splice(1);
// console.log(fruits);