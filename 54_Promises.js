// The solution to the callback hells is Promises. 
// A promise is a promise of code execution.
// The code either executes or fails, In both cases the subscriber will be notified

// resolve and reject are 2 callbacks provided by the javascript itself 
// They are called like this

// resolve(value)  =>  If the job is finished successfully 
// reject(error)   =>  If the job fails 

let promise = new Promise(function(resolve) {
    alert("Hello")
    resolve(56)
});
console.log("Hello 1");
setTimeout(function () {
    console.log("Hello 2");
}, 2000);
console.log("Hello 3 ");
console.log(promise);

// fetch google.com homepage  ==> console.log("google.com homepage done")
// fetch data from the data api ==> 
// fetch pictures from the server 
// print downloading 
// Rest of the script keep running
