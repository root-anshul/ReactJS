import React, {useState} from "react"

const ROLES = ["Frontend" , "Backend" ,"AI Engineer"]

const ManualForm = () => {
  const [values , setValues] = useState({
    name: "",
    email: "",
    role: "",
    experience: "",
    cover: ""
  })
  const [error,setError] = useState ({})
  const [submit, setSubmitted]= useState(false)

  function set(feild) {
    return (e) => setValues((v) => ({...v, [feild] : e.target.value}))
  }

  return (
    <div>ManualForm</div>
  )
}



export default ManualForm