
// Write a function that makes an asynchronous request using
//  `XMLHttpRequest`
//  and logs the response.

function requests (){
 const request = new XMLHttpRequest()
   request.open('GET',"https://jsonplaceholder.typicode.com/todos",true) ;
   request.addEventListener('readystatechange',()=>{
    if(request.readyState=== 4 && request.status===200){
      console.log(request.responseText);
    }
   
   })
   request.send()
  request.onerror= ()=>{
    console.log("Network Error")
  }
 
}
requests()