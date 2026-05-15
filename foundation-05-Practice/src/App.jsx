import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [joke, setjoke] = useState(null)
  const [error,setError] = useState(null)

async function randomjoke(){
    try{
    const response = await fetch('https://official-joke-api.appspot.com/random_joke')
    const data = await response.json()
    setjoke(data)
  }catch(err){
    setError(err.message)
  }  
}
useEffect(() => {
  randomjoke()
},[]) 
if (error) return <p>Error: {error}</p>  
  if (!joke) return <p>Loading...</p> 
  return (
  <>
   <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
      <button onClick={randomjoke}>New joke</button>
  </>
  )
}

export default App
