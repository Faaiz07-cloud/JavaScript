
/*
-------------------------
        FUNCTIONS
-------------------------
*/

/*
// Function = reusable block of code

// Simple function (no parameters)
function display() {
    console.log("Faaiz Gul");   // Text print karega
}

// Function calls
display();
display();
display();
display();
*/


/*
-------------------------
   FUNCTION WITH PARAMETER
-------------------------
*/

/*
function display2(name) {
    console.log(`My name is ${name}`); // Dynamic value print
}

display2("Faaiz Gul");
*/


/*
-------------------------
   FUNCTION WITH MULTIPLE
   PARAMETERS
-------------------------
*/

/*
function sum(a, b) {
    console.log(`The sum of ${a} and ${b} = ${a + b}`);
}

sum(2, 3);
*/


/*
-------------------------
   FUNCTION WITHOUT RETURN
-------------------------
*/

/*
function sum2(a, b) {
    let result = a + b;        // Sum store ki
    console.log(result);       // Result print
}

sum2(4, 6);
*/


/*
-------------------------
   FUNCTION WITH RETURN
-------------------------
*/

/*
function sum3(a, b) {
    let result = a + b;
    return result;             // Value return
}

// Returned value ko console me print
console.log(sum3(6, 6));
*/


/*
-------------------------
     ARROW FUNCTIONS
-------------------------
*/

/*
// Arrow function = function ko variable me store karna

// Arrow function with return
let mul = (a, b, c) => {
    return a * b * c;
};

console.log(mul(2, 2, 2));

// Arrow function without return
let add = (a, b, c) => {
    console.log(a + b + c);
};

add(2, 2, 2);

// Arrow function without parameters
let disp = () => {
    console.log("Hi");
};

disp();
*/


/*
-------------------------
    forEach METHOD
-------------------------
*/

/*
// forEach = array ke har element par loop

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Sirf value access
arr.forEach((val) => {
    console.log(val);
});

// Value + index access
arr.forEach((val, index) => {
    console.log(val, index);
});
*/
