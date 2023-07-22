let num = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
let num_more = [11, 12, 13, 14, 15, 16, 17]

// delete num[0]
// console.log(num);

let newArray = num.concat(num_more)  // Concat merges all the arrays and returns a new array
console.log(newArray);
console.log(num, num_more);

// sort method--> sorts the elements by alphabetical order[BY DEFAULT]

let compare = (a, b) => {
    return a - b
}
let n = [223, 555, 888, 221, 56, 7727, 34, 14, 3, 4]
n.sort(compare)
// n.reverse()  Reverses all the array elements
console.log(n);


//splice and slice 

//Splice can used to be add new items into the array at the particular position by removing elments from the array 

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let deletevalues = a.splice(2, 3, 1000, 1001, 1002, 6, 7, 8, 9)
console.log(a);
console.log(deletevalues);

//Slice --> Slices out a piece from an array. It creates a new array 

let b = [1111, 3442, 3553, 6774, 775, 6, 7, 8, 9]
let newb = b.slice(4, 7)
console.log(newb);