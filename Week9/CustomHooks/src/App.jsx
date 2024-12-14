// import  React ,{ useState , render, useEffect } from 'react'
// import { MyComponent } from './components/MyComp'

// import './App.css'

// Functional and class components
// function App() {
//    const [render,setRender] = useState(true);

//    useEffect( () => {
//      setInterval(() => {
//       setRender(r => !r);
//      }, 5000)
//    }, [])

//   return (
//     <>
//        {render ? <MyComponent3 /> : <div></div>}
//     </>
//   )
// }

// class MyComponent2 extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {count: 0}
//   }

//   incrementCount= () => {
//      this.setState({count: this.state.count + 1});
//   }

//   render(){
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     )
//   }
// }

// function MyComponent3(){
//   useEffect( () => {
//     console.error("component mounted");

//     return () => {
//       console.log("component unmounted")
//     }
//   }, []);

//   return <div>
//     From inside my component!
//   </div>
// }
// export default App

// import  { useState,useEffect } from "react"
// import axios from "axios"

// data fetcing hook
// function useTodos(n){
//   const [todos,setTodos] = useState([])
//   const [loading,setLoading] = useState(true)

//   useEffect(() => {
//      const value =setInterval ( () => {
//       axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos)
//         setLoading(loading => !loading)
//       })
//  }, n*1000)

//      return () => {
//        clearInterval(value)
//      }
// }, [n])


//   return {todos,loading} ;
// }

// function App(){
//   const {todos,loading }= useTodos(10);

//   return (
//     <>
//     {loading? "Loading..." : todos.map(todo => <Track todo={todo} />)}
//     </>
//   )

// }

// function Track({todo}){
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App

// import {useEffect,useState} from "react"
//Is online hook
// function useOnline(){
//   const [isOnline,setIsOnline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener('online' , () => {
//       setIsOnline(true)})
//     window.addEventListener('offline', () => {
//       setIsOnline(true)})

//   }, [isOnline])

//   return isOnline ;

// }

// function App(){
//  const isOnline = useOnline();

//  return <>
//   {isOnline ? <div>You are online!</div> : <div>Oops! You are offline. </div>}
//  </>
// }

// export default App

// import { useState,useEffect } from "react";
// useInterval Hook
// function useInterval(fn,timeout){
 
//   useEffect( () => {
//     const timer = setInterval(() => {
//       fn()
//     },timeout)

//     return () => {
//       clearInterval(timer)
//     }
//   }, [])
  
// }

// function App(){
//   const [count,setCount] = useState(0);

//   useInterval(() => {
//     setCount(c => c+1)
//   },1000)

//   return (
//     <>
//     Timer is at {count}
//     </>
//   )
// }

// export default App

import { useState, useEffect } from "react";

function useDebounce(value,timeout){
  const [debouncedValue , setDebouncedValue] = useState(value)
  useEffect( () => {
   let timeOut = setTimeout( () => {
       setDebouncedValue(value) ;
   } , timeout)

   return () => {
    clearTimeout(timeOut)
   }
  }, [value])

  return debouncedValue;
}

function App(){
   const [inputValue,setInputValue] = useState("");
   const debounceValue = useDebounce(inputValue,500);

   return(
    <>
     <div> Debounced value is {debounceValue}</div>
    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Search.." />
    </>
   )
}

export default App