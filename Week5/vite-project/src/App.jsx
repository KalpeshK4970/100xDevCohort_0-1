import { useState } from 'react'


function App() {
  const [count, setCount] = useState(1)
  return (
    <>
      <div>
        <CustomButton count = {count} setCount = {setCount}></CustomButton>
      </div>
    </>
  )
}

function CustomButton(props){

  function onClickHandler(){
    props.setCount(props.count*2);
  }

  return <button onClick={onClickHandler}>Counter {props.count}</button>
}

export default App
