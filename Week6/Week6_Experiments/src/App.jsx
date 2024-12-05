import { useEffect,useState,useMemo} from "react"
// function App() {
//   return <div>
//        <CardWrapper children={<TextComponent/>}></CardWrapper>
//        <CardWrapper children={<TextComponent/>}></CardWrapper>
//        <CardWrapper><div>hi there!</div> </CardWrapper>
//   </div>
   
// }

// function TextComponent(){
//   return <div>
//     hi there!
//   </div>
// }
// function CardWrapper({children}){
     
//   return <div style={{border: "2px solid black"}}>
//     {children}
//   </div>
// }

//6.2 Hooks

// function App(){
//   const [todos,setTodos] = useState([])

//   useEffect( () => {
//        axios.get("https://sum-server.100xdevs.com/todos")
//             .then(function(response){
//                 setTodos(response.data.todos)
//             })
//   } , [])

//   return (
//     <>
//       {todos.map( todo => <Todo title={todo.title} description={todo.description} />)}
//     </>
//   )
// }

// function Todo({title,description}){
//     return <div>
//      <h1>{title}</h1> 
//       {description}
//     </div>
// }


// function App(){
//   const [id,setID] = useState(1);

//   function updateId(value){
//     console.log("Button clicked with value:", value);
//     setID(value)
//    }

//   return <div>
//     <button onClick={updateID}>1</button>
//     <button onClick={updateID}>2</button>
//     <button onClick={updateID}>3</button>
//     <button onClick={updateID}>4</button>
    
//     <Todo id={id} />
//   </div>
// }

// function Todo({id}){
//   const [todo,setTodo ] = useState({});

//   //effect
//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
//          .then(response => {
//           setTodo(response.data.todo)
//          })
//   },[id])

//   return <div>
//     <h1>{todo.title}</h1>
//     <h3>
//       {todo.description}
//     </h3>
//   </div>
// }

// function App(){
//   const [counter,setCounter] = useState(0);
//   const [inputValue,setInputValue] = useState(1);

//   let count = useMemo(() => {
//     console.log("memo got called")
//     let finalCount = 0;
//     for(let i = 1; i<= inputValue ; i++){
//       finalCount += i;
//     }
//     return finalCount;
//   }, [inputValue]);

//   let sum =0;
//   for(let i = 0 ; i<= inputValue ; i++){
//     sum = sum + i;
//   }
 
//   return <>
//   <div>
//    <input onChange={(e) => {setInputValue(e.target.value)}} placeholder={"Find the sum from 1 to n"}></input>
//    <br />
//    Sum is {sum}
//    <br />
//    <button onClick={() => {
//     setCounter(counter + 1);
//    }}>Counter ({counter})</button>
//   </div>
//   </>
// }

function App(){
  const [exchange,setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  
}
export default App
