// Callbacks

/*
Example - 1
// Callback function
function sayBye(){
    console.log("Goodbye!");
}

// Main function that takes a callback
function greet(name, callback){
    console.log("Hello, " + name + "!");
    callback();
}

// Using the greet function with sayBye as a callback
greet("Faaiz", sayBye);
*/

/*
Example - 2
// Callback function
function showResult(result){
    console.log("The result is: " + result);
}

// Main function
function add(a, b, callback){
    res = a + b;
    callback(res);
}

add(2, 3, showResult);
*/

/*
Example - 3
console.log('Start')

setTimeout(() => {
      console.log('Wait for 2 seconds')}, 2000);

console.log('End');      
*/

/*
Example - 4
console.log('Start')

setTimeout(function() {
      console.log('Wait for 2 seconds')}, 2000);

console.log('End');      
*/

/*
Example - 5
function sum(a,b){
    return a + b;
}

function inputData(num1, num2, callback){
    let result = callback(num1, num2);
    console.log("The sum is: " + result);
}

inputData(5, 10, sum);
*/

/*
Example - 6
function hello(){
    console.log("Hello, World!");
}

setTimeout(hello, 3000);
*/

/*
Example - 7
function fetchData(userId){

    setTimeout( () => {
    console.log("Fetching data for user ID: " + userId);
    }, 2000);
}

fetchData(42);
*/

/*
Example - 8
function checkUser(userName, pass, callback){
   console.log("Checking user: " + userName);
    setTimeout( ()=>{
        if (userName === "admin"){
            console.log("User found: " + userName);
            callback(pass);
        }
        else{
            console.log("User not found: " + userName);
        }
    }, 2000);
}

function passwordCheck(pass){
    console.log("Checking password...");
    setTimeout( ()=>{
      if (pass === "12345"){
          console.log("Login successful!");
          console.log("Welcome, admin!");
      }
      else{
            console.log("Login failed! Incorrect password.");
      }
    },2000)
}

checkUser("admin",'12345', passwordCheck);
*/

//Callback Hell

/*
setTimeout( () => {
     console.log("Task 1");
        setTimeout( () => {
                 console.log("Task 2");
                 setTimeout( () => {
                          console.log("Task 3");
                 
                },2000);
        },2000);
},2000);
*/

/*
function fetchData(userId, callback){
    setTimeout( () => {
    console.log("Fetching data for user ID: " + userId)
       callback();
       },2000);
}

fetchData(425376524, ()=>{
        console.log("Fetching ID 2");
        fetchData(987654321, ()=>{
            console.log("Fetching ID 3");
            fetchData(123456789, ()=>{
                console.log("Fetching ID 4");
               fetchData(192837465, ()=>{
                     console.log("All IDs fetched");
               });
            });
       });
});
*/

/*
function fetchUserNames(username, callback){
      setTimeout(() => {
       console.log("Fetched user: " + username);
       if (callback){
       callback();
       }}, 2000);
}

console.log("Start fetching users");
fetchUserNames("Alice", () =>{
        console.log("Next user");
        fetchUserNames("Bob", () =>{  
            console.log("Next user");
            fetchUserNames("Charlie", () =>{
                console.log("Finish");
            });
    });
});
*/

/*
function placeOrder(orderId, amount, callback){
    console.log("Processing Order.....");
    setTimeout(() =>{
       console.log("Order Placed: " + orderId);
       callback(amount);
    },2000);
}

function paymentProcess(payment, callback){
    console.log("Processing Payment.....")
    setTimeout(() =>{
        if(payment === 30000){
            console.log("Payment Successfully Proceed");
            callback();
        }
        else{
            console.log("Payment Failed");
        }
    },2000);
}

function shipOrder(method, callback){
     console.log("Shipping Order......");
     setTimeout( ()=>{
         if (method === "COD"){
         console.log("Order Successfully Shipped");
         callback();
         }
         else{
            console.log("Incorrect Delivery Method");
         }
     },2000);
}

function deliverOrder(callback){
    console.log("Waiting For Order Delivery.....");
    setTimeout(()=>{
       console.log("Order Successfully Delivered");
       callback();
    },2000);
}

placeOrder(542264, 30000, (amount) => {
           paymentProcess(amount, ()=>{
              shipOrder("COD",()=>{
                deliverOrder(()=>{
                    console.log("Enjoy Your Order...");

            });
        });
    });  
});
*/

/*
function chkUser(userName, callback){
    console.log("Verifying User....");
    setTimeout(()=>{
      if (userName === "Admin"){
        console.log("User Found");
        callback();
      }
      else{
        console.log("User Not Found: " + userName);
      }
    }, 2000)
}

function chkPass(pass, callback){
    console.log("Checking Password.......");
    setTimeout(()=>{
      if (pass === "12345"){
        console.log('User Login Successfully');
        callback();
      }
      else{
        console.log("Incorrect Password");
      }
    },2000)

}

function dashboard(){
    console.log("Setting Up Dashboard......");
    setTimeout(()=>{
        console.log('Welcome Admin');
    },2000)
}

chkUser("Admin", () => {
        chkPass("12345", () =>{
            dashboard()
        });
});
*/


