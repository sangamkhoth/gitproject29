// //synchronous callback function
// function parentFunction(name, callback){
//     callback();
//     console.log("hey "+name);
// }
// function randomFunction(){
//     console.log("hey i am callbackfunction");
// }
// parentFunction("random string",randomFunction);



// //asynchronous callback function
// function parentFunction(name, callback){
//        setTimeout(callback,1000);
//         console.log("hey "+name);
//     }
//     function randomFunction(){
//         console.log("hey i am callbackfunction");
//     }
//     parentFunction("random string",randomFunction);


//anonymous callback function
function parentFunction(name, callback){
       setTimeout(callback,1000);
        console.log("hey "+name);
    }
    parentFunction("random string",function(){
        console.log("hey i am callbackfunction");
    });
    

    