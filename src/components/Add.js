import { useState } from "react"

export default function Add({addList}){
    const [text,setText]=useState("")
   const handle_add=(e)=>{
    e.preventDefault()
    addList(text)
    setText("")
   }
return (
    <form onSubmit={handle_add}>
        <input type="text" placeholder="Enter your name" value={text}
        onChange={e=>setText(e.target.value)}
        ></input>
    </form>
)
}
