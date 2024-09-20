const fs = require("fs");

// fs.readFile("a.txt","utf-8",function(err,data){
//     if (err) {
//         console.error("Error reading file:", err);
//     } else {
//         console.log(data);
//     }
// })


// latentflip.com to see the visualization

function display(){
    console.log("Hello world2")
}
setTimeout(display,1000);
console.log("hello world0")
let a = 0;
for(let i = 0 ;i < 1000000000 ; i++){
    a ++;
}

console.log("hello world1!");