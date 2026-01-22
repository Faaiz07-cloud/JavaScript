/*
----------------------------------------
   OBJECTS & PROTOTYPAL INHERITANCE
----------------------------------------
*/

let student = {
    Name : "Faaiz",
    Age : 21,
    RollNo : 101,
    Salary : 50000,
    City : "Lahore",
    Post : "Developer",

    // Regular method using 'this'
    DisplayInfo(){
       console.log(`Name : ${this.Name},
       Age: ${this.Age}, RollNo: ${this.RollNo}`)
    },

    // Function expression
    DisplaySalary : function(){
        console.log(`Salary : ${this.Salary}`)
    },

    DisplayCity : function() {
           console.log(`City : ${this.City}`)  
    },

    // Arrow function: cannot use 'this' properly
    DisplayPost : () =>{
        console.log(`Post : ${student.Post}`)
    }
}

console.log(student);                 // Print full object
console.log(typeof student);          // Object type
console.log(`Name: ${student.Name}`); // Access property
console.log(`Age: ${student['Age']}`); // Access property using []
student.DisplayInfo();                // Call method
student.DisplaySalary();
student.DisplayCity();
student.DisplayPost();

let student2 = {
    Name : "Inam",
    Age : 23,
    RollNo : 102,
    Salary : 60000,
    City : "Multan",
    DisplayInfo(){
       console.log(`Name : ${this.Name},
       Age: ${this.Age}, RollNo: ${this.RollNo},
       City: ${student2.City}`)
    },
}

console.log(student2);
console.log(typeof student2);
console.log(`Name: ${student2.Name}`);
console.log(`Age: ${student2['Age']}`);
student2.DisplayInfo();

// Inherit methods from student
student2.__proto__ = student;

student2.DisplaySalary();
student2.DisplayCity();
student2.DisplayInfo();



/*
----------------------------------------
   CLASSES - Toyota Example
----------------------------------------
*/

class Toyota{

    constructor(model, color, year){
        this.model = model;
        this.color = color;
        this.year = year;
        console.log("Car Object Created");
        console.log(`Model: ${this.model}, Color: ${this.color},
        Year: ${this.year}`);
    }

    Start(){
        console.log(`${this.model} Car Started`);
    }

    Stop(){
        console.log(`${this.model} Car Stopped`);
    }

    Drive(Mode){
        console.log(`${this.model} Car is now in ${Mode} driving mode`);
    }

    CC(cc){
        console.log(`${this.model} Car has engine capacity of ${cc} CC`);
    }

    Color(color){
        console.log(`${this.model} Car is ${color}`);
    }

    price = 5000000;

    DisplayPrice(){
        console.log(`Price of ${this.model} is ${this.price}`);  
    }
}

let corolla = new Toyota("Corolla", "White", 2020);
corolla.Start();
corolla.Stop()
corolla.Drive("Sport");
corolla.CC(1500);
corolla.Color("White");
corolla.DisplayPrice();

console.log(corolla.price);
corolla.price = 7000000;
console.log(corolla.price);
corolla.DisplayPrice();

let camry = new Toyota("Camry", "Black", 2021);
camry.Start();
camry.Stop()
camry.Drive("Eco");
camry.CC(2500);
camry.Color("Black");
camry.DisplayPrice();     



/*
----------------------------------------
   INHERITANCE - Single Level
----------------------------------------
*/

class Parent{

    father_name = "John Doe";
    mother_name = "Max Doe";

    DisplayParents(){
        console.log(`Father's Name: ${this.father_name},
        Mother's Name: ${this.mother_name}`);
    }
}

class Child_1 extends Parent{
      
    child_name = "Chris Doe";

    DisplayChildInfo(){
        console.log(`Child's Name: ${this.child_name}`);
    }
}

class Child_2 extends Parent{

    child_name = "Emma Doe";
    
    DisplayChildInfo(){
        console.log(`Child's Name: ${this.child_name}`);
    }
}

class Child_3 extends Parent{
    
    child_name = "Sophia Doe";
    
    DisplayChildInfo(){
        console.log(`Child's Name: ${this.child_name}`);
    }
}

