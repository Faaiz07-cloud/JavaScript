/*
function weather_api(){
    return new Promise((resolve) =>{
        
        setTimeout(() =>{
            console.log("47 Degree in Lahore");
            resolve("47 Degree in Lahore");
        }, 2000)
    })
}

async function display_weather(){
  let temp = await weather_api()
  console.log("Weather fetched:", temp); // get resolve value
  await weather_api()
  await weather_api()
  await weather_api()

}

display_weather();
*/

function placeOrder(orderId){
      
    return new Promise((resolve, reject) => {
         console.log("Processing Order....");
         saveOrderId = 123456;
         setTimeout(() =>{
             if (orderId === saveOrderId){
                console.log("Order Placed: " + orderId);
                resolve()
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

async function processOrder() {
    try {
        // Step 1: Place Order
        await placeOrder(123456);

        // Step 2: Process Payment
        await processPayment(50000);

        // Step 3: Ship Order
        await shipOrder("COD");

        // Step 4: Deliver Order
        await deliverOrder();

        // Step 5: Final message
        console.log("Enjoy Your Order!");
    } catch (error) {
        // Agar koi step fail ho jaye
        console.log("Error:", error);
    }
}

processOrder();