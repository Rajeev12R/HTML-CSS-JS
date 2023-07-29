
// //Syncronous Programmming
// let a = prompt("What is your name ?")
// let b = prompt("Whiat is your age ? ")
// let c = prompt("What is your phone number ?")
// console.log("My name is " + a + " and I am " + b + " years old. " + " You can call me at " + c)

//Asyncronous Programmming
// console.log("Start");
// setTimeout (function(){
//  console.log("hello world")
// },3000)
// console.log("End");


// Callback
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded script with SRC: " + src)
        callback();
    }
    document.body.appendChild(script);
}
function Hello() {
    alert('Hello Guys Welcome back to my Channel')
}
function Goodmorning() {
    alert('Good Morning Guys Welcome back to my Channel')
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",Hello)

