// primitive 

// String: Represents textual data, e.g., "Hello, World!".
// Number: Represents numeric values, including integers and floating-point numbers, e.g., 42 or 3.14.
// BigInt: Used for integers larger than the Number type can handle, e.g., 12345678901234567890n.
// Boolean: Represents logical values, either true or false.
// Undefined: A variable that has been declared but not assigned a value, e.g., let x; console.log(x); // undefined.
// Null: Represents an intentional absence of value, explicitly set by the programmer, e.g., let y = null;.
// Symbol: Represents a unique and immutable identifier, often used as keys in objects, e.g., let sym = Symbol("id");.




let name ="skntmax"

// console.log(name.length)
// console.log(name.substr(0,3))
// console.log(name.toLowerCase())
// console.log(name.toUpperCase())
// console.log(name.slice(0,1))


let n = 1000

// console.log( typeof n.toString()) // string 
// console.log( typeof n)  // number 



let bigInt = 787875444545454



let bool = false 

// console.log(typeof bool)



let x = null // 

// console.log(typeof x )



sym = Symbol("id");
// console.log( sym)










//  non primitve 
// Object: A collection of key-value pairs, which can store various data, including functions and other objects, e.g., { name: "Alice", age: 25 }.
// Array: A special type of object for ordered collections, e.g., [1, 2, 3, 4].
// Function: A callable object in JavaScript, used to encapsulate code and make it reusable, e.g., function greet() { return "Hello"; }.
// Date: Represents dates and times, e.g., new Date().
// RegExp: Represents regular expressions, used for pattern matching in strings, e.g., /\d+/.
// Map: A collection of keyed data items, similar to an object, but with key-value pairs that preserve insertion order, e.g., new Map().
// Set: A collection of unique values, e.g., new Set([1, 2, 3]).
// WeakMap and WeakSet: Similar to Map and Set, but allow garbage collection of unused items.


// method 1 
// let details = { 
//      name:"skntmax", 
//      address:" Noida "
// }



// method 2 
// let details = {  }

// details.name = "skntmax"
// details.address = "noida"



// method 3 
// let details = new Object()
// details.name="skntmax"
// details.address="add"

// console.log(Object.entries(details))

//   for( let [key , val ] of Object.entries(details) ) {
//      console.log(key+"-->"+ val)
//   }







// --m1
// let arr = []
// arr.push(1)
// arr.push(2)
// arr.push(3)
// console.log(arr)




// --m2

// let arr = [1,2,3,4]
// console.log(arr)



// --m3
// let arr =  new Array()
// arr.push(9)
// arr.push(1)

// console.log( arr)





// --m4
// let arr =[1,2,3,4]


// console.log( arr.at(2))
// console.log( arr.fill(0,0,2))  // modified in original array 
// console.log( arr.map((ele,index , arr )=> ele*2 ))
// console.log( typeof arr.join(','))





let date = new Date()

console.log(date.getDate())
console.log(date.toLocaleDateString())



// console.log(details)




// 

// dkdjddjdjsdddddddkjkjkjddsssssss
// email , phone 