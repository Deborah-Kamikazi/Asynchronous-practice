// . Create a function that takes a callback
//  and executes it
//  after 3 seconds using `setTimeout`.

function callback (callback){
  setTimeout(callback,3000)
}
function  call(){
    console.log("hello gain")
}

callback(call);