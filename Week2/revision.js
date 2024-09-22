
// function promisifyFn(duration){
//     const p = new Promise(function(resolve){
//         setTimeout(function(){
//                resolve("foo");
//         },duration);
//     })

//     return p;
// }

// const ans = promisifyFn(3000);
// console.log(ans);
// ans.then(function(){
//     console.log("timeout is done");
// })

// ans.then(val => {
//     console.log(val);
// })

function promisifiedTimeout(duration){
    const p = new Promise( function(resolve){
        setTimeout(resolve(),duartion);
    })
    return p;
}

promisifiedTimeout(2000).then(function(){
    console.log("first is done");
    promisifiedTimeout(1000).then(function(){
        console.log("second is done");
    })
})