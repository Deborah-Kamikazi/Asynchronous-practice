const p1 = fetch("https://jsonplaceholder.typicode.com/todos/")
const p2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
const p3 = fetch("https://reqres.in/api/users")

Promise.allSettled([p1,p2,p3])
.then((results)=>{
    results.forEach((result)=>{
        if(result.status=== 'fulfilled'){
            result.value.json().then((data)=>{
           console.log(`Fetch  works:`,data);
            }).catch((err)=>{
                console.log(`fetch failled:`,err)
            })
        }
        else{
            console.log("fetch ",result.reason)
        }
    })
})