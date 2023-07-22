let num = [1, 2, 3, 33, 4]

let b = num.toString() // b is now a strin
console.log(b, typeof b);

let c = num.join("_")
console.log(c, typeof c);

let r = num.pop()  //pop returns the popped element 
console.log(num, r);

let s = num.push(16,)  //push returns the new array length
console.log(num, s);

let t = num.shift() //  Removes an element from the start of an array 
console.log(num, t);

let p = num.unshift(12) // Adds an element in the starting of an array
console.log(num, p);

