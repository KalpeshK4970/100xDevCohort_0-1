import { useState } from 'react'
import { Header } from './components/Header'
import './App.css'

function App() {
  const [title,setTitle] = useState("My name is Kalpesh") ;

  function changeTitle(){
    setTitle("My name is " + Math.floor(Math.random()*10));
 }
  return (   
      <div >
      {/* <HeaderWithButton></HeaderWithButton> */}
      <button onClick={changeTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="harkirat2"></Header>
      </div>       
  )

}

function HeaderWithButton(){
  const [title,setTitle] = useState("My name is Kalpesh") ;
  function changeTitle(){
    setTitle("My name is " + Math.floor(Math.random()*10));
 }

 return (
   <>
   <button onClick={changeTitle}>Update the title</button>
    <Header title={title}></Header>
   </>
   )
  

}

export default App
