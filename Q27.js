// Implement a function `performFastAsync()` that sends a GET request to a specified API endpoint, simultaneously initiates a timer with a given delay, and cancels either the request or timer based on which one finishes first. 

// The function will accept two parameters: the URL of the API endpoint to send a request to and the number of seconds (in milliseconds) to delay the timer.

// The desired behavior involves two possible outcomes:
// - If the request successfully completes before the timer runs out, the function should cancel the timer and return a promise that resolves with the data obtained from the request.

// - if the timer expires before the request finishes, the function should cancel the ongoing request and return a promise that resolves with an empty array.

// // performFastAsync code here ...

// performFastAsync('https://jsonplaceholder.typicode.com/todos/1', 9000)
// .then((data) => {
// 	console.log(data)
// })  

// performFastAsync('https://jsonplaceholder.typicode.com/todos/1', 10)
// .then((data) => {
// 	console.log(data)
// })

function performFastAsync(endpoint,delay){
    const controller = new AbortController() 
    const signal = controller.signal
    new Promise((resolve,reject)=>{
        
        let timeid = setTimeout(()=>
            {
                controller.abort()
                resolve([])
                console.log([])
            },delay)
const response = fetch(endpoint,{signal})
 response.then((rep)=>{
     return rep.json()
    })
    
    .then((data)=>{
        clearTimeout(timeid)
        console.log(data)
        resolve(data)
    })
      })
}
performFastAsync('https://jsonplaceholder.typicode.com/todos/1',10)