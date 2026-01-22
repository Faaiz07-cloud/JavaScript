/*
What is an Event?
    An event occurs when the user or the browser performs
    an action, such as:
                    Clicking a button
                    Typing in an input field
                    Moving the mouse
                    Submitting a form
                    Loading a page

JavaScript can listen for these events and execute code
when they occur.

Common JavaScript Events
Mouse Events
   click – user clicks an element
   dblclick – double-click
   mouseover – mouse enters an element
   mouseout – mouse leaves an element

Keyboard Events
   keydown – key is pressed
   keyup – key is released
   keypress – key is pressed (deprecated)

Form Events
   submit – form is submitted
   change – input value changes
   focus – element gets focus
   blur – element loses focus

Window / Document Events
   load – page finishes loading
   resize – window size changes
   scroll – page is scrolled

How Events Work (Simple Flow)
   An event happens (e.g., user clicks a button)
   JavaScript detects the event
   An event handler (function) runs
   The browser performs the defined action
*/

let btn = document.getElementById("33432_wwe");
console.log(btn);

// btn.onclick = () => {
//       console.log("Button Clicked");
// }

// btn.onclick = function(){
//       console.log("Button Clicked");
// }

// btn.addEventListener("mouseover", function(){
//     console.log("Button Clicked");
// });

// btn.addEventListener("click", function(){
//     console.log("Button Clicked");
// });

// btn.addEventListener("dblclick", function(){
//     console.log("Button Clicked");
// });