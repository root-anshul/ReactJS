import { useState } from 'react'
import './App.css'

function App() {
const [value,setValue] = useState(5)

const increase = ()=>{
  setValue(value+1)
}

const decrement = ()=>{
  setValue(value-1)
}
  return (
    <>
    <div>
    <h1>Value: {value}</h1>
    <button onClick={increase}>✅</button>
    <br />
    <br />
    <button onClick={decrement}>❌</button>
    </div>
    </>
  )
}

export default App
