function onePlusAvg(x, y) {
    console.log("done");
    return Math.round(1 + (x + y) / 2)
}
let a = 10
let b = 17
let c = 21

console.log("1 + Average of a and b is ", onePlusAvg(a, b))
console.log("1 + Average of b and c is ", onePlusAvg(b, c))
console.log("1 + Average of c and a is ", onePlusAvg(c, a))