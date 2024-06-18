function myFetch(){
return new Promise((resolve,reject)=>{
    const request = new XMLHttpRequest()
    request.open("GET",'https://jsonplaceholder.typicode.com/todos/')
    request.addEventListener("readystatechange",()=>{
        if(request.readyState===4 && request.status===200){
            console.log(request.response);
            resolve(request.response)
        }
        else {
            console.log("Error")
            reject('Error')
        }
    })
    request.send()
})
}
myFetch()
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error);
})