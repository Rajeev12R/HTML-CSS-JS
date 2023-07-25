let first = document.getElementById("first")
let a = first.getAttribute("class")
console.log(a)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
// first.setAttribute("hidden", "true")
// console.log(first.attributes);
first.setAttribute("class", "true sachin")
first.removeAttribute("class")
console.log(first.dataset);
console.log(first.dataset.game);
console.log(first.dataset.player);


 // Html Code

// <body>
//     <div id="first" class="hey" data-game="mario" data-player="Rajeev">This is the first container </div>
//     Hello World
// </body>