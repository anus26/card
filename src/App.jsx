import { useState } from "react"
import Button from "./assets/button";
import "./App.css"
function App(){
   const[data, setData]= useState(20);
   function addcounter() {
    setData (data + 1)
   }
    return(
        <>
        <h1 className="mt-10">hello world{data}</h1>
        <Button name="click"/>
        <Button name="name" />
        <button onClick={addcounter}>click</button>
        </>
    )
    
}
export default App