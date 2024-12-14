"use strict";
function doubleDown(fn, FirstName) {
    setTimeout(() => {
        fn(FirstName);
    }, 1000);
    return;
}
function greet(FirstName) {
    console.log("Hello " + FirstName);
}
// doubleDown(greet , "Pajit")
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = " ";
    Direction["Left"] = " ";
    Direction["Right"] = " ";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    console.log("Working!");
}
doSomething(Direction.Up);
doSomething(Direction.Left);
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
