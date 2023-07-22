let num = [3, 5, 1, 2, 4]
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

// forEach Loop

let n = [3, 54, 1, 2, 4]
n.forEach((element) => {
    console.log(element * element)
})

// Array.from
//  It creates an array from a string or from HTML 

let a = "Rajeev"
let arr = Array.from(a)
console.log(arr);

// for...of 

for (let i of num) {
    console.log(i);
}

// for...in 

for (let i in num) {
    console.log(num[i]);
}


