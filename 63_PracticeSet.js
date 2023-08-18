// Practice Set :-

// QNO 1

// const loadScript = async (src) => {
//     return new Promise((resolve, reject) => {

//         let script = document.createElement("script")
//         script.src = src
//         script.onload = () => {
//             resolve(src + "DONE SUCCESS");
//         }
//         document.head.append(script)
//     })
// }
// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")
// .then((value)=>{
// console.log(value);
// })

// QNO 2 

// const main1 = async () => {
//     // console.log(new Date().getSeconds())
//     console.log(new Date().getMilliseconds())
//     let a =  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js");
//     console.log(new Date ());
//     console.log(a);
// }
// main1()

// QNO 3

// let p = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Error 404 occured"))
//         }, 3000)
//     })
// }
// let a = async () => {
//     try {
//         let c = await p()
//         console.log(c);
//     } 
//     catch (err) { 
//         console.log("Error 404 has been solved"); 
//     }
//     }
// a()

// QNO 4 

let p1 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10)
        }, 2000);

    })
}

let p2 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(20)
        }, 3000);

    })
}

let p3 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(30)
        }, 4000);

    })
}

const run = async () => {
    console.time("run");
    let a1 = p1() //Fetch 10 products from the database
    let a2 = p2() //Fetch more 10 products from the database
    let a3 = p3() //Fetch yet another 10 products from the database
    let a1a2a3 = await Promise.all([a1, a2, a3])
    console.log(a1a2a3);
    console.timeEnd("run");
}
run()