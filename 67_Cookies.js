// Cookies are small string of data stored directly in the browser 
// In javascript, document.cookie provides access to the cookie 

// Cookies are set by a web server using SET-Cookie HTTP header , Next time when the request is sent to the same domain , the browser sends the cookie using the Cookie-HTTP header
// That way server knows who sent the request 


console.log(document.cookie);
document.cookie = "Rajeev1122334400"
console.log(document.cookie);
document.cookie = "Rajeev111222333444555000"

let key = prompt ("Enter the key")
let value = prompt ("Enter the value")
document.cookie = `${encodeURIComponent(key) } = ${encodeURIComponent(value)}`
console.log(document.cookie)  

