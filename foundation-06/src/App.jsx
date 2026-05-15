import { useState } from 'react'
import './App.css'
import ManualForm from './ManualForm'
import HookForm from './HookForm'

function App() {
const [tab, setTab] = useState(true)
  return (
    <>

    <div>
      <div>
      <h1>Job description</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit vitae facilis quae enim doloremque rerum velit ad sequi, soluta sapiente quas incidunt iusto voluptate veritatis atque nesciunt. Pariatur, suscipit!</p>
    </div>
    <div style={{ display:"flex" , gap: "10px" , justifyContent: 'center'}}>
      <button onClick={() => setTab('manual')} >Manual</button>
  
      <button onClick={() => setTab('HookForm')} >HookForm</button>
    </div>
    </div>

    <h1>Getting started reactjs</h1>
    {tab==="manual" ? <ManualForm /> : <HookForm />}
    </>
  )
}

export default App
