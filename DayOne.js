/*

These are general notes about what I learned in Day 1
- You can assign a function to another function. 
- Immediately Invoked Function Expression: You can basically invoke the function to evaluate before it closes out.
- Function Hoisting: Takes all function declarations to the top, even if they are typed later in the file. Its essentially dragging them to the top. In python for example, the function needs to be declared at the top. JS, does not matter!
- Anonymous functions DO NOT support hoisting. 
*/

/**
* @return {Function}
*/

const createHelloWorld = function() {
    return function(...args) {
	return "Hello World!";
    }();
}

const a = createHelloWorld();


