const createTodo = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body:
            JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1' + id )
    let r = response.json()
    return r

}

const mainFunc = async () => {
    let todo = {
        title: 'Javascript',
        body: 'Rajeev Ranjan',
        userId: '1000',

    }
    let todor = await createTodo(todo)
    console.log(todor);
    console.log(await getTodo(1));
}

mainFunc()