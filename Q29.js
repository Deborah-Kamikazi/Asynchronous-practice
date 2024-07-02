

async function chucks(){
    try{
        const data = await fetch(' https://jsonplaceholder.typicode.com/posts')
        const results = await data.json()
        console.log(results)
    }
 catch(error){
    console.log("here is the error",error)
 }
}
chucks()