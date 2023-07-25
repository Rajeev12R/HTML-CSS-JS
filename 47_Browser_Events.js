// An event is a signal that something has happened 
// All the DOM nodes generates a signal 

let a = document.getElementsByClassName("container")[0]
a.onclick = ()=>{
    let b = document.getElementsByClassName("container")[0]
    b.innerHTML = "Hello World!"
}