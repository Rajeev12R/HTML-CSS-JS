// Program to add first n natural number
/*let sum=0
let n=prompt("Enter the value of n !!")
n=Number.parseInt(n)
for(let i=0; i<n; i++){
    sum+= (i+1);
    // console.log((i+1), "+");

    NOTE---> For in loops also works in arrays 
}*/
// console.log("Sum of first" + n + "nautural numbers is" + sum);
let obj = {
    Rajeev: 63,
    Jiya: 81,
    Shivam: 20,
    Anuhska: 79,
}
for (let a in obj) {
    console.log("Marks of " + a + " is " + obj[a]);
}
for (let b of "Jiya") {
    console.log(b)
}

