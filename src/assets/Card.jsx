
import React from "react"


const Card=(props)=>{
    return(
        <>
        <div  >
        <h1>{props.src}</h1>
        <h1 >{props.title}</h1>
        <p>{props.desription}</p>
        <p>{props.price}</p>

        </div>

        </>
    )
}
export default Card