async function rajeev() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 degree");
        }, 2000);
    })
    let jharkhandWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("12 degree");
        }, 4000);
    })

    // delhiWeather.then(alert)
    // jharkhandWeather.then(alert)

    // OR

    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather Please Wait..." + delhiW);
    let jharkhandW = await jharkhandWeather
    console.log("Fetching Jharkhand Weather Please Wait..." + jharkhandW);
    console.log("Fetched both Delhi & Jharkhand Weather: DONE!");
    return [delhiW, jharkhandW];
}
const ranjan = async () => {
    console.log("I am also running with this ");
}
const main1 = async () => {
    console.log("Welcome to Daily Weather Reports")
    let a = await rajeev()
    let b = await ranjan()
    // a.then((value)=>{
    //     console.log(value);
    // })
}
main1()