// function exampleFunction(){
//     if(true){
//         var functionScopedVar = "I am function-scopted";
//     }
        
//         console.log(functionScopedVar);
// }
// exampleFunction();
// console.log(functionScopedVar);




// if we are using let keyword then it is only for block(if ke liye )        var can not be used outside the function



// function exampleFunction(){
//     if(true){
//         let functionScopedVar = "I am function-scopted";
//         console.log(functionScopedVar);
//         // console.log(functionScopedVar);
//         // console.log(functionScopedVar);
//         // console.log(functionScopedVar);
//     }
//         // console.log(functionScopedVar);
// }
// exampleFunction();
// console.log(functionScopedVar);







// const functionScopedVar = "I am function-scopted3";

// function exampleFunction(){
//     const functionScopedVar = "I am function-scopted";

//     if(true){
//         const functionScopedVar = "I am function-scopted2";
//         // console.log(functionScopedVar);
//         // console.log(functionScopedVar);
//         // console.log(functionScopedVar);
//         console.log(functionScopedVar);
//     }
//     // functionScopedVar = "I am function-scopted2";

//     console.log(functionScopedVar);
        
// }
// exampleFunction();

// //const and let only works inside the block
// console.log(functionScopedVar);



// shadowing---
// hoisting --- 



// hoisting with var
// console.log(x);
// var x =5;
// console.log(x);



//hoisting with let
// console.log(x);
// let x = 10;
// console.log(x);






//hoisting with function
// hello();
// function hello(){
//     console.log("hello world!");
// }










// let exampleVar = "hello";
// console.log(typeof(exampleVar));

// let exampleVar = null;
// console.log(typeof(exampleVar));



// let person = {
//     name: "alice",
//     age: 30,
//     isStudent: false
// };
// console.log(person.name);



// let fruits = [1,"banana","orange"];
// console.log(fruits[0]);
// console.log(typeof(fruits));


// function add(a,b){
//     return a+b;
// }
// var a=add(2,3);
// console.log(a);



// let result = 5 * "5";
// console.log(result);



//arithmetic operators
//  let x = 5;
//  let y = 2;
//  console.log(x + y);
//  console.log(x - y);
//  console.log(x * y);
//  console.log(x / y);
//  console.log(x % y);


//comparison operators
// let a = 10;
// let b = 5;
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a === b);
// console.log(a !== b);



//assignment operators
// let num = 10;
// num +=5;
// num -=3;
// num *=2;
// num /=4;
// console.log(num);


// working with loops: executes a block of code 
// for(let i = 0;i < 5; i++){
//     console.log(i);
// }



// while loop
// let count = 0;
// while(count < 5){
//     console.log(count);
//     count++;
// }



 //do-while loop
// let count = 0;
// do{
//     console.log(count);
//     count++;
// }while(count < 5);



//for..in loop
// let person = { name:"john",age:30,occupation:"developer"};
// for(let key in person){
//     console.log(key +":" + person[key]);
// }



//object literal notation
// let car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2022,
//     isElectric: false,
//     start: function(){
//         console.log("engine started!");
//     }
    
// };




//object constructor
//object constructor function
// function Book(title,author,year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
// //creating instances of the object
// let book1 = new Book("the catcher in the rye","j.d salinger",1956);
// let book2 = new Book("To kill a mockingbird","harper lee",1960);
// console.log(book1.title);
// console.log(book2.title);
// console.log(book1.author);




//working with array
//creating an array
// let fruits = ["apple","banana","orange","grape"];
//accessing elements
// console.log(fruits[0]);
// //adding elements to the end
// fruits.push("kiwi");
// console.log(fruits);
// //adding elements to the beginning
// fruits.unshift("mango");
// console.log(fruits);
// //removing the last element
// let removedLast = fruits.pop();
// //removing the first element
// let removeFirst = fruits.shift();



// //finding index of an element
// let indexOfOrange = fruits.indexOf("orange");
// //iterating using a for loop
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);

// }


// //slicing an array
// let citrus = fruits.slice(1, 3);//starting point 1 till 3 ..will not print 3rd
// console.log(citrus);



//slicing an array(modifying original array)
// let removed = fruits.splice(1, 2, "pear", "melon");

//concatenating arrays
// let moreFruits = ["grapefruits", "pineapple"];
// let allFruits = fruits.concat(moreFruits);
// console.log(removed);
// console.log(moreFruits);









// //function expression
// const multiply = function(a,b){
//     return a * b;
// };

// //invocation
// const product = multiply(4,6);
// console.log('Function Expression - Product:',product);

// //arrow function
// const subtract = (a, b) => a - b;
// //invocation
// const difference = subtract(8, 3);
// console.log('Arrow Function - Difference:',difference);


//error handling
// try{
//     //code that may throw an error
//     throw new Error("An error");
// }catch (error){
//     //code to handle the error
//     console.error(error.message);
// }finally{
//     //code that will run regardless of whether there was an error
//     console.log("cleanup code");
// }




// //setTimeout Function
// //executes a function or a piece of code once after a specified delay

// const delayedFunction = () => {
//     console.log('Delayed function executed!');
// };
// console.log("bye");
// setTimeout(delayedFunction,2000);//executes after 2 seconds
// console.log("hii")




//setInterval Function
//executes a function repeatedly at a specified interval
const repeatedFunction = () =>{
    console.log('repeated function executed...');
}
const intervalId = setInterval(repeatedFunction,1000);//executed every 1 sec


//after some time(e.g. 5000 millisec), stop interval
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped.');
},5000);
