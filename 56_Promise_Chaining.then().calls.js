let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolve after 2 sseconds ");
        resolve(56)
    }, 2000)
})
p1.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2")
        },2000)
    })
    return p2
}).then((value) => {
    console.log("We did it");
    return 2 
}).then(()=>{
    console.log("Now It is already done ");
})


const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = () => { resolve("The script has been loaded with no errors")}
        script.onerror = () => { reject(0) }
    })
}
let p3 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js")
p3.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log("We are sorry we are facing error on loading the script ");
})
