import { useState,lazy,Suspense,useContext } from 'react'
import './App.css'
import { CountContext } from './context'
import { countAtom, evenSelector } from './store/atom/count'
import {useRecoilState, useRecoilValue,RecoilRoot,useSetRecoilState} from "recoil"
// import { Topbar } from './components/Topbar'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'

// Lazy loading
// const Landing = lazy ( () =>   import('./components/Landing'))
// const Dashboard = lazy(() => import('./components/Dashboard'))

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//    <>
    
//     <BrowserRouter>
//       <Topbar></Topbar>
//       <Routes>
//         <Route path='/dashboard' element={ <Suspense fallback={"...loading"}><Dashboard /></Suspense>}></Route>
//         <Route path='/' element={<Suspense fallback={"loading..."}><Landing /></Suspense>}></Route>
//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

//Context API
// function App(){
//   const [count, setCount] = useState(0);
  
//   return (
//     <div>
//     <CountContext.Provider value={count}>
//       <Count  setCount={setCount} />
//     </CountContext.Provider>
//     </div>
//   )

//   function Count({setCount}){
//     return <div>
//       <CountRender ></CountRender>
//       <Button  setCount={setCount}></Button>
//     </div>
//   }

//   function CountRender(){
//     const count = useContext(CountContext);
//     return <div>
//       <b>
//       Count is {count}
//       </b>
//     </div>
//   }

//   function Button({setCount}){
//     const count = useContext(CountContext);
//     return <div>
//       <button onClick={() => {
//         setCount(count+1);
//       }}>Increment</button>
//       <button onClick={() => {
//         setCount(count-1)
//       }}>Decrement</button>
//     </div>
//   }

// }

//Atom
function App(){
  
  return (
    <div>
      <RecoilRoot>
      <Count />
      </RecoilRoot>
    </div>
  )

  function Count(){
    return <div>
      <CountRender ></CountRender>
      <Button ></Button>
    </div>
  }

  function CountRender(){
    const count = useRecoilValue(countAtom);
    return <div>
      <b>
      Count is {count}
      </b>
      <EvenCountRenderer />
    </div>
  }

  function EvenCountRenderer(){
    const isEven = useRecoilValue(evenSelector)

    return <div> 
     { isEven ? "It is even": "It is odd"}
    </div>
  }
  function Button(){
    const setCount = useSetRecoilState(countAtom);
    console.log("Button Re-render")
    return <div>
      <button onClick={() => {
         setCount(count => count+1)
         console.log("Function Re-render")
      }}>Increment</button>
      <button onClick={() => {
        setCount(count => count-1)
      }}>Decrement</button>
    </div>
  }

}
export default App
