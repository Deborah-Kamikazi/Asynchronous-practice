// Create a Promise that rejects with "Error!" after 2 seconds.
//  Handle the error using 
// `.catch()`.
const rejecting = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("here is the error")
        reject()
    },2000)
})

rejecting.then(()=>{
    console.log("weldone")
})
.catch((error)=>{
    console.log("error ",error)
})