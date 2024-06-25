// Suppose you have a web page that sends multiple fetch requests to different URLs 
// simultaneously. Implement a scenario where clicking a "Cancel All" button aborts
//  all ongoing fetch requests 
// using AbortController. How would you structure your code to handle this situation
const button = document.getElementById('myButton');
if (button) {
    button.addEventListener('click',()=>{
       clearTimeout(timeid)
    });
}



      async function stoping(){
        const controller = new AbortController()
        const signal = controller.signal
        const timesid = setTimeout(()=>controller.abort(),200)
        try{
        const p1 = await fetch('https://jsonplaceholder.typicode.com/todos/',{signal})
        const p2 = await fetch ("https://reqres.in/api/users",{signal})
        const final = await Promise.all([p1,p2])
        console.log(final)
        
        
        
        }
        catch(error){
            console.log("reference error",error)
        }
          }
          stoping()