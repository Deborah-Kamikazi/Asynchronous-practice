// Create a Promise that resolves with "Data fetched" after 1
//  second and log the message when it resolves.

const promise = new Promise((resolve,reject)=>{
    const fetching = fetch('https://jsonplaceholder.typicode.com/todos')
    setTimeout(()=>{
      console.log(fetching.json()) 
      resolve() 
    },1000)
})
promise.then(()=>{
  console.log("here is the final")
})
