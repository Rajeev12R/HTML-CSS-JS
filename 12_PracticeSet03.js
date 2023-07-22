let marks = {
    Rajeev: 98,
    Rakesh: 0,
    Soni: 0,
    Gokul: 99,
}

for(let i=0; i<Object.keys(marks).length; i++) 
{
    console.log("The marks of " +  Object.keys(marks)[i]  +  " are "  +  marks[Object.keys(marks)[i]])
}