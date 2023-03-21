import React from 'react'
import "./InputPost.css"
import { useState } from 'react'
import axios from "axios"
function InputPostComp() {
    const [input, setInput] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data}  = await axios.post("http://localhost:3001/posts", {body: input} )
        alert(data)
    }




  return (
    <div>
        <form onSubmit={handleSubmit} >
        <input onChange={e => setInput(e.target.value)}  className='input-post' type="text" placeholder='Enter Text...' />

        </form>

    </div>
  )
}

export default InputPostComp