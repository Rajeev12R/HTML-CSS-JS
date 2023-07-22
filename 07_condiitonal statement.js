// a=prompt("Hey What is your age?")
let a = prompt("enter your age");
a2 = Number.parseInt(a); // Converting a string to a number
if (a <= 0) {
    alert("This is a Invalid age");
}
else if (a >= 10 && a <= 18) {
    alert("You are a Teenager");
}
else if (a >= 18 && a <= 40) {
    alert("You are an adult");
}
else if (a >= 50 && a <= 70) {
    alert("Hey! You are becoming old");
}
else if (a > 70) {
    alert("Step ahead to Death💀💀");
}
else if (a > 80){
    alert("You are him ")
}

