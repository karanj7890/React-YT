import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] =useState(15)
  //let counter= 5
  const addvalue= ()=>{
    console.log('clicked');
    counter = counter+1
    if(counter <=20){
      setCounter(counter)
    }
    else{
      alert('limit reached')
    }
    
  }

  const decvalue= ()=>{
    counter = counter-1;
    if(counter >=0){
      setCounter(counter)
    }
    else{
      alert('limit reached')
    }
    
  }

  return (
    <>
     
      <h1>Karan</h1>
      <h2>Counter Variable: {counter}</h2>

      
      <button onClick={addvalue}>Add value {counter}</button>
      <br />
      <button onClick={decvalue}>Decrease Value {counter}</button>
     
    </>
  )
}

export default App
