// Imagine you are developing a real-time news application, and you need to fetch posts from three different sources to provide users with the latest updates.

// The API endpoints for getting posts are:

// https://dummyjson.com/posts
// https://this-may-not-exist.com/posts
// https://jsonplaceholder.typicode.com/posts

// To ensure a seamless user experience, you are supposed to create a function called getFastPosts that fetches posts from these endpoints simultaneously (concurrently) and only presents data from the source that responds the quickest, while ignoring slower or potentially unreliable sources.

// Example of how the function should be used

async function getFastPosts(){
  
    try{
    const p1 =await  fetch("https://dummyjson.com/posts")
    const p2 =  await fetch("https://this-may-not-exist.com/posts",{signal})
    const p3 =  await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts =  await Promise.race([p1,p2,p3])
  console.log(posts)
    }
    catch(error){
        console.log("there is an error",error)
    }

}
getFastPosts()