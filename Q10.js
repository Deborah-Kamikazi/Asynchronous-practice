


function fetchToDo(){
let responses = new XMLHttpRequest()
responses.open("GET","https://jsonplaceholder.typicode.com/todos/1",true)

responses.addEventListener('readystatechange',()=>{
    if(responses.readyState===4 && responses.status=== 200){
        console.log(responses.response)
    }
    else if(responses.readyState===4 && responses.status=== 404){
        console.log("wrong url")
    }
    else {
        console.log("Loading...")
    }
})
responses.onerror =  ()=>{
    console.log("error from the server")
}
responses.send()
}
fetchToDo()
 