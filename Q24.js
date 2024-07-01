// Create a simple callback function that multiplies two numbers and 
// then calls a callback with the result.
function callbacks(a,b,callback){
  const results =  a*b;
  callback(results)

}

callbacks(3,5,function(results){
  console.log("here is the result:",results)
})
