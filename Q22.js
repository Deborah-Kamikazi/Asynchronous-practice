// Using the Fetch API, write a function to fetch data 
// from an API endpoint and log 
// the response to the console.
// https://jsonplaceholder.typicode.com/todos/

const data = fetch('https://jsonplaceholder.typicode.com/todos/')
data.then((rep)=>{
    return rep.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log("here is an error",error)
})