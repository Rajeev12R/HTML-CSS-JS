let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending ");
    setTimeout(() => {
        //    console.log("I am a promise and i am fulfilled");
        resolve(true)
        // reject(new Error("Error 404 occured"))
    }, 4000);
})
let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending ");
    setTimeout(() => {
        //    console.log("I am a promise and i am fulfilled");
        // resolve(true)
        reject(new Error("Error 404 occured"))
    }, 4000);
})

// The consuming code can receive the final result of a promise through then and catch 

// To get the Value 
p1.then((value) => {
    console.log(value);
})

// To catch the error 
p2.catch((error) => {
    console.log("An Error Occured");
})
//   OR 

p2.then((value) => {
    console.log(value);
}, (error) => {
    console.log(value);
})
