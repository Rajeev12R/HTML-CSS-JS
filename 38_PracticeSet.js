// Html code

// <body>
// <nav>
//     <li>Home</li>
//     <li>About Us</li>
//     <li>Blog</li>
//     <li>Discover</li>
// </nav>
// <table>
//     <td>Hello</td>
//     <td>Hello 1</td>
//     <td>Hello 2</td>
//     <td>Hello 3</td>
//     <td>Hello 4</td>
// </table>


// </body>


document.getElementsByTagName("nav")[0].firstElementChild.style.color = "black"
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "cyan"
});