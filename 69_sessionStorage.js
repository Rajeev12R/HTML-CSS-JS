// session Storage is used less often than localStorage. Properties and methods are same as localStorage but


//  1. The session storage exist only within the current browser tab Another tab with some page will have a   different storage 

// 2. The data survives page refresh but not opening/ closing tabs 

// // Storage event - When the data gets updated in localStorage or sessionStorage storage event triggered with some properties :-
// 1. key - The key 
// 2. old value - Previous value 
// 3. newValue - New value 
// 4. url - Page URL 
// 5. storage Area - local or session storage 

// We can listen the onstorage wvent of window which is triggered when updates are made to the same storage from the other documents  


// sessionStorage.setItem("name", "harry")
// sessionStorage.getItem("name")
// sessionStorage.removeItem("name")

window.onstorage = (e) => {
    alert("change")
    console.log(e);
}
