// . Extend the `fetchToDo` function from Question 4 to include custom headers in the request.
//  Specifically, you need to add a User-Agent header with a custom value and a Content-Type 
//  header set to application/json. Additionally, modify the function to send a JSON payload 
//  in the request body. After sending the request, 
// the function should parse the JSON response and log the parsed object to the console.

function fetchToDo(){
    let responses = new XMLHttpRequest()
    responses.open("POST","https://jsonplaceholder.typicode.com/todos/",true)
    responses.setRequestHeader ('Content-Type','application/json')
    // responses.setRequestHeader ('User-Agent','window/json')
    
    const payLoad = JSON.stringify({
        user1:"Deborah",
        password:"12fjv",
        email: "@deborah",
    })
    responses.addEventListener('readystatechange',()=>{
        if(responses.readyState===4 && responses.status=== 201){
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
    responses.send(payLoad)
    }
    fetchToDo()
     
    
        
    
    