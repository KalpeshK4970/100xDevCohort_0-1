const firstPromise = new Promise(function(resolve,reject){
      setTimeout(function (){
        resolve()
        console.log("Task1 going on")
      },1000)
})

firstPromise.then(function(){
    console.log("Promise fulfilled")
})

// when we get error 404 for a fetch request it will be in the response
