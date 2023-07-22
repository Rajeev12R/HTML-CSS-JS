let a = null;
let b = 345;
let c = BigInt("333") + BigInt("333");
let d = "Harry"
let e = undefined
let f = true;
let g = Symbol("hello i am a symbol")

console.log(a, b, c, d, e, f, g)
// How to check the datatype
console.log(typeof g)

//Non-primitive datatypes--> objects in javascript
const item = {
    "harry": true,
    "shubh": false,
    "lovish": 67,
    "rohan": undefined
}
console.log(item["lovish"])
