// Write a Promise that resolves with "Success!" after 1 second. 
// Log the result to the console.
function success(delay){
    return  new Promise((resolve,reject)=>{
     setTimeout(()=>{
        console.log("success!")
        resolve()
     },delay)
    })
    
}
success(3000)
.then(()=>{
    console.log("here is the result")
})
.catch((error)=>{
    console.log("here is the error",error)
})
    
