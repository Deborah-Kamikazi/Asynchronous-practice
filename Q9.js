// Write a JavaScript function that fetches data from an API and 
// retries the request a specified number of times if it fails.

// first create  i function which will be feaching and i specify the number of retries

  async function retrying(endpoint,retries){
  try{
   const response = await fetch(endpoint);
   if(!response.ok){
    throw new Error("there is an error")
   }
  }
  catch(error){
    retries = retries-1
   if (retries >0){
      retrying(endpoint,retries)
      console.log("there is an error retrying ...")
   }
    
  }
}
retrying('https://jsonplaceholder.typicode.com/todos/',3)