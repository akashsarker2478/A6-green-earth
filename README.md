## ques-1: What is the difference between var, let, and const?
- var - Function scoped, can be re-declared and re-assigned.
- Let - Block scoped, cannot be re-declared in the same scope, but can be re-assigned.
- const -   Block scoped, cannot be re-declared or re-assigned.


## ques-2:What is the difference between map(), forEach(), and filter()?
- map() - Iterates over an array. Returns a new array with modified elements.
- forEach() - Iterates over an array.Does not return anything (returns undefined).
- filter() - Iterates over an array.Returns a new array containing only elements that match a condition.

## ques-3: What are arrow functions in ES6?
- Arrow functions are a short way to write functions using =>.Introduced in ES6.function keyword is not needed.

## ques-4: How does destructuring assignment work in ES6?
- Destructuring assignment is an ES6 feature that allows extract values from arrays or objects into variables in a short and easy way.

for example: 
    let numbers = [10, 20, 30];
    let [x, y, z] = numbers;
    console.log(x, y, z);

 Destructuring assignment makes code shorter and cleaner.Works with arrays and objects.
 You can assign variables directly from array or object without separate lines 


## ques-5: Explain template literals in ES6. How are they different from string concatenation?
-Template literals are strings written using backticks (`) in ES6.They allow embedding variables and expressions directly using ${}. Support multi-line strings without using \n.

 Example :
 let name = "Akash";
 let age = 22;
 let text = `My name is ${name} and I am ${age} years old.`;

 Template literals are cleaner and shorter than string concatenation.
 They allow embedding variables directly using ${} and support multi-line strings without \n.