// Objects of Child Classes
let child1 = new Child_1();
console.log(`Child 1's Name: ${child1.child_name}`);
console.log(`Child 1's Father Name: ${child1.father_name}`);
console.log(`Child 1's Mother Name: ${child1.mother_name}`);
child1.DisplayParents();
child1.DisplayChildInfo();

let child2 = new Child_2();
console.log(`Child 2's Name: ${child2.child_name}`);
console.log(`Child 2's Father Name: ${child2.father_name}`);
console.log(`Child 2's Mother Name: ${child2.mother_name}`);
child2.DisplayParents();
child2.DisplayChildInfo();

let child3 = new Child_3();
console.log(`Child 3's Name: ${child3.child_name}`);
console.log(`Child 3's Father Name: ${child3.father_name}`);
console.log(`Child 3's Mother Name: ${child3.mother_name}`);
child3.DisplayParents();
child3.DisplayChildInfo();
child3.child_name = "Olivia Doe";
console.log(`Updated Child 3's Name: ${child3.child_name}`);
child3.DisplayChildInfo();
child3.father_name = "Michael Doe";
console.log(`Updated Child 3's Father Name: ${child3.father_name}`);
child3.DisplayParents();



/*
----------------------------------------
   INHERITANCE - Constructor & Super
----------------------------------------
*/

class ParentConstructor{

    constructor(father_name, mother_name){
        this.father_name = father_name;
        this.mother_name = mother_name;
        console.log("Parent Constructor Created");
    }
    DisplayParents(){
        console.log(`Father's Name: ${this.father_name}, Mother's Name: ${this.mother_name}`);
    }
}

class ChildConstructor extends ParentConstructor{
      
    constructor(father_name, mother_name, child_name){
        super(father_name, mother_name);
        this.child_name = child_name;
        console.log("Child Constructor Created");
    }

    displayChildInfo(){
        console.log(`Child's Name: ${this.child_name}`);
    }
}

class GrandChild extends ChildConstructor{
    
    constructor(father_name, mother_name, child_name, grandChild_name){
        super(father_name, mother_name, child_name);
        this.grandChild_name = grandChild_name;
        console.log("GrandChild Constructor Created");
    }

    displayChildInfo(){
        super.displayChildInfo();
        console.log(`GrandChild's Name: ${this.grandChild_name}`);
    }
}

// Objects
let parent = new ParentConstructor("Dom", "Anna");
parent.DisplayParents();

let child1c = new ChildConstructor("Dom", "Anna", "Liam");
child1c.DisplayParents();
child1c.displayChildInfo();

let child2c = new ChildConstructor("Dom", "Anna", "Mia");
child2c.DisplayParents();
child2c.displayChildInfo();
child2c.child_name = "Ava";
console.log(`Updated Child's Name: ${child2c.child_name}`);

let grand_Child = new GrandChild("Dom", "Anna", "Ethan");
grand_Child.DisplayParents();
grand_Child.displayChildInfo();

let grand_Child2 = new GrandChild("Dom", "Anna", "Ethan", "Noah");
grand_Child2.DisplayParents();
grand_Child2.displayChildInfo();

let grand_Child3 = new GrandChild("Dom", "Anna", "Ethan", "Olivia");
grand_Child3.DisplayParents();
grand_Child3.displayChildInfo();


/*
------------------------
   ENCAPSULATION
------------------------
*/

class BankAccount {
    #balance = 0;  // truly private
    
    constructor(user_name){
        this.username = user_name;
        this.#balance = 0;
    }

    displayUser(){
        console.log(`Account Holder: ${this.username}`);    
    } 
    
    deposit(amount){
        if (amount <= 0){
            console.log("Deposit must be Greater than 0.");
        }
        else{
            this.#balance += amount;
            console.log(`Deposited: ${amount}`);
        }
    }

    withdraw(amount){
       if (amount <= 0){
            console.log("Withdrawal must be Greater than 0.");
       }
        else if (amount > this.#balance){
            console.log("Insufficient Balance.");
        }
        else{
            this.#balance -= amount;
            console.log(`Withdrawn: ${amount}`);
        }
    }

    getBalance(){
        return this.#balance;
    }
}

