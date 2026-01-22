/*
What is DOM? (Basic Concept)

DOM = Document Object Model
1. When a web page (HTML) loads in the browser, 
the browser converts HTML into a tree-like structure

2. This structure is called the DOM

3. JavaScript uses the DOM to read, change, add, or remove HTML elements

In simple words:
DOM allows JavaScript to control HTML and CSS

Why DOM is Important?

Without DOM:
HTML would be static (no interaction)

With DOM:
Buttons work
Forms validate
Content updates without reloading
Animations and effects happen

Examples:
Change text on button click
Show/hide elements
Get input values
Change styles dynamically

DOM Tree Structure

HTML:
<html>
  <body>
    <h1>Hello</h1>
    <p>Welcome</p>
  </body>
</html>

DOM Tree:
Document
 └── html
     └── body
         ├── h1
         └── p
Each item is called a Node
*/

// console.dir() - displays an interactive list of object properties
// console.log() - prints values or messages to the console
// --------------------------------------------
// console.log(window);
// console.log(window.document);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.scripts);
// console.dir(window);
// console.dir(window.document);
// console.dir(document.body);

// console.log(document.body.childNodes[1]);
// console.log(document.body.childNodes[2]);
// console.log(document.body.childNodes[3]);
// console.log(document.body.childNodes[4]);
// console.log(document.body.childNodes[5]);
// console.log(document.body.childNodes[6]);

// DOM Manipulation

// 1. Selection by id
// let para = document.getElementById("paragraph");
// console.log(para);

// let sub_heading_1 = document.getElementById("sub_heading_1");
// console.log(sub_heading_1);

// 2. Selection by class_name
// let small_head = document.getElementsByClassName("small_heading");
// console.log(small_head);

// 3. Selection by tag_name
//  let paras = document.getElementsByTagName("p");
// console.log(paras);

// 4. Query Selector by tags
// let first_element = document.querySelector('p');
// console.log(first_element);

// let all_element = document.querySelectorAll('p');
// console.log(all_element);

// 5. Query Selector by class_name
// let first_element = document.querySelector(".small_heading");
// console.log(first_element);

// let all_element = document.querySelectorAll('.small_heading');
// console.log(all_element);

// 6. Query Selector by id
// let element = document.querySelector("#paragraph");
// console.log(element);

// let element = document.querySelectorAll("#paragraph");
// console.log(element);

// let element = document.querySelector("#sub_heading_1");
// console.log(element);

// Properties

// 1. Tag Name
// console.log(first_element.tagName);

// 2. Inner Text
// let p = document.querySelector('p')
// console.log(p);
// console.log(p.innerText);
// p.innerText = "Text Changed";
// console.log(p.innerText);
// console.log(p);

// 3. Inner HTML
// let p = document.querySelector('p');
// console.log(p);
// p.innerHTML = "<h1>New Tag</h1>";
// console.log(p.textContent);
// console.log(p);
