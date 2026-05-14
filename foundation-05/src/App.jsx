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
const timerId = setInterval(()=>{
  setSeconds((current) => Math.max(current-1 ,0 ))
},1000)
  
return ()=> {
    clearInterval(timerId) //memory cleanup
  }

}, [])

useEffect(()=>{
  const controller = new AbortController()

  async function loadPost(){
   try{
     setStatus("Loading")
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json
    setPosts(data)
    console.log(data)
    setStatus("Success")
   } catch(e){
       console.log(e) 
   }
  }
  loadPost()
})

// run -> on component mount(load/render)
//.    -> depends on Dependancy array[](change in [])
  return (
    <>
    <div>
      <h1>useEffect</h1>
        {/* <h1>{seconds}</h1> */}
        {/* <button onClick={posts}>Click me</button> */}
    </div>
    </>
  )
}

export default App
