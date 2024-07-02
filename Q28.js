function getFastPosts(){
const p1 = fetch('https://dummyjson.com/posts')
// const p2 = fetch(' https://this-may-not-exist.com/posts')
const p3 = fetch(' https://jsonplaceholder.typicode.com/posts')
const promise = Promise.race([p1,p3])
promise.then((rep)=>{
    return rep.json()
}) 
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log("error here is the",error)
})
    

}
getFastPosts()