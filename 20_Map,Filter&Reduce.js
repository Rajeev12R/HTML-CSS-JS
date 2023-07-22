let arr = [45, 23, 21]

//  Array map() method
// Creates a new array by performing some operations on each array elements 

// Value , index and array are the arguments of map function 

let a = arr.map((value, index, array) => {
    console.log(value, index, array);
    return value * value
})
console.log(a);

//Array filter() method 

// Filters an array with values that passes a test/case. It creates a new array

let arr2 = [45, 23, 21, 0, 3, 5]
let b = arr.filter((value) => {
    console.log(value);
    return value > 10
})
console.log(b, arr2);

//Array reduce() method 

//Reduces an array to a single value 

let arr3 = [1, 2, 3, 5, 2, 1]
let d = arr3.reduce((v1, v2) => {
    return v1 - v2
})
console.log(d);

