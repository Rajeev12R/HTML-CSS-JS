let a = (document.getElementsByTagName("span")[0])
console.log(a);
let b = (document.getElementsByTagName("span")[0])
console.dir(b)
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);
let c = first.innerHTML
console.log(c)
let d = first.outerHTML
console.log(c)
console.log(document.body.firstChild);
console.log(document.body.firstChild.data);
console.log(document.body.firstChild.nodeValue);
console.log(document.body.textContent);

// first.outerHTML = "<div> Hey Rajeev </div>"
// first.hidden = false


// HTML CODE TO ATTACH

{/* <body>
    Hello World
    <span id="first" hidden>Hey I am a span</span>
    </body>
</html >

   NOTE  InnerHTML is valid only for Element Nodes

 */}