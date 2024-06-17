


function createAlarm(name,time){
  return new Promise((resolve,reject)=>{
    if(time<=2000){
        setTimeout(()=>{
            console.log(`time is up`);
            resolve()
        },time);
    }
    else{
        setTimeout(()=>{
            console.log(`time is up ${name}`)
            reject()
        },time)
    }
  });
}

createAlarm("john",4000)
.then(()=>{
    console.log(`alarm finished`)
})
.catch((error)=>{
   console.log(`there is an error`,error)
})