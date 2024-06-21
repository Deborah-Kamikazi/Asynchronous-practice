// Write a JavaScript function that fetches data from an API and retries 
// the request a specified number of times if it fails.

const fetching  = async  (endpoint,retries)=>{
  try{
    let response = await fetch(endpoint)
    if(response.ok) return response.json()
        else{
    if(retries=== 0) throw new Error("Requestfailed")
        return  await fetching(endpoint,retries-1)
    }
  }
  catch{
    if(retries===0) throw new Error ("Request failed")
        return await fetching(endpoint,retries-1)
  }
};

fetching('https://jsonplaceholder.typicode.com/posts',3)
.then((rep)=>{
    console.log('Response',rep)
})
.catch((error)=>{
    console.error(error)
})