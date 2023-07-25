document.write("Hello")
let t = setTimeout(function() {
  alert("I am inside of setTimeout")  
}, 2000) 

// setTimeout allows us to run a function once after a given interval of time 
// clearTimeout stops the execution of the setTimeout

clearTimeout(t)
console.log(t);

let T = setInterval(function() {
    alert("I am inside of setInterval")  
}, 2000) 

// setInterval allows us to run a function repeatadly after in comppletion of the giver time (in ms)
// clearInterval stops the execution of the setInterval

clearInterval(T)
console.log(T)