let acc = new BankAccount("Faaiz");
acc.displayUser();
acc.deposit(10000);
console.log(`Current Balance: ${acc.getBalance()}`);
acc.deposit(0);
console.log(`Current Balance: ${acc.getBalance()}`);
acc.deposit(5000);
console.log(`Current Balance: ${acc.getBalance()}`);
acc.withdraw(3000);
console.log(`Current Balance: ${acc.getBalance()}`);
// console.log(acc.#balance); // ❌ Error (private)


/*
--------------------
   ABSTRACTION 
--------------------
*/

class Vehicle {
    start(){
        console.log("Vehicle Started by key"); // default
    }

    stop(){
        console.log("Vehicle Stopped by key"); // default
    }
}

class Bike extends Vehicle {
    start(){
        console.log("Bike Started by button"); // overridden
    }

    stop(){
        console.log("Bike Stopped by button"); // overridden
    }
}

class Car extends Vehicle {
    start(){
        console.log("Car Started by remote"); // overridden
    }
    
    stop(){
        console.log("Car Stopped by remote"); // overridden
    }
}

let bike = new Bike();
bike.start();
bike.stop();

let car = new Car();
car.start();
car.stop();

// You only know what it does, not how it does it internally.


/*
-------------------
   POLYMORPHISM 
-------------------
*/

class Animal {
    constructor(name){
        this.name = name;
        console.log(`Animal Name: ${this.name}`);
    }

    sound(){
        console.log("Animal makes a sound"); // default
    }
}

class Dog extends Animal {
    sound(){
        console.log("Dog barks"); // overridden
    }
}    

class Cat extends Animal {
    sound(){
        console.log("Cat meows"); // overridden
    }
}

let dog = new Dog("Buddy");
dog.sound();

let cat = new Cat("Whiskers");
cat.sound();


/*
----------------------------------------
   TYPE CHECKING
----------------------------------------
*/

class Bike{

    display(){
       console.log("This is Bike class");
    }
}

let bike1 = new Bike();
bike1.display();

console.log(typeof bike1);
console.log(bike1 instanceof Bike);
console.log(bike1 instanceof Object);


/*
----------------------------------------
   GETTERS & SETTERS
----------------------------------------
*/

// Without Getters and Setters

class Student {

    constructor(name){
        this.name = name;
    }
}

let s1 = new Student("Ali");
console.log(s1.name);
s1.name = "A";   // ✔️ Wrong name allowed
console.log(s1.name);

// With Getters and Setters

class Student {

    constructor(name){
        this.name = name;
    }   

    get DisplayName(){
        return this.name;
    }

    // its basically a function but used a setter property
    set Set_New_Name(NewName){ 
        if (NewName.length < 2){
            console.log("Name must be at least 5 characters long.");
        }
        else{
            this.name = NewName;
            console.log("Name updated successfully.");
        }
    }
}

let s1 = new Student("Ali");
console.log(s1.DisplayName);
// s1.Set_New_Name("A"); // ❌ not call as a function

s1.Set_New_Name = "A"; // ❌
s1.Set_New_Name = "Ahmed"; // ✔️
console.log(s1.DisplayName);


/*
----------------------------------------
   PRIVATE VS CONVENTIONAL PRIVATE
----------------------------------------
*/

// # (Hash) → Actual private field

class Student {

    #marks = 300;

    displayMarks(){
        console.log(`Marks: ${this.#marks}`);
    }
}

let s1 = new Student();
s1.displayMarks();
s1.#marks = 400; // ❌ Error - Private field

// _ (Underscore) → Conventionally private

class Student {

    _marks = 300;
    
    displayMarks(){
        console.log(`Marks: ${this._marks}`);
    }
}

let s1 = new Student();
s1.displayMarks();
s1._marks = 400; // ✔️ Accessible but discouraged
s1.displayMarks();

// _ is just a hint to developers - Don’t touch this outside the class.


/*
----------------------------------------
   STATIC METHOD
----------------------------------------
*/

class Student {
    constructor(name) {
        this.name = name; // instance property
    }

    // Instance method
    greet() {
        console.log(`Hello, I am ${this.name}`);
    }

    // Static method
    static schoolInfo() {
        console.log("This school is ABC High School");
    }
}

let s1 = new Student("Ali");

s1.greet();           // ✅ Hello, I am Ali
// s1.schoolInfo();   ❌ Error! Static method cannot be called on instance

Student.schoolInfo(); // ✅ This school is ABC High School