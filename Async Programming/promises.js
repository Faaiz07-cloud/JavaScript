/*
let promise = new Promise((resolve, reject)=>{
    console.log('Promise Created');
    // resolve("Success");
    // reject("Some Error Occurred");
});

console.log(promise);
*/

/*
function getUser(userId){
    console.log("Fetching User Id...");
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            console.log("User ID: " + userId);
            resolve("Success");
        },5000)
    })
}

let result = getUser(23455);
console.log(result);
*/

/*
let promise = new Promise((resolve, reject) =>{
       
    let name = "Faaiz Gul";
    setTimeout(()=>{
        if (name === "Faaiz Gul"){
           console.log("Correct Name");
           resolve("Success");
        }
        else{
            console.log("Wrong Name");
            reject("Error Wrong Name");
        }
    }, 5000)
})

console.log(promise);
*/

/*
let getName = () => {

    return new Promise((resolve, reject) =>{
       
    let name = "Faaiz Gul";
    setTimeout(()=>{
        if (name === "Faaiz Gul"){
           console.log("Correct Name");
           resolve("Success");
        }
        else{
            console.log("Wrong Name");
            reject("Error Wrong Name");
        }
    }, 5000)
  })
}

let promise = getName()
console.log(promise);

promise.then((resolve) => {
    console.log("Promise Fullfilled: " + resolve)})

promise.catch((error) => {
    console.log("Promise Failed: " + error)})
*/

function placeOrder(orderId, amount){
      
    return new Promise((resolve, reject) => {
         console.log("Processing Order....");
         saveOrderId = 123456;
         setTimeout(() =>{
             if (orderId === saveOrderId){
                console.log("Order Placed: " + orderId);
                resolve(amount)
             }
             else{
                reject("OrderId not found: " + orderId);
             }
         }, 2000)
    })
}

function processPayment(amount){
      
     return new Promise((resolve, reject) => {
         console.log("Processing Payment....");
         setTimeout(() =>{
             if (amount === 50000){
                console.log("Payment Processed Successfully");
                resolve()
             }
             else{
                reject("Payment Failed");
             }
         }, 2000)
    })
}

function shipOrder(method){
    return new Promise((resolve, reject) => {
         console.log("Shipping Order....");
         setTimeout(() =>{
             if (method === "COD"){
                console.log("Order Shipped Successfully");
                resolve()
             }
             else{
                reject("Shipping Failed");
             }
         }, 2000)
    })
}

function deliverOrder(){
     return new Promise((resolve, reject) => {
         console.log("Waiting for Order Delivery....");
         setTimeout(() =>{
                console.log("Order Delivered Successfully");
                resolve()
         }, 2000)
    })
}

placeOrder(123456, 50000)
           .then((amount) =>{
              return processPayment(amount)
           })
           .then(() => {
              return shipOrder("COD")
           })
            .then(() => {
              return deliverOrder()
           })
            .then(() => {
              console.log("Enjoy Your Order");
           })
           .catch(error => {
               console.log(error);
           })