
// Create 0-30 timer

function display(num){
    console.log(num);
}

//Way1
// for (let i = 0; i <= 30; i++) {
//     setTimeout(function() {
//         display(i);
//     }, 1000 * i);
// }


//Way2
let j = 0;

let time = setInterval( function(){
    display(j);
    j++;
    if(j > 30){
        clearInterval(time);
    }
},1000)