// The try..catch construct may have ne or more code clause: Finally
// If it exist it runs in all cases even if it is an error.
const f = () => {
    try {
        let a = 0
        // console.log(program);  //Error
        console.log("Program ran successfully");
        return
    }
    catch (err) {
        console.log("This is an error");
        console.log(p);   //Error
    }

    // Finally is used for 
    // The final clean up of the code 
    // Close the file 
    // Exit the loop
    // Write the log file 

    finally {
        console.log("I am a good coder ");
    }
}
f()
console.log("End");