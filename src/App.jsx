import { useState } from "react"
import Button from "./assets/button";
import Card from "./assets/Card"


import "./App.css"
function App(){
   const[data, setData]= useState(20);
   function addcounter() {
    setData (data + 1)
   }
    return(
        <>
        {/* <h1 className="mt-10">hello world{data}</h1> */}
        {/* <Button name="click"/>
        <Button name="name" /> */}
        <div >
      <h2 ><img src="https://d1iv6qgcmtzm6l.cloudfront.net/categories/9dYPTH74XAMxsO2TcWYyVI8DuBNAvLCfdrYhj82j.png" alt="" />{Card.src}</h2>
        <h2 >samsung{Card.title}</h2>
        <p className="mt-5">samsung s glaxy 5{Card.desription}</p>
        <p>Rs.24000{Card.price}</p>
        </div>
        <div className="card">
      <h2 ><img src="https://d1iv6qgcmtzm6l.cloudfront.net/categories/9dYPTH74XAMxsO2TcWYyVI8DuBNAvLCfdrYhj82j.png" alt="" />{Card.src}</h2>
        <h2 >samsung{Card.title}</h2>
        <p className="mt-5">samsung s glaxy 5{Card.desription}</p>
        <p>Rs.24000{Card.price}</p>
        </div>

        {/* <button onClick={addcounter}>click</button> */}
        </>
    )
    
}
export default App