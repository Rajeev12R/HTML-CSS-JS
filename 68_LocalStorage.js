// Local Storage 
// Local storage is a web storage which are not sent to server with each request.
// This data survives a full page and even a full browser restart 

// localStorage.setItem("name" , "harry")

let key = prompt("Enter the key you want to set")
let value = prompt("Enter the value you want to set")

localStorage.setItem(key , value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`); 

// With the help of removeItem the items get removed 
 