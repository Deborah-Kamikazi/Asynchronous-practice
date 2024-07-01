 
 const controller = new AbortController()
 const signal = controller.signal
 
 function performFastAsync(endpoint,delay){
    // const timeId = setimeout(()=>,delay)
return new Promise((resolve,reject)=>{
    const response = fetch(endpoint,{signal})

  response.then((data)=>{
    resolve(data) 
})

.then((results)=>{
    return results.json()
})
.then((data)=>{
    console.log(data)
})
// setTimeout(()=>controller.abort(),200)
})


}
performFastAsync('https://jsonplaceholder.typicode.com/todos/1',2000)