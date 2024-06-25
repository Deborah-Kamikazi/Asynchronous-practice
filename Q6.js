// Write a function that takes a URL and fetches
//  data from that URL but aborts when the request takes more than 10ms

async function getdata(){   
  const controller = new AbortController();
  const signal = controller.signal;
  const timeoutid = setTimeout(()=>controller.abort(),200)
     try{
     const response = await fetch("https://jsonplaceholder.typicode.com/todos/",{signal})
     if(!response.ok){
          throw new Error('Request failed')
     }
     clearTimeout(timeoutid)
     const data = await response.json();
     console.log(data);
     }
     catch(error){
         console.log("Request failed",error)
     }
}
getdata()

