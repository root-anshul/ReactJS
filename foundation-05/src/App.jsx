import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("idle");
  const [seconds,setSeconds] = useState(10)

const addData = () => {
  setPosts([
    ...posts,
    "hitesh",
    "chaicode"
  ])
}
useEffect(() => {
setInterval(()=>{
  setSeconds((current) => Math.max(current-1 ,0 ))
})
  return ()=> {
                //memory cleanup
  }
}, [])

// run -> on component mount(load/render)
//.    -> depends on Dependancy array[](change in [])
  return (
    <>
    <div>
      <h1>useEffect</h1>
      <button onClick={addData}>Add Data</button>
    </div>
    </>
  )
}

export default App
