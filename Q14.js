// Implement a function called repeatEvery() that takes another function and a time interval
//  (in milliseconds) as arguments. This function should 
// execute the given function repeatedly at the specified time interval until manually stopped.

function repeatEvery(callback,delay){
  timeId =setInterval(callback,delay);
}

function call(){
    console.log("call me again")
}

repeatEvery(call, 1000); 

button = document.getElementById("abort")
button.addEventListener("click",()=>{
    clearInterval(timeId)
    console.log("done")
 });

