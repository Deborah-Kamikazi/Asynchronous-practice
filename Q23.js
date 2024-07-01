// Write an asynchronous function using `async`/`await`
//  to fetch and log data from an API.

async function datas(){
try{
 const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
 const results = await response.json()
 console.log(results)
}
catch(error){
    console.log("here is the errors",error)
}
}
datas()