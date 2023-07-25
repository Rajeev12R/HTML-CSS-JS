// let ctitle = document.getElementById("First")[0]
// ctitle.style.color = "blue"


// Html code 

//  36
// <nav class="navbar navbar-expand-lg bg-body-tertiary">
//     <div class="container-fluid">
//         <a class="navbar-brand" href="#">Planters</a>
//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li class="nav-item">
//                     <a class="nav-link active" aria-current="page" href="#">Home</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">Link</a>
//                 </li>
//                 <li class="nav-item dropdown">
//                     <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
//                         aria-expanded="false">
//                         Dropdown
//                     </a>
//                     <ul class="dropdown-menu">
//                         <li><a class="dropdown-item" href="#">Action</a></li>
//                         <li><a class="dropdown-item" href="#">Another action</a></li>
//                         <li>
//                             <hr class="dropdown-divider">
//                         </li>
//                         <li><a class="dropdown-item" href="#">Something else here</a></li>
//                     </ul>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link disabled">Disabled</a>
//                 </li>
//             </ul>
//             <form class="d-flex" role="search">
//                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//                 <button class="btn btn-outline-success" type="submit">Search</button>
//             </form>
//         </div>
//     </div>
// </nav>
// <div class="container row m-auto">
//     <div class="card mx-2" style="width: 16rem;">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4PnFwvDxnUXMJ3PLh7rPmNm1kVMTV8F1_g&usqp=CAU"
//             class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 id="First">Mango</h5>
//             <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in omnis nihil,
//                 natus
//                 est velit praesentium error iusto ratione sint.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//     </div>
//     <div class="card mx-2" style="width: 16rem;">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4PnFwvDxnUXMJ3PLh7rPmNm1kVMTV8F1_g&usqp=CAU"
//             class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">Mango</h5>
//             <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in omnis nihil,
//                 natus
//                 est velit praesentium error iusto ratione sint.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//     </div>
//     <div class="card mx-2" style="width: 16rem;">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4PnFwvDxnUXMJ3PLh7rPmNm1kVMTV8F1_g&usqp=CAU"
//             class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">Mango</h5>
//             <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in omnis nihil,
//                 natus
//                 est velit praesentium error iusto ratione sint.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//     </div>
//     <div class="card mx-2" style="width: 16rem;">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4PnFwvDxnUXMJ3PLh7rPmNm1kVMTV8F1_g&usqp=CAU"
//             class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">Mango</h5>
//             <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in omnis nihil,
//                 natus
//                 est velit praesentium error iusto ratione sint.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//     </div>
// </div>
// </body>

// </html



let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "blue"
ctitles[1].style.color = "red"
ctitles[2].style.color = "green"

console.log(ctitles)