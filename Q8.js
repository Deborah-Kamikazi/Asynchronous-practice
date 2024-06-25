// Write a javascript function that displays a
//  number every two seconds and stops displaying after 5 seconds
function desplay(){
    let counter = 1
   const end = setInterval(()=>{
    console.log(counter)
    counter ++
    },200)
 setTimeout(()=>{
    clearInterval(end);
    console.log("everything is done")
},500)
}
desplay()