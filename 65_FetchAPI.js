// Fetch is used to get the data over the network 

// 1. An object of response class containing status and ok properties 

// status - The http status code eg. - 200
// ok - boolean ,true if the http status code is 200-299  

// let p = fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((value1)=>{
// console.log(value1.status);
// console.log(value1.ok);
//     return value1.json()
// }).then((value2)=>{
//  console.log(value2);      
// })

// 2. After that we need to call another method to access the body in different formats 

// response.text - read and returns the text 
// response.json - parse the response as json

// Other methos includes response.formData() , response.arrayBuffer() , response.bulb()

// Request Header - To set a request header in fretch, we can use the header option


let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response) => {
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers());
    return response.json()
}).then((response) => {
    console.log(response);
})
