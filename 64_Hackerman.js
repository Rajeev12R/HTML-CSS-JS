let a = [
    "Initializing Hacking Tool..!!",
    "Connecting to the server...",
    "Server 1...Occupied...100% No space Available",
    "Searching for other server ",
    "Connecting to @Instagram server..",
    "Server Failed ... 00% Error Occured",
    "Connecting To the Hacking Server... Please wait..20%",
    "Connected Successfully !!",
    "Username rajeev.ranjan12",
    "Trying to Fetch Password with the Hacking Tool",
    "200K Password Tried...Failed..!!",
    "Password not matched....",
    "Another 200K Password Tried...Failed..!!",
    "Match found",
    "Accessing the Account...Please donot press the back button..",
    "Finally Hacked Successfully ^_^"

]
const sleep = async (seconds) => {
return new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve(true)},seconds * 1000)
})
}

const hack = async (messages) => {
   await sleep(2)
    // console.log(messages);
    text.innerHTML = text.innerHTML + messages + "<br>" 
}
(async () =>{
    for(let i=0; i<a.length; i++){
       await hack(a[i])
    }
})()

