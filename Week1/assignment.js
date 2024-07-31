
//Q.1 Create 0-30 timer

function display(num){
    console.log(num);
}

Way1
for (let i = 0; i <= 30; i++) {
    setTimeout(function() {
        display(i);
    }, 1000 * i);
}


Way2
let j = 0;

let time = setInterval( function(){
    display(j);
    j++;
    if(j > 30){
        clearInterval(time);
    }
},1000)



//Q.2 Find the time between setout and actual implementation of a function

function display(num, startTime) {
    const endTime = new Date().getTime();
    console.log(`Number: ${num}, Time elapsed: ${endTime - startTime} ms`);
}

for (let i = 0; i <= 5; i++) {
    const startTime = new Date().getTime();
    console.log("startTime: " + startTime);
    setTimeout(function() {
        display(i, startTime);
    }, 1000 * i);
}

// Q.3 Create a terminal Clock

function displayTime(){
    const now = new Date();
    const hour = String(now.getHours()).padStart(2,'0');
    const min = String(now.getMinutes()).padStart(2,'0');
    const sec = String(now.getSeconds()).padStart(2,'0');
    
    console.clear();
    console.log(hour + ":" + min + ":" + sec);
   
}

 setInterval(displayTime,1000)

