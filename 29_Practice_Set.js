//Practice Set 

// Qno 1 

// let age = prompt("Enter your actual age!")
// age = Number.parseInt(age)
// if (
//     age >= 18
// )
//     alert("You are elligible to drive")
// else (
//     alert("You are not elligible to drive")
// )

// Qno 2 Qno 3 

let runAgain = true;
while (runAgain) {
    let age = prompt("Enter your actual age!")
    age = Number.parseInt(age)
    if (age < 0) {
        console.error("Age cannot be negative");
        break;
    }
    const canDrive = (age) => {
        return age >= 18 ? true : false
    }

    if (canDrive(age)) {
        alert("You are elligible to drive")
    }
    else {
        alert("You are not elligible to drive")
    }

    runAgain = confirm("Do you want to play again?")
}


