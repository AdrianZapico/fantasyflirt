import { useState } from "react"

export default function Cabecalho(props){

    //const [change,setChange] = useState('')


    return(  
    <>
        <header>
            <h1>
            <h1 style={{textAlign:"center"}}>{props.title}</h1>
                
            </h1>
        </header>
    
    </>
    )
}