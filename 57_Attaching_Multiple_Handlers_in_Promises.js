// Attaching Multiple handlers

// We can attach multiple handlers to one promise.
// They donot pass the result to each other
// Instead they process it independtly

let p1 = new Promise((resolve, reject)=>{
    // alert("Promise not resolved")
setTimeout(()=>{
    resolve(1)
},2000)
})
p1.then(()=>{
    console.log("Congratulations! This promise is now resolved ");

})
p1.then(()=>{
    console.log("Hurry!!!");
})
