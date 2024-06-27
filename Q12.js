

async  function fetchUserTodos(){
   try{
     const p1 = await fetch('https://jsonplaceholder.typicode.com/users')
     const data1 = await p1.json()
     const p2 = await fetch("https://jsonplaceholder.typicode.com/todos")
     const data2 = await p2.json()
     const response = Promise.all([data1,data2])
     const data = await response
     const result = data[0]
      const finals = result.map((user)=>{
         return {...user,todo:data[1].filter((el)=> user.id === el.userId)}
      })
 console.log(finals)
  
   }
   catch(error){
    console.log("here is the error",error)
   }
}
fetchUserTodos()