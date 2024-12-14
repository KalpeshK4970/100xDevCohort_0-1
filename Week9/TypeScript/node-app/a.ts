
function doubleDown( fn: (FirstName: string) => void,FirstName : string){
    setTimeout( () => {
       fn(FirstName);
    }, 1000)

    return ;
}

function greet(FirstName: string){
    console.log("Hello " + FirstName)
}

// doubleDown(greet , "Pajit")

enum Direction {
    Up,
    Down ,
    Left ,
    Right 
}

function doSomething(keyPressed: Direction){

    console.log("Working!")
}

// doSomething(Direction.Up)
// doSomething(Direction.Left)

// function identity<T>(arg: T){
//     return arg;
// }

// let output1 = identity<string>("myString")
// let output2 = identity<number>(100)

// output1.toUpperCase()

function getFirstEl<T> (arr: T[]){
    return arr[0];
}

const el = getFirstEl(["kallu","kalliya"]);
const el1 = getFirstEl<number>([1,2]);
console.log(el.toUpperCase())
console.log(el1)
