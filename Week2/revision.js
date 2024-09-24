
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

const input = [1,2,3,4,5];

const newArr = input.map((ele,i) => {
    return ele*2 + i;
})

const newArr2 = input.filter((ele) => {
    return ele%2 === 0;
})

console.log(newArr2);
console.log(newArr);