// Practice set on Arrray

// Practice Problem 1
// let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// Practice Problem 2

// let ab = [1, 2, 3, 4, 5, 6, 7, 83]
// let z;
// do {
//     z = prompt("Enter a number")
//     a = Number.parseInt(z)
//     ab.push(z)
// } while (z != 0);
// console.log(ab) 

// Practice Problem 3

// let arr = [1, 2, 3, 4, 670, 60, 30, 456, 50, 2, 32]
// let newarr = arr.filter((x) => {
//     return x % 10 == 0
// })
// console.log(newarr);

// Practice Problem 4

// let arr = [1, 2, 3, 4, 670, 60, 30, 456, 50, 2, 32]
// let newarr = arr.map((x) => {
//     return x * x 
// })
// console.log(newarr)

// Practice Problem 5

let arr = [1, 2, 3, 4, 5, 6 ]
let newarr = arr.reduce((x1, x2) => {
    return x1 * x2
})
console.log(newarr)
