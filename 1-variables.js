

// var

// 1- Scope: var has function scope or global scope. If declared inside a function, it’s accessible only within that function. Outside of any function, it's global.
// 2- Hoisting: Variables declared with var are hoisted to the top of their scope, meaning they are initialized with undefined even before the code runs.
// 3- Redeclaration: You can redeclare a var variable within the same scope without an error.


var name = "rahul"

function fun() {
     var name 
     name = "skntmax"
     console.log(name)
     
     var name = ""

     if(0) {
         var name = ""
     } 
}

// fun()







// let
// Scope: let has block scope, meaning it’s only accessible within the block where it’s declared (e.g., within {}).
// Hoisting: let is hoisted but not initialized, so using it before declaration will throw a ReferenceError.
// Redeclaration: let doesn’t allow redeclaration within the same scope.


function f2() {
     
    if(1) {
        let x  
        x =0 
        console.log(x)
   
    }

}

// f2()






// const
// Scope: const is also block-scoped, like let.
// Hoisting: const is hoisted without initialization, so using it before declaration will throw a ReferenceError.
// Assignment: const requires an initial value and cannot be reassigned. However, objects and arrays declared with const can have their contents modified.





function f3() {

    const c = [1] // no promitive datatypes 
    c.push(2)
    console.log(c)
    
     
}

f3()











