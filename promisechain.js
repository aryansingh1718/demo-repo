function promisified(duration){
    const p = new Promise(function(resolve){
        setTimeout(resolve,duration);
    })
    return p;
}
promisified(1000).then(function(){                      //this is a kinda callback/prommise hell
    console.log("first timeout done");
    promisified(2000).then(function(){
        console.log("second timeout done")
    });un
});

//we can avoid this nesting by using promise chaining

promisified(1000).then(function(){                     
    console.log("first timeout done");})
   return promisified(2000).then(function(){
        console.log("second timeout done");
    })


